const { Configuration, OpenAIApi } = require("openai");

module.exports = class openai {
  static configuration() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    return new OpenAIApi(configuration);
  }

  static textCompletion({ prompt }) {
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

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "gpt-3.5-turbo-16k",
//   prompt:
//     "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: qual o maior pais do mundo O maior pais do mundo é a Rússia, com uma área de 17.098.242 quilômetros quadrados.",
//   temperature: 0.9,
//   max_tokens: 150,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0.6,
//   stop: [" Human:", " AI:"],
// });
