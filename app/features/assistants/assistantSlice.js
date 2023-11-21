import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentAssistant: [],
}

export const assistantSlice = createSlice({
  name: "assistant",
  initialState,
  reducers: {
    selectAssistant: (state, action) => {
      const assistant = { id: action.payload.id, name: action.payload.name, model: action.payload.model }
      console.log("Slice Assistant", assistant)
      state.currentAssistant = assistant
    },
  },
})

export const { selectAssistant } = assistantSlice.actions

export default assistantSlice.reducer
