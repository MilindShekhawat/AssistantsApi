import { NextResponse } from "next/server"
import OpenAI from "openai"

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

// Get a list of runs
export async function GET(request, params) {
  const threadId = params.params.threadId
  const runs = await openai.beta.threads.runs.list(threadId)

  //console.log("GET RUNS", runs)
  return NextResponse.json({ runs })
}

// Create a run
export async function POST(request, params) {
  const assistant = await request.json()
  console.log(assistant)
  const threadId = params.params.threadId
  const run = await openai.beta.threads.runs.create(threadId, assistant)

  console.log("POST RUN", run)
  return NextResponse.json({ run })
}
