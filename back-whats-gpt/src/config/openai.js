const { Configuration, OpenAIApi } = require("openai");

module.exports = class openai {
  static configuration() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    return new OpenAIApi(configuration);
  }

  static textCompletion( prompt ) {
    console.log("openai prompt", prompt);
    return {
      model: "gpt-3.5-turbo-16k",
      prompt: `${prompt}`,
      temperature: 0.9,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
    };
  }
};
