import { useSelector } from "react-redux"
import Link from "next/link"
import { useState } from "react"
import { CreateMessage } from "../services/apiendpoints"

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
        setValidationMessage(`You entered: ${inputValue}`)
      } else {
        setValidationMessage("Please enter a value.")
      }
      setInputValue("")
    }
  }
  const submitxyz = () => {
    const x = CreateMessage("thread_y6fQawHZgGz0qyQRgL35PGes", "paper")
  }
  return (
    <div className='flex flex-col flex-grow min-w-[400px] h-screen mx-auto justify-between items-center'>
      <div
        className='flex flex-col p-10 gap-4 w-full h-full
        overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-thumb-rounded-full hover:scrollbar-thumb-neutral-400'>
        <span className=''>{validationMessage}</span>
      </div>
      <div className='w-full p-4 px-5 bg-neutral-200 '>
        <div
          className='flex w-full border-2 border-neutral-400 rounded-full overflow-hidden px-5 p-3 bg-white
        focus-within:border-2 focus-within:border-neutral-800 relative'>
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
            className='absolute right-2 bottom-2 bg-black text-white rounded-full w-8 h-8'
            onClick={() => submitxyz()}>
            ⯅
          </button>
        </div>
      </div>
    </div>
  )
}
