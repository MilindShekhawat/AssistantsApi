import { NextResponse } from "next/server"
import { prisma } from "@/app/prismaConfig"
import OpenAI from "openai"

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

// Retrieve a list of threads
export async function GET(request, params) {
  //Filter threads that are present in the provided assistant
  const threads = await prisma.threads.findMany({
    where: {
      assistantId: {
        contains: params.params.assistantId,
      },
    },
  })
  //console.log("GET THREADS", threads)
  return NextResponse.json({ threads })
}

// Create a new thread
export async function POST() {
  const emptyThread = await openai.beta.threads.create()
  const threadId = { threadId: emptyThread.id }
  const threads = await prisma.threads.create({
    data: threadId,
  })

  console.log("CREATE THREAD", emptyThread)
  return NextResponse.json({ emptyThread })
}
