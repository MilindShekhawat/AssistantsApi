"use client"
import { useState } from "react"
import { selectAssistant } from "../features/assistants/assistantSlice"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"

export default function Sidebar(props) {
  const dispatch = useDispatch()
  const [activeBot, setActiveBot] = useState(null)

  function displayAssistant(assistant) {
    setActiveBot(assistant)
    dispatch(selectAssistant(assistant))
  }

  return (
    <div>
      <div
        className='bg-black w-64 h-screen overflow-y-scroll
      scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-rounded-full hover:scrollbar-thumb-neutral-600'>
        <div className='font-bold text-xl text-neutral-200 pl-5 p-3 mb-2 border-b border-neutral-800'>Assistants</div>
        {props.assistants.map((assistant) => (
          <Link
            href={`/${assistant.id}`}
            key={assistant.name}
            onMouseEnter={() => displayAssistant(assistant)}
            className={`flex pl-4 ml-1 mr-2 p-2 rounded-3xl ${activeBot === assistant ? "bg-neutral-800" : ""}`}>
            <span className='font-bold text-neutral-200'>{assistant.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
