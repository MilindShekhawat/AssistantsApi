import { useSelector } from "react-redux"
import Link from "next/link"

//This component shows up on the homepage containing selected assistant's details
export default function Assistant({ assistants }) {
  //TODO Will implement reactive state change
  return (
    <div className='flex flex-col p-2 w-2/4 min-w-[400px] mx-auto justify-center items-center'>
      <h1 className='mb-5 text-3xl font-bold'>Select your Assistant</h1>
      {/* {assistants.map((assistant) =>
        assistant.id ? (
          <Link className='flex flex-col py-2 px-5 w-fit min-w-[300px] border-[1px] border-neutral-300 rounded-lg'
            href={`/${assistant.id}`}
            key={assistant.id}
            >
            <span className='text-lg font-bold'>{assistant.name}</span>
            <span className='text-xs font-medium text-neutral-400'>{assistant.model}</span>
            <span className='pt-2 text-sm font-medium text-neutral-600'>{assistant.instructions}</span>
          </Link>
        ) : (
          ""
        )
      )} */}
    </div>
  )
}
