import { openai } from "./openaiconfig"

export const GetAssistants = async () => {
  const myAssistants = await openai.beta.assistants.list()
  return myAssistants
}
