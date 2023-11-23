"use client"
import Sidebar from "./Sidebar"
import { Provider } from "react-redux"
import { store } from "../store"
import ThreadsSidebar from "./ThreadsSidebar"
import MessageWindow from "./MessageWindow"

export default function PageThreads(props) {
  return (
    <Provider store={store}>
      <div className='flex relative'>
        <hr className='border-neutral-800 w-full absolute top-[55px]' />
        <Sidebar
          assistants={props.assistants}
          isCollapsed={true}
        />
        <ThreadsSidebar assistant={props.assistant} />
        <MessageWindow />
        <hr className='border-neutral-800 w-full absolute bottom-[65.55px]' />
      </div>
    </Provider>
  )
}
