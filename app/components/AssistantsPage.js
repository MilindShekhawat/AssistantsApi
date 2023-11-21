"use client"
import Assistants from "./Assistants"
import Sidebar from "./Sidebar"
import { Provider } from "react-redux"
import { store } from "../store"

export default function AssistantsPage(prop) {
  return (
    <Provider
      store={store}
      className='flex'>
      <Sidebar assistants={prop.data} />
      <Assistants assistants={prop.data} />
    </Provider>
  )
}
