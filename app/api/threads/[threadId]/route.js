import { NextResponse } from "next/server"
import OpenAI from "openai"

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

// Retrieve a thread
export async function GET(request, params) {
  const threadId = params.params.threadId
  const myThread = await openai.beta.threads.retrieve(threadId)

  //console.log("GET THREAD", myThread)
  return NextResponse.json({ myThread })
}

// Delete a thread
export async function DELETE(request, params) {
  const threadId = params.params.threadId
  const myThread = await openai.beta.threads.del(threadId)

  console.log("DELETE THREAD", myThread)
  return NextResponse.json({ myThread })
}
