export const GetAssistants = async () => {
  const response = await fetch("http://localhost:3000/api/assistants", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to get assistants")
    throw new Error("Failed to get assistants")
  }
  console.log("Assistants retrieved successfully")
  const data = await response.json()
  return data.myAssistants
}

export const GetAssistant = async (assistantId) => {
  const response = await fetch(`http://localhost:3000/api/assistant/${assistantId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to get assistant")
    throw new Error("Failed to get assistant")
  }
  console.log("Assistant retrieved successfully")
  const data = await response.json()
  return data.myAssistant
}
