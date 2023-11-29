//? This file connects with next.js's api routes.

// Get a list of assistants
export const GetAssistants = async () => {
  const response = await fetch("http://localhost:3000/api/assistants", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
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
export const CreateThread = async () => {
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
  //console.log(data.threads)
  return data.threads
}

// Retrieve a list of threads
export const GetThreads = async () => {
  const response = await fetch(`http://localhost:3000/api/threads`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  })
  if (!response.ok) {
    console.error("Failed to get threads")
    throw new Error("Failed to get threads")
  }
  const data = await response.json()
  console.log("Threads retrieved successfully")
  //console.log(data.threads)
  return data.threads
}
// TODO Retrieve a thread
//TODO frontend
export const GetThread = async (threadId) => {
  const response = await fetch(`http://localhost:3000/api/threads/${threadId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to get thread")
    throw new Error("Failed to get thread")
  }
  const data = await response.json()
  console.log("Thread retrieved successfully")
  //console.log(data.myThread)
  return data.myThread
}

// Delete a thread
//TODO frontend
export const DeleteThread = async (threadId) => {
  const response = await fetch(`http://localhost:3000/api/threads/${threadId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to delete thread")
    throw new Error("Failed to delete thread")
  }
  const data = await response.json()
  console.log("Thread deleteed successfully")
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
  CreateRun(threadId, "asst_I3zkF7wo9pHrn2YYeMNIMeTL")
  return data.threadMessages
}

// Get list of all messages in a thread
//TODO frontend, Will call this only once when page is rendered, call this with only the latest assistant reply and extract last message.
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

// Create a run
//TODO frontend Called when pressed enter
export const CreateRun = async (threadId, assistantId) => {
  const response = await fetch(`http://localhost:3000/api/threads/${threadId}/runs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ assistant_id: assistantId }),
  })
  if (!response.ok) {
    console.error("Failed to create a run")
    throw new Error("Failed to create a run")
  }
  const data = await response.json()
  console.log("Run created successfully")
  //console.log(data.run)
  return data.run
}

// List all runs
//TODO frontend probably
export const GetRuns = async (threadId) => {
  const response = await fetch(`http://localhost:3000/api/threads/${threadId}/runs`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  if (!response.ok) {
    console.error("Failed to get runs")
    throw new Error("Failed to get runs")
  }
  const data = await response.json()
  console.log("Runs retrieved successfully")
  //console.log(data.runs)
  return data.runs
}
