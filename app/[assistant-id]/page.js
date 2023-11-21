import PageThreads from "../components/PageThreads"
import { GetAssistants } from "../config/getAssistants"

export default async function page() {
  const { data } = await GetAssistants()

  return (
    <main>
      <PageThreads data={data} />
    </main>
  )
}
