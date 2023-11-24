"use client"
import Sidebar from "./Sidebar"
import { Provider } from "react-redux"
import { store } from "../store"
import ThreadsSidebar from "./ThreadsSidebar"
import MessageWindow from "./MessageWindow"

export default function PageThreads(props) {
  return (
    <Provider store={store}>
      <div className='relative flex'>
        <hr className='absolute w-full border-neutral-800 top-14' />
        <Sidebar
          assistants={props.assistants}
          isCollapsed={true}
        />
        <ThreadsSidebar assistant={props.assistant} />
        <MessageWindow />
        <hr className='absolute w-full border-neutral-800 bottom-[65.6px]' />
      </div>
    </Provider>
  )
}
