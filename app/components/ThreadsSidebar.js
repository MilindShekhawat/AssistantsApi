"use client"
import { useState } from "react"
import { selectAssistant } from "../features/assistants/assistantSlice"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"

export default function ThreadsSidebar(props) {
  const [activeItem, setActiveItem] = useState(null)
  return (
    <div className='flex flex-col w-48 bg-black h-screen border-r border-neutral-800'>
      <div className='font-bold h-14 text-xl text-neutral-200 pl-5 p-3 mb-2 border-b border-neutral-800'></div>
      <div
        className={`overflow-y-scroll 
        scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-rounded-full hover:scrollbar-thumb-neutral-600`}></div>
      {/* <button onClick={() => setCollapsedSidebar(!collapsedSidebar)}>Click</button> */}
    </div>
  )
}
