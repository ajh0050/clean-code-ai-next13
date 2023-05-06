import { Configuration, OpenAIApi } from "openai";
import {NextRequest, NextResponse} from "next/server";

export type GenerateReplyRequest = {
  body: { codeToReview: string; language: string };
};

export async function POST(req: NextRequest) {
  const body = await req.json()
  const codeToReview = body.codeToReview;
  const language = body.language;
  const apiKey = process.env.OPEN_AI_API_KEY;

  if (!codeToReview) {
    return new Response(JSON.stringify({error: {message: "Missing required parameter: codeToReview"}}), {status: 400})
  }

  if (!apiKey) {
    return new Response(JSON.stringify({error: {message: "Missing required parameter: apiKey"}}), {status: 400})
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
    return new Response(JSON.stringify({result: completion.data.choices[0].text}), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return new Response(JSON.stringify(error.response.data), {status: 501})
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      return new Response("An error occurred during your request.", {status: 500})
    }
  }
}

function generatePrompt(codeToReview: string, language: string) {
  return `You're an expert level software engineer and have a single ${language} file to review. You are reviewing code for peers. You're a stickler for clean code, meaning no comments in the code, code should be self documenting, using correct naming for variables and functions, creating the right abstractions and many more ideas that you pull from Kent Beck, Martin Fowler, Bob Martin and other engineering thought leaders. You do not need to refactor and provide any code unless it makes sense for the small suggestion that you reviewed, note to not do the whole file. Please reply back with only suggestions in markdown format with each suggestion in a list to keep things easy to navigate. Please review the following code now:
${codeToReview}`;
}
