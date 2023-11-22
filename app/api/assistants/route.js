import { NextResponse } from "next/server"
import OpenAI from "openai"

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

export async function GET() {
  const myAssistants = await openai.beta.assistants.list()
  return NextResponse.json({ myAssistants })
}
