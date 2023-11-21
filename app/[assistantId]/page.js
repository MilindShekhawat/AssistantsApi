import PageThreads from "../components/PageThreads"
import { GetAssistant, GetAssistants } from "../config/assistantsconfig"

export default async function page({ params }) {
  const { data } = await GetAssistants()
  const assistant = await GetAssistant(params.assistantId)
  return (
    <main>
      <PageThreads
        data={data}
        assistant={assistant}
      />
    </main>
  )
}
