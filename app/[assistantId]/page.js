//TODO Remove this page for the threads page
// import MessageWindow from "../components/MessageWindow"
// import Sidebar from "../components/Sidebar"
// import ThreadsSidebar from "../components/ThreadsSidebar"
// import { GetAssistant, GetAssistants, GetThreads } from "../services/apiendpoints"

// //Assistant Page where we can chat with that specific assistant
// export default async function AssistantPage({ params }) {
//   //Calling apis here and will prop drill them to components
//   const myAssistant = await GetAssistant(params.assistantId)
//   const myAssistants = await GetAssistants()
//   const threads = await GetThreads()

//   return (
//     <main className='relative flex'>
//       <hr className='absolute w-full border-neutral-800 top-14' />
//       <Sidebar assistants={myAssistants.data} isCollapsed={true} />
//       <ThreadsSidebar assistant={myAssistant} threads={threads} />
//       <MessageWindow param={params.assistantId} />
//       <hr className='absolute w-full border-neutral-800 bottom-[65.6px]' />
//     </main>
//   )
// }
