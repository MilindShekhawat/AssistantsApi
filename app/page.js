import PageAssistants from "./components/PageAssistants"
import { GetAssistants } from "./config/getAssistants"

export default async function Home() {
  const { data } = await GetAssistants()

  return (
    <main>
      <PageAssistants data={data} />
    </main>
  )
}
