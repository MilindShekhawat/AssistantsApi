"use client"
import { useState } from "react"
import { listAssistants, selectAssistant } from "../features/assistants/assistantSlice"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"

export default function Sidebar(props) {
  const dispatch = useDispatch()
  const [activeItem, setActiveItem] = useState(null)
  const collapsedSidebar = props.isCollapsed

  function displayAssistant(assistant) {
    setActiveItem(assistant)
    dispatch(selectAssistant(assistant))
  }

  return (
    <div className='relative flex flex-col h-screen bg-black border-r border-neutral-800'>
      {collapsedSidebar ? (
        <div className='flex-shrink-0 border-b-[1px] h-14 border-neutral-800'></div>
      ) : (
        <div className='flex-shrink-0 p-3 pl-5 text-xl font-bold border-b h-14 text-neutral-200 border-neutral-800'>
          Assistants
        </div>
      )}
      <div
        className={`overflow-y-scroll h-full scrollbar-thin scrollbar-thumb-neutral-800 hover:scrollbar-thumb-neutral-600
        ${collapsedSidebar == true ? "w-16" : "w-64"}`}>
        {props.assistants.map((assistant) => (
          <div key={assistant.name}>
            <Link
              href={`/${assistant.id}`}
              key={assistant.name}
              onMouseEnter={() => displayAssistant(assistant)}
              className={`flex h-11 mt-2 rounded-3xl overflow-hidden m-1.5
              ${collapsedSidebar == true ? "text-center bg-neutral-800" : "pl-5 p-2"} 
              ${activeItem === assistant ? "bg-neutral-800" : ""}`}>
              <span className={`${collapsedSidebar == true ? "text-xs" : "font-bold"} text-neutral-200`}>
                {assistant.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
      {/* VERTICAL LINES */}
      <div className='flex-shrink-0 h-[66.6px] border-t-[1px] border-neutral-800'></div>
      <div className='absolute right-2 top-14 bottom-[66.6px] h-auto border-l-[1px] border-neutral-800'></div>
      {/* <button onClick={() => setCollapsedSidebar(!collapsedSidebar)}>Click</button> */}
    </div>
  )
}
