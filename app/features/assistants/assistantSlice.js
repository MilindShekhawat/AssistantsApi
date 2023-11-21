import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  assistants: [],
  currentAssistant: [],
}

export const assistantSlice = createSlice({
  name: "assistant",
  initialState,
  reducers: {
    listAssistants: (state, action) => {
      state.assistants = action.payload
    },
    selectAssistant: (state, action) => {
      const assistant = {
        id: action.payload.id,
        name: action.payload.name,
        model: action.payload.model,
        description: action.payload.description,
        instructions: action.payload.instructions,
      }
      state.currentAssistant = assistant
    },
  },
})

export const { selectAssistant, listAssistants } = assistantSlice.actions

export default assistantSlice.reducer
