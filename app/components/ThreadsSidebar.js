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
    <div className='flex flex-col w-64 bg-black h-screen border-r border-neutral-800'>
      <div className='flex gap-2 justify-between font-bold h-14 text-xl text-neutral-200 pl-5 p-3 mb-2 border-b border-neutral-800'>
        <span>{props.assistant.name}</span>
        <button
          className='self-center'
          onClick={() => CreateNewThread()}>
          Create
        </button>
      </div>
      <div
        className={`overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-thumb-rounded-full hover:scrollbar-thumb-neutral-600`}>
        {/*  To map */}
        <div className='pl-5 p-2 mb-2 bg-neutral-900 flex ml-1 mr-2 h-11 rounded-3xl overflow-hidden'>
          <span className={`font-bold text-neutral-200`}>thread.id</span>
        </div>
      </div>
    </div>
  )
}
