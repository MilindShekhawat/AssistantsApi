import PageAssistants from "./components/PageAssistants"
import { GetAssistants } from "./services/apiendpoints"

export default async function Home() {
  const myAssistants = await GetAssistants()
  return (
    <main>
      <PageAssistants assistants={myAssistants.data} />
    </main>
  )
}
