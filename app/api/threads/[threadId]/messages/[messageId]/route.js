import { NextResponse } from "next/server"
import OpenAI from "openai"

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

// Get a message
export async function GET(request, params) {
  const threadId = params.params.threadId
  const messageId = params.params.messageId
  const message = await openai.beta.threads.messages.retrieve(threadId, messageId)

  //console.log("GET MESSAGE", message)
  return NextResponse.json({ message })
}
