import ThreadsSidebar from "@/app/components/ThreadsSidebar"
import MessageWindow from "@/app/components/MessageWindow"
import Sidebar from "@/app/components/Sidebar"
import { GetAssistant, GetAssistants, GetThreads, GetMessages } from "@/app/services/apiendpoints"
import { auth } from "@clerk/nextjs"

//Assistant Page where we can chat with that specific assistant
export default async function ThreadsPage({ params }) {
  //Calling apis here and will prop drill them to components
  const { userId } = auth()
  console.log("UserId", userId)
  const myAssistants = await GetAssistants()
  const myAssistant = await GetAssistant(params.assistantId)
  const threads = await GetThreads(params.assistantId, userId)
  const messageList = await GetMessages(params.threadId)
  return (
    <main className='relative flex'>
      <Sidebar assistants={myAssistants.data} isCollapsed={true} />
      <ThreadsSidebar assistant={myAssistant} threads={threads} />
      <MessageWindow assistantId={params.assistantId} threadId={params.threadId} messageList={messageList} />
      {/* LINES FOR DESIGN */}
      <hr className='absolute w-full border-neutral-800 top-14' />
      <hr className='absolute w-full border-neutral-800 bottom-[65.6px]' />
    </main>
  )
}
