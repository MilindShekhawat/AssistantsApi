import AssistantsPage from "./components/AssistantsPage"
import { GetAssistants } from "./config/getAssistants"

export default async function Home() {
  const { data } = await GetAssistants()
  return (
    <main>
      <AssistantsPage data={data} />
    </main>
  )
}
