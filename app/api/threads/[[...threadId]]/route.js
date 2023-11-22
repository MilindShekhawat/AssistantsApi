import { NextResponse } from "next/server"
import OpenAI from "openai"

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

export async function GET(request, params) {
  const threadId = params.params.threadId
  const myThread = await openai.beta.threads.retrieve(threadId)
  console.log("RETIREVE", myThread)
  return NextResponse.json({ myThread })
}

export async function POST() {
  const emptyThread = await openai.beta.threads.create()
  console.log("CREATE", emptyThread)
  return NextResponse.json({ emptyThread })
}

export async function DELETE(request, params) {
  const threadId = params.params.threadId
  const myThread = await openai.beta.threads.del(threadId)
  console.log("DELETE", response)
  return NextResponse.json({ myThread })
}
