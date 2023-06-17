const openai = require("../config/openai");
const InputPrompt = require("../models/input-prompt");

module.exports = {
  async sendText(req, res) {
    const openaiAPI = openai.configuration();
    const inputModel = new InputPrompt(req.body);

    try {
      const response = await openaiAPI.createCompletion(
        openai.textCompletion(inputModel)
      );
      return res.status().json({
        sucess: true,
        data: response.data.choices[0].text,
      });
    } catch (error) {
      console.log("error", error);
      return res.status(400).json({
        sucess: false,
        error: error.response
          ? error.response
          : "there was a error on the server",
      });
    }
  },
};
