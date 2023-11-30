import ThreadsSidebar from "@/app/components/ThreadsSidebar"
import MessageWindow from "@/app/components/MessageWindow"
import Sidebar from "@/app/components/Sidebar"
import { GetAssistant, GetAssistants, GetThreads } from "@/app/services/apiendpoints"

//* thread_y6fQawHZgGz0qyQRgL35PGes
//Assistant Page where we can chat with that specific assistant
export default async function ThreadsPage({ params }) {
  //Calling apis here and will prop drill them to components
  const myAssistant = await GetAssistant(params.assistantId)
  const myAssistants = await GetAssistants()
  const threads = await GetThreads()

  return (
    <main className='relative flex'>
      <hr className='absolute w-full border-neutral-800 top-14' />
      <Sidebar assistants={myAssistants.data} isCollapsed={true} />
      <ThreadsSidebar assistant={myAssistant} threads={threads} />
      <MessageWindow assistantId={params.assistantId} threadId={params.threadId} />
      <hr className='absolute w-full border-neutral-800 bottom-[65.6px]' />
    </main>
  )
}
