"use client"
import { useState } from "react"
import Link from "next/link"
import { useUser, UserButton } from "@clerk/nextjs"

//Sidebar, contains all of the available assistants
export default function Sidebar(props) {
  //Sidebar states for assistant selection and if the sidebar is collapsed or not
  const [activeItem, setActiveItem] = useState(null)
  const collapsedSidebar = props.isCollapsed
  const { user, isLoaded } = useUser()

  return (
    <div className='relative flex flex-col h-screen bg-black border-r border-neutral-800'>
      <div className='flex-shrink-0 p-3 pl-5 text-xl font-bold border-b-[1px] h-14 text-neutral-200 border-neutral-800'>
        {collapsedSidebar ? "" : "Assistants"}
      </div>
      <div
        className={`overflow-y-scroll h-full scrollbar-thin scrollbar-thumb-neutral-800 hover:scrollbar-thumb-neutral-600
        ${collapsedSidebar == true ? "w-16" : "w-64"}`}>
        {props.assistants.map((assistant) => (
          <div key={assistant.name}>
            <Link
              className={`flex h-11 mt-2 rounded-3xl overflow-hidden m-1.5
              ${collapsedSidebar == true ? "bg-neutral-800" : "pl-5 p-2.5"} 
              ${activeItem === assistant ? "bg-neutral-800" : ""}`}
              //TODO add logic to switch to first threadid present in assistant
              //TODO create a new thread in no threads are present
              href={`/${assistant.id}`}
              key={assistant.name}
              onMouseEnter={() => setActiveItem(assistant)}>
              <span
                className={`text-neutral-200
                ${collapsedSidebar == true ? "text-xs text-center w-full" : "font-bold"}`}>
                {assistant.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className='flex-shrink-0 h-[66.6px] border-t-[1px] border-neutral-800 flex p-4 items-center'>
        {isLoaded && user && <UserButton afterSignOutUrl='/' />}
      </div>
      {/* LINES FOR DESIGN */}
      <div className='absolute right-2 top-14 bottom-[66.6px] h-auto border-l-[1px] border-neutral-800'></div>
    </div>
  )
}
