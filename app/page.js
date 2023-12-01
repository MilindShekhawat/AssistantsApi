import Sidebar from "./components/Sidebar"
import Assistant from "./components/Assistant"
import { GetAssistants, GetThreads } from "./services/apiendpoints"

//HomePage, Lists out all assistants with their information.
export default async function Home() {
  //Calling apis here to show assistants
  const myAssistants = await GetAssistants()

  return (
    <main className='flex'>
      <Sidebar assistants={myAssistants.data} isCollapsed={false} />
      <Assistant assistants={myAssistants.data} />
    </main>
  )
}
