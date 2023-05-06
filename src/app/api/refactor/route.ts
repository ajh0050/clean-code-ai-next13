import { Configuration, OpenAIApi } from "openai";

export type GenerateReplyRequest = {
  body: { codeToReview: string; language: string };
};

export default async function handler(req: GenerateReplyRequest, res: any) {
  const codeToReview = req.body.codeToReview;
  const language = req.body.language;
  const apiKey = process.env.OPEN_AI_API_KEY;

  if (!codeToReview) {
    return res.status(400).json({
      error: {
        message: "Missing required parameter: codeToReview",
      },
    });
  }

  if (!apiKey) {
    return res.status(400).json({
      error: {
        message: "Missing required parameter: apiKey",
      },
    });
  }

  const configuration = new Configuration({ apiKey });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(codeToReview, language),
      temperature: 0.6,
      max_tokens: 2048,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error: any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(codeToReview: string, language: string) {
  return `You're an expert level software engineer and have a single ${language} file to refactor. You're a stickler for clean code, meaning no comments in the code, code should be self documenting, using correct naming for variables and functions, creating the right abstractions and many more ideas that you pull from Kent Beck, Martin Fowler, Bob Martin and other engineering thought leaders. Please write inline comments about your design decisions and talking about the choices you made in your refactor (only for things you changed) and reply back the code that you refactored(only put things you actually changed).  Please now refactor the following code:
${codeToReview}`;
}
