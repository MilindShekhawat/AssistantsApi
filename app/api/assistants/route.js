import { NextResponse } from "next/server"
import OpenAI from "openai"

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

// Get a list of assistants
export async function GET() {
  const myAssistants = await openai.beta.assistants.list()

  //console.log("GET ASSISTANTS", myAssistants)
  return NextResponse.json({ myAssistants })
}
