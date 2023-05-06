import {Configuration, OpenAIApi} from "openai";
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

    const configuration = new Configuration({apiKey});
    const openai = new OpenAIApi(configuration);
    console.log("after openai init")
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
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            return new Response(JSON.stringify({error: {message: error.response.data}}), {status: 500})
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            return new Response(JSON.stringify({error: {message: "An error occurred during your request."}}), {status: 500})
        }
    }
}

function generatePrompt(codeToReview: string, language: string) {
    return `You're an expert level software engineer and have a single ${language} file to refactor. You're a stickler for clean code, meaning no comments in the code, code should be self documenting, using correct naming for variables and functions, creating the right abstractions and many more ideas that you pull from Kent Beck, Martin Fowler, Bob Martin and other engineering thought leaders. Please write inline comments about your design decisions and talking about the choices you made in your refactor (only for things you changed) and reply back the code that you refactored(only put things you actually changed).  Please now refactor the following code:
${codeToReview}`;
}
