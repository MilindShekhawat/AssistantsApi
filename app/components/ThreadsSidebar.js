"use client"
import Link from "next/link"
import { CreateThread } from "../services/apiendpoints"

//ThreadSidebar, shows all the threads present in an assistant
export default function ThreadsSidebar(props) {
  const createThread = async () => {
    const newthread = await CreateThread(props.assistant.id, props.userId)
    console.log("New Thread", newthread.id)
  }

  return (
    <div className='relative flex flex-col w-64 h-screen bg-black border-r border-neutral-800'>
      <div className='flex justify-between flex-shrink-0 gap-2 p-3 pl-5 font-bold border-b h-14 text-neutral-200 border-neutral-800'>
        <span className='text-xl truncate'>{props.assistant.name}</span>
        <button onClick={() => createThread()} className=''>
          Create
        </button>
      </div>
      <div className='h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-thumb-rounded-full hover:scrollbar-thumb-neutral-600'>
        {props.threads.map((thread) => (
          <Link
            href={`/${props.assistant.id}/${thread.threadId}`}
            key={thread.threadId}
            className='flex p-2 px-5 m-2 mt-2 bg-neutral-900 rounded-3xl'>
            <span className='font-bold truncate text-neutral-200'>{thread.threadId}</span>
          </Link>
        ))}
      </div>
      {/* VERTICAL LINES */}
      <div className='flex-shrink-0 h-[66.6px] border-t-[1px] border-neutral-800'></div>
      <div className='absolute right-2 top-14 bottom-[66.6px] h-auto border-l-[1px] border-neutral-800'></div>
    </div>
  )
}
