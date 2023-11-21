import PageAssistants from "./components/PageAssistants"
import { GetAssistants } from "./config/assistantscontroller"

export default async function Home() {
  const { data } = await GetAssistants()

  return (
    <main>
      <PageAssistants data={data} />
    </main>
  )
}
