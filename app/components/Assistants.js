import { useSelector } from "react-redux"

export default function Assistants() {
  const assistant = useSelector((state) => state.currentAssistant)
  return (
    <div className='flex flex-col p-2 w-2/4 min-w-[400px] mx-auto justify-center items-center'>
      <h1 className='text-3xl font-bold mb-5'>Select your Assistant</h1>
      {assistant.id ? (
        <div className='flex flex-col py-2 px-5 w-fit min-w-[300px] border-[1px] border-neutral-300 rounded-lg'>
          <span className='font-bold text-lg'>{assistant.name}</span>
          <span className='font-medium text-xs text-neutral-400'>{assistant.model}</span>
          <span className='font-medium text-sm text-neutral-600 pt-2'>{assistant.instructions}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
