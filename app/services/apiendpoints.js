//? This file connects with next.js's api routes.
// Get a list of assistants
export const GetAssistants = async () => {
  const response = await fetch("http://localhost:3000/api/assistants", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to get assistants")
    throw new Error("Failed to get assistants")
  }
  const data = await response.json()
  console.log("Assistants retrieved successfully")
  //console.log(data.myAssistants)
  return data.myAssistants
}

// Get a single assistant
export const GetAssistant = async (assistantId) => {
  const response = await fetch(`http://localhost:3000/api/assistant/${assistantId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to get assistant")
    throw new Error("Failed to get assistant")
  }
  const data = await response.json()
  console.log("Assistant retrieved successfully")
  //console.log(data.myAssistant)
  return data.myAssistant
}

// Create a new thread
export const CreateThread = async (threadId) => {
  const response = await fetch(`http://localhost:3000/api/threads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to create thread")
    throw new Error("Failed to create thread")
  }
  const data = await response.json()
  console.log("Thread created successfully")
  //console.log(data.emptyThread)
  return data.emptyThread
}

// Retrieve a thread
export const RetrieveThread = async (threadId) => {
  const response = await fetch(`http://localhost:3000/api/threads/thread_y6fQawHZgGz0qyQRgL35PGes`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to retrieve thread")
    throw new Error("Failed to retrieve thread")
  }
  const data = await response.json()
  console.log("Thread retrieved successfully")
  //console.log(data.myThread)
  return data.myThread
}

// Delete a thread
export const DeleteThread = async (threadId) => {
  const response = await fetch(`http://localhost:3000/api/threads/${threadId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to retrieve thread")
    throw new Error("Failed to retrieve thread")
  }
  const data = await response.json()
  console.log("Thread retrieved successfully")
  //console.log(data.myThread)
  return data.myThread
}

// Create a message in a thread
export const CreateMessage = async (threadId, message) => {
  const response = await fetch(`http://localhost:3000/api/threads/${threadId}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: message }),
  })
  if (!response.ok) {
    console.error("Failed to create message")
    throw new Error("Failed to create message")
  }
  const data = await response.json()
  console.log("Message created successfully")
  //console.log(data.threadMessages)
  return data.threadMessages
}

//Get list of all messages in a thread
export const GetMessages = async (threadId) => {
  const response = await fetch(`http://localhost:3000/api/threads/${threadId}/messages`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to get messages")
    throw new Error("Failed to get messages")
  }
  const data = await response.json()
  console.log("Messages retrieved successfully")
  //console.log(data.threadMessages)
  return data.threadMessages
}
