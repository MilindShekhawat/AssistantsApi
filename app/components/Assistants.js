import React from "react"

export default function Assistants(props) {
  return (
    <div className='flex flex-col p-2 w-full justify-center'>
      <h1 className='text-center text-3xl font-bold m-5'>Select your Assistant</h1>
      <div className='flex flex-wrap gap-2 w-3/5 min-w-[500px] h-auto mx-auto'>
        {props.assistants.map((assistant) => (
          <div
            key={assistant.name}
            className='flex flex-col flex-grow h-28 w-64 p-2 border-[1px] border-neutral-300 rounded-lg'>
            <span className='font-bold'>{assistant.name}</span>
            <span className='font-medium text-xs text-neutral-400'>{assistant.model}</span>
            <span className='font-medium text-sm text-neutral-600 pt-1'>{assistant.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
