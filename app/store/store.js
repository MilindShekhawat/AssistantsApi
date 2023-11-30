import { configureStore } from "@reduxjs/toolkit"
import listAssistants from "../features/assistants/assistantSlice"
import selectAssistant from "../features/assistants/assistantSlice"

export const store = configureStore({
  reducer: listAssistants,
  selectAssistant,
})
