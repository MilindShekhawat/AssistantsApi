import { NextResponse } from "next/server"
import OpenAI from "openai"

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

// Get a single assistant
export async function GET(request, params) {
  const myAssistant = await openai.beta.assistants.retrieve(params.params.assistantId)

  //console.log("GET ASSISTANT", myAssistant)
  return NextResponse.json({ myAssistant })
}
