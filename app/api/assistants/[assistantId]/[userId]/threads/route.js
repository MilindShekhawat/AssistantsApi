import { NextResponse } from 'next/server';
import { prisma } from '@/app/prismaConfig';
import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

// Retrieve a list of threads
export async function GET(request, params) {
  //Filter threads that are present in the provided assistant
  const threads = await prisma.threads.findMany({
    where: {
      assistantId: {
        contains: params.params.assistantId,
      },
      userId: {
        contains: params.params.userId,
      },
    },
  });
  console.log('GET THREADS', threads);
  return NextResponse.json({ threads });
}

// Create a new thread
export async function POST(request, params) {
  const emptyThread = await openai.beta.threads.create();
  const threadData = {
    threadId: emptyThread.id,
    assistantId: params.params.assistantId,
    userId: params.params.userId,
  };
  const threads = await prisma.threads.create({
    data: threadData,
  });

  console.log('CREATE THREAD', emptyThread);
  return NextResponse.json({ emptyThread });
}
