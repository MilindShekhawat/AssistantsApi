"use client"
import Assistants from "./Assistants"
import Sidebar from "./Sidebar"
import { Provider } from "react-redux"
import { store } from "../store"

export default function PageAssistants(prop) {
  return (
    <Provider store={store}>
      <div className='flex'>
        <Sidebar assistants={prop.data} />
        <Assistants />
      </div>
    </Provider>
  )
}
