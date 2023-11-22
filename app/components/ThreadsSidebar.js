"use client"
import { useState } from "react"
import { selectAssistant } from "../features/assistants/assistantSlice"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import { CreateThread } from "../services/apiendpoints"

export default function ThreadsSidebar(props) {
  const [activeItem, setActiveItem] = useState(null)

  function CreateNewThread() {
    const data = CreateThread()
    console.log("THreadSideBar", data)
  }

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
        className={`overflow-y-scroll scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-rounded-full hover:scrollbar-thumb-neutral-600`}></div>
    </div>
  )
}
