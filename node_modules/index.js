import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-3qoUh3pHf8mzlmBQa6YGU9Pj",
  apiKey: "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"
})

const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    {role: "user", content: "Hello World"}
  ]
})

console.log(completion.data.choices[0].messages);