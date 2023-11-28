import PageThreads from "../components/PageThreads"
import { GetAssistant, GetAssistants, GetThreads } from "../services/apiendpoints"

export default async function page({ params }) {
  const myAssistant = await GetAssistant(params.assistantId)
  const myAssistants = await GetAssistants()
  const threads = await GetThreads()
  console.log("Threads", threads)
  return (
    <main>
      <PageThreads assistant={myAssistant} assistants={myAssistants.data} threads={threads} />
    </main>
  )
}
