import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

// Get list of all messages in a thread
export async function GET(request, params) {
  const threadId = params.params.threadId;
  const threadMessages = await openai.beta.threads.messages.list(threadId);

  //console.log("GET MESSAGES", threadMessages)
  return NextResponse.json({ threadMessages });
}

// Create a message in a thread
export async function POST(request, params) {
  const { message } = await request.json();
  const threadId = params.params.threadId;
  const threadMessages = await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: message,
  });

  console.log('POST MESSAGE', threadMessages);
  return NextResponse.json({ threadMessages });
}
