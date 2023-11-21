"use client"
import Sidebar from "./Sidebar"
import { Provider } from "react-redux"
import { store } from "../store"

export default function PageThreads(prop) {
  return (
    <Provider store={store}>
      <div className='flex'>
        <Sidebar assistants={prop.data} />
      </div>
    </Provider>
  )
}
