"use client"
import Assistant from "./Assistant"
import Sidebar from "./Sidebar"
import { Provider } from "react-redux"
import { store } from "../store"

export default function PageAssistants(props) {
  return (
    <Provider store={store}>
      <div className='flex'>
        <Sidebar
          assistants={props.data}
          isCollapsed={false}
        />
        <Assistant />
      </div>
    </Provider>
  )
}
