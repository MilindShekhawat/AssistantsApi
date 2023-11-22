import { NextResponse } from "next/server"
import OpenAI from "openai"

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

export async function GET(request, params) {
  const myAssistant = await openai.beta.assistants.retrieve(params.params.assistantId)
  return NextResponse.json({ myAssistant })
}
