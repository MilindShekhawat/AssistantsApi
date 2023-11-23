import { NextResponse } from "next/server"
import OpenAI from "openai"

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

// Create a new thread
export async function POST() {
  const emptyThread = await openai.beta.threads.create()

  console.log("CREATE THREAD", emptyThread)
  return NextResponse.json({ emptyThread })
}
