import { NextResponse } from "next/server"
import OpenAI from "openai"

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

//Get a list of messages
export async function GET(request, params) {
  const threadId = params.params.threadId
  const threadMessages = await openai.beta.threads.messages.list(threadId)
  return NextResponse.json({ threadMessages })
}

// Create a message
export async function POST(request, params) {
  const { message } = await request.json()
  const threadId = params.params.threadId
  const threadMessages = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: message,
  })
  return NextResponse.json({ threadMessages })
}
