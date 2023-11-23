"use client"
import { useState } from "react"
import { selectAssistant } from "../features/assistants/assistantSlice"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import { CreateThread, RetrieveThread } from "../services/apiendpoints"
import { useEffect } from "react"

export default function ThreadsSidebar(props) {
  const [activeItem, setActiveItem] = useState(null)
  // const [thread, SetThread] = useState("")

  function CreateNewThread() {
    const data = CreateThread()
    console.log("ThreadSideBar", data)
  }

  // const thread = RetrieveThread()
  // SetThread(thread)
  // console.log(thread)

  return (
    <div className='flex flex-col w-64 h-screen bg-black border-r border-neutral-800'>
      <div className='flex justify-between gap-2 p-3 pl-5 mb-2 text-xl font-bold border-b h-14 text-neutral-200 border-neutral-800'>
        <span>{props.assistant.name}</span>
        <button
          className='self-center'
          onClick={() => CreateNewThread()}>
          Create
        </button>
      </div>
      <div className='overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-thumb-rounded-full hover:scrollbar-thumb-neutral-600'>
        {/*  To map */}
        <div className='flex p-2 pl-5 mb-2 ml-1 mr-2 overflow-hidden bg-neutral-900 h-11 rounded-3xl'>
          <span className='font-bold text-neutral-200'>thread.id</span>
        </div>
      </div>
    </div>
  )
}
