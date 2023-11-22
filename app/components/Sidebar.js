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
    <div className='flex flex-col bg-black h-screen border-r border-neutral-800'>
      {collapsedSidebar ? (
        <div className='h-14 min-h-14 border-b border-neutral-800'> </div>
      ) : (
        <div className='font-bold h-14 text-xl text-neutral-200 pl-5 p-3 border-b border-neutral-800'>Assistants</div>
      )}
      <div
        className={`overflow-y-scroll mt-2 ${collapsedSidebar == true ? "w-16" : "w-64"} 
        scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-thumb-rounded-full hover:scrollbar-thumb-neutral-600`}>
        {props.assistants.map((assistant) => (
          <div key={assistant.name}>
            <Link
              href={`/${assistant.id}`}
              key={assistant.name}
              onMouseEnter={() => displayAssistant(assistant)}
              className={`
            ${collapsedSidebar == true ? "text-center mb-2 bg-neutral-800" : "pl-5 p-2"}
            ${activeItem === assistant ? "bg-neutral-800" : ""}
            flex ml-1 mr-2 h-11 rounded-3xl overflow-hidden`}>
              <span className={`${collapsedSidebar == true ? "text-xs" : "font-bold"} text-neutral-200`}>{assistant.name}</span>
            </Link>
          </div>
        ))}
      </div>
      {/* <button onClick={() => setCollapsedSidebar(!collapsedSidebar)}>Click</button> */}
    </div>
  )
}
