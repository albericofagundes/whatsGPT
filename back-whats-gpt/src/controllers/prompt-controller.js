const openai = require("../config/openai");
const InputPrompt = require("../models/input-prompt");

console.log("prompt controler");

module.exports = {
  async sendText(req, res) {
    console.log("req",req);
    console.log("res",res);
    const openaiAPI = openai.configuration();
    console.log("openaiAPI",openaiAPI);
    const inputModel = new InputPrompt(req.body);
    console.log("inputModel",inputModel);

    try {
        console.log("prompt controle");
      const response = await openaiAPI.createCompletion(
        openai.textCompletion("inputModel")
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
