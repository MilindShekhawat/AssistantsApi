import { useSelector } from "react-redux"
import Link from "next/link"
import { useState } from "react"
import { CreateMessage, CreateRun, GetMessages } from "../services/apiendpoints"

export default function MessageWindow() {
  const [inputValue, setInputValue] = useState("")
  const [validationMessage, setValidationMessage] = useState("")
  const [messageArray, setMessageArray] = useState("")

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value)
  // }

  const handleSubmit = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (inputValue.trim() !== "") {
        CreateMessage("thread_y6fQawHZgGz0qyQRgL35PGes", inputValue)
        setValidationMessage(inputValue)
      } else {
        setValidationMessage("Please enter a value.")
      }
      setInputValue("")
    }
  }
  const submitxyz = async () => {
    const messageList = await GetMessages("thread_y6fQawHZgGz0qyQRgL35PGes")
    console.log("Message List", messageList.data)
    //const x = CreateRun("thread_y6fQawHZgGz0qyQRgL35PGes", "asst_I3zkF7wo9pHrn2YYeMNIMeTL")
    setMessageArray(messageList)
  }
  console.log(messageArray)
  return (
    <div className='flex relative flex-col w-2/4 min-w-[500px] h-screen mx-auto justify-between items-center border-x-[1px] border-neutral-800'>
      <div className='flex flex-col-reverse w-full h-full overflow-y-scroll mt-14 scrollbar scrollbar-thumb-neutral-800 hover:scrollbar-thumb-neutral-300'>
        {messageArray
          ? messageArray.data.map((message) => (
              <div key={message.id} className='flex px-5 pb-4 ml-4'>
                <div className='flex-shrink-0 w-6 h-6 mt-0.5 mr-2 bg-black rounded-full'></div>
                <div className='flex flex-col'>
                  <span className='font-bold '>{message.role}</span>
                  <span className=''>{message.content[0].text.value}</span>
                </div>
              </div>
            ))
          : ""}
      </div>
      <div className='w-full p-3 px-4 transition duration-300 ease-in focus-within:bg-neutral-300 border-t-[1px] border-black'>
        <div className='relative flex w-full p-2 px-5 border-[1px] border-neutral-800 overflow-hidden bg-white focus-within:border-neutral-800'>
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
            className='absolute w-6 h-6 text-white bg-black rounded-full right-2 bottom-2'
            onClick={() => submitxyz()}>
            ⯅
          </button>
        </div>
      </div>
      {/* VERTICAL LINES */}
      <div className='absolute right-4 top-14 bottom-0 h-auto border-l-[1px] border-neutral-800'></div>
      <div className='absolute left-4 top-14 bottom-0 h-auto border-l-[1px] border-neutral-800'></div>
      <hr className='absolute w-full border-neutral-800 bottom-3' />
      <hr className='absolute w-full border-neutral-800 bottom-[52.75px]' />
      {/* VERTICAL LINES */}
    </div>
  )
}
