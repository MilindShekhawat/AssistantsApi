"use client"
import Sidebar from "./Sidebar"
import { Provider } from "react-redux"
import { store } from "../store"
import ThreadsSidebar from "./ThreadsSidebar"

export default function PageThreads(props) {
  return (
    <Provider store={store}>
      <div className='flex'>
        <Sidebar
          assistants={props.data}
          isCollapsed={true}
        />
        <ThreadsSidebar assistant={props.assistant} />
      </div>
    </Provider>
  )
}
