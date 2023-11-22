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

export const CreateThread = async (threadId) => {
  const response = await fetch(`http://localhost:3000/api/threads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to create thread")
    throw new Error("Failed to create thread")
  }
  console.log("Thread created successfully")
  const data = await response.json()
  return data
}

export const RetrieveThread = async (threadId) => {
  const response = await fetch(`http://localhost:3000/api/threads/thread_y6fQawHZgGz0qyQRgL35PGes`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to retrieve thread")
    throw new Error("Failed to retrieve thread")
  }
  console.log("Thread retrieved successfully")
  const data = await response.json()
  return data
}

export const DeleteThread = async (threadId) => {
  const response = await fetch(`http://localhost:3000/api/threads/${threadId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to retrieve thread")
    throw new Error("Failed to retrieve thread")
  }
  console.log("Thread retrieved successfully")
  const data = await response.json()
  return data
}
