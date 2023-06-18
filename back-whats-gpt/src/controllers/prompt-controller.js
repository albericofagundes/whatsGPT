const OpenAI = require("../config/openai");

module.exports = {
  async sendText(req, res) {
    const { prompt } = req.body;
    const response = await OpenAI.textCompletion(prompt);

    console.log("response",response);

    return res.status(200).json({
      success: true,
      data: response,
    });
  },
};
