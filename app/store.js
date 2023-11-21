import { configureStore } from "@reduxjs/toolkit"
import { selectAssistant } from "./features/assistants/assistantSlice"

export const store = configureStore({
  reducer: selectAssistant,
})
