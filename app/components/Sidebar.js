"use client"
import { selectAssistant } from "../features/assistants/assistantSlice"
import { useDispatch } from "react-redux"

export default function Sidebar(props) {
  const dispatch = useDispatch()
  function displayAssistant(assistant) {
    console.log(assistant)
    dispatch(selectAssistant(assistant))
  }
  return (
    <div>
      <div
        className='bg-black w-64 h-screen overflow-y-scroll
      scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-rounded-full hover:scrollbar-thumb-neutral-600'>
        <div className='font-bold text-xl text-neutral-200 pl-5 p-3 mb-2 border-b border-neutral-800'>Assistants</div>
        {props.assistants.map((assistant) => (
          <div
            key={assistant.name}
            onClick={() => displayAssistant(assistant)}
            className='flex pl-4 ml-1 mr-2 p-2 rounded-3xl hover:bg-neutral-900'>
            <span className='font-bold text-neutral-200'>{assistant.name}</span>
            {/* <span className='font-medium text-sm text-neutral-600 pt-1'>{assistant.description}</span> */}
          </div>
        ))}
      </div>
    </div>
  )
}
