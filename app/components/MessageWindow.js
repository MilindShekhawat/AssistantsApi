import { useSelector } from "react-redux"
import Link from "next/link"
import { useState } from "react"
import { CreateMessage, CreateRun } from "../services/apiendpoints"

export default function MessageWindow() {
  const [inputValue, setInputValue] = useState("")
  const [validationMessage, setValidationMessage] = useState("")

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value)
  // }
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (inputValue.trim() !== "") {
        setValidationMessage(inputValue)
      } else {
        setValidationMessage("Please enter a value.")
      }
      setInputValue("")
    }
  }
  const submitxyz = () => {
    const x = CreateRun("thread_y6fQawHZgGz0qyQRgL35PGes", "asst_I3zkF7wo9pHrn2YYeMNIMeTL")
  }
  return (
    <div className='flex flex-col w-2/4 min-w-[500px] h-screen mx-auto justify-between items-center border-x-[1px] border-neutral-800'>
      <div
        className='flex flex-col mt-14 gap-4 w-full h-full
        overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-thumb-rounded-full hover:scrollbar-thumb-neutral-400'>
        <div className='flex flex-col px-5 p-2'>
          <span className='font-bold'>Milind</span>
          <span className=''>{validationMessage}</span>
        </div>
      </div>
      <div className='w-full p-3 bg-neutral-200'>
        <div
          className='flex w-full border-[1px] border-neutral-200  rounded-full overflow-hidden px-5 p-2 bg-white
        focus-within:border-[1px] focus-within:border-neutral-800 relative'>
          <input
            type='textarea'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => handleSubmit(e)}
            className='w-full h-auto focus:outline-none'
            placeholder='Enter something...'
          />
          <div className='w-6'></div>
          <button
            className='absolute right-2 bottom-2 bg-black text-white rounded-full w-6 h-6'
            onClick={() => submitxyz()}>
            ⯅
          </button>
        </div>
      </div>
    </div>
  )
}
