import PageThreads from "../components/PageThreads"
import { GetAssistant, GetAssistants } from "../services/apiendpoints"

export default async function page({ params }) {
  const myAssistant = await GetAssistant(params.assistantId)
  const myAssistants = await GetAssistants()
  return (
    <main>
      <PageThreads
        assistant={myAssistant}
        assistants={myAssistants.data}
      />
    </main>
  )
}
