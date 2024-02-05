import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

// Get a run
export async function GET(request, params) {
  const threadId = params.params.threadId;
  const runId = params.params.runId;
  const run = await openai.beta.threads.runs.retrieve(threadId, runId);

  //console.log("GET RUN", run)
  return NextResponse.json({ run });
}
