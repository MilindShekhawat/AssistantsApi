"use client"

//ThreadSidebar, shows all the threads present in an assistant
export default function ThreadsSidebar(props) {
  return (
    <div className='relative flex flex-col w-64 h-screen bg-black border-r border-neutral-800'>
      <div className='flex justify-between flex-shrink-0 gap-2 p-3 pl-5 text-xl font-bold border-b h-14 text-neutral-200 border-neutral-800'>
        <span>{props.assistant.name}</span>
      </div>
      <div className='h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-thumb-rounded-full hover:scrollbar-thumb-neutral-600'>
        {props.threads.map((thread) => (
          <div key={thread.threadId} className='flex p-2 px-5 m-2 mt-2 overflow-hidden bg-neutral-900 rounded-3xl'>
            <span className='font-bold text-neutral-200'>{thread.threadId}</span>
          </div>
        ))}
      </div>
      {/* VERTICAL LINES */}
      <div className='flex-shrink-0 h-[66.6px] border-t-[1px] border-neutral-800'></div>
      <div className='absolute right-2 top-14 bottom-[66.6px] h-auto border-l-[1px] border-neutral-800'></div>
    </div>
  )
}
