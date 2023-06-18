const openai = require("../config/openai");
const InputPrompt = require("../models/input-prompt");

module.exports = {
  async sendText(req, res) {
    const openaiAPI = openai.configuration();
    const { prompt } = req.body;
    // const inputModel = new InputPrompt(prompt);
    // console.log("req", req);
    // console.log("res", res);
    // const { prompt } = req.body;
    console.log("prompt-controller: prompt =>", prompt);
    // console.log("prompt-controller: openaiAPI =>", openaiAPI);

    // try {
    //   const response = await openaiAPI.createCompletion(
    //     openai.textCompletion(prompt)
    //   );

    //   // console.log("response", response);

    //   return res.status(200).json({
    //     success: true,
    //     data: response,
    //   });
    // } catch (error) {
    //   console.log("error", error);

    //   return res.status(400).json({
    //     success: false,
    //     error: error.message || "There was an error on the server",
    //   });
    // }

    const options = {
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    };

    try {
      const response = await openaiAPI.createCompletion(options);

      // console.log("response", response);

      return res.status(200).json({
        sucess: true,
        data: response.data.choices[0].text,
      });

      // return res.status(200).json({
      //   success: true,
      //   data: response,
      // });
    } catch (error) {
      console.log("error", error);

      return res.status(400).json({
        sucess: false,
        error: error.response
          ? error.response.data
          : "There was an inssue on the server",
      });
    }
  },
};
