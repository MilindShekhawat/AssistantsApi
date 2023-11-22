import { openai } from "./openaiconfig"

export const GetAssistants = async () => {
  const myAssistants = await openai.beta.assistants.list()
  return myAssistants
}

export const GetAssistant = async (assistant) => {
  const myAssistant = await openai.beta.assistants.retrieve(assistant)
  return myAssistant
}

export const CreateThread = async () => {
  const emptyThread = await openai.beta.threads.create()
  console.log(emptyThread)
}
