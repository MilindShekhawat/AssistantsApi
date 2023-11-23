import { NextResponse } from "next/server"
import OpenAI from "openai"

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

// Create a message
export async function GET(request, params) {
  const threadId = params.params.threadId
  const messageId = params.params.messageId

  const message = await openai.beta.threads.messages.retrieve(threadId, messageId)
  return NextResponse.json({ message })
}
