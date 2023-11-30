"use client"
import { useState } from "react"
import { CreateMessage, CreateRun, GetMessages } from "../services/apiendpoints"

//Message Window, messages and runs are executed here
export default function MessageWindow(props) {
  //States to enter message and display messageArray back
  const [message, setMessage] = useState("")
  const [messageArray, setMessageArray] = useState("")

  //Submit function to create a new message and execute a run. Runs when enter is pressed
  //TODO Find a way to dynamically pass a thread
  const handleSubmit = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (message.trim() !== "") {
        CreateMessage(props.threadId, message)
        CreateRun(props.threadId, props.assistantId)
      }
      setMessage("")
    }
  }

  //TODO Test button to return message list. The functionality would be implemented by checking for the run status and displaying the
  //TODO message when a run is complete.
  const submitxyz = async () => {
    const messageList = await GetMessages(props.threadId)
    console.log("Message List", messageList.data)
    setMessageArray(messageList)
  }

  return (
    <div className='flex relative flex-col w-2/4 min-w-[500px] h-screen mx-auto justify-between items-center border-x-[1px] border-neutral-800'>
      <div className='flex flex-col-reverse w-full h-full overflow-y-scroll mt-14 scrollbar scrollbar-thumb-neutral-800 hover:scrollbar-thumb-neutral-300'>
        {messageArray
          ? messageArray.data.map((message) => (
              <div className='flex px-5 pb-4 ml-4' key={message.id}>
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
            className='w-full h-auto focus:outline-none'
            type='textarea'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => handleSubmit(e)}
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
      {/* LINES FOR DESIGN */}
      <div className='absolute right-4 top-14 bottom-0 h-auto border-l-[1px] border-neutral-800'></div>
      <div className='absolute left-4 top-14 bottom-0 h-auto border-l-[1px] border-neutral-800'></div>
      <hr className='absolute w-full border-neutral-800 bottom-3' />
      <hr className='absolute w-full border-neutral-800 bottom-[52.75px]' />
    </div>
  )
}
