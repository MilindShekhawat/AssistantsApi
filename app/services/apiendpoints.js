//? This file connects the frontend with next.js's api routes.
//? I have created various fetch requests here and each fetch request is for the api routes created in this app only.
//? Each request corresponds to its Next.js api route. The api routes contain functionality and code logic provided in OpenAi docs.

//? The fetch command is wrapped in try catch blocks to catch errors.
//? It is given a next.js api url.
//? Respective method
//? Cache Type
//? Json body if its a POST request.
//! An exception is returned if try block catches it
//! Failed to- Error is returned if response returned is not valid

const baseurl = "http://localhost:3000"

// Get a list of assistants
export const GetAssistants = async () => {
  try {
    const response = await fetch(`${baseurl}/api/assistants`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    })
    if (!response.ok) {
      console.error("Failed to get assistants")
      //throw new Error("Failed to get assistants")
    }
    const data = await response.json()
    console.log("Assistants retrieved successfully")
    //console.log(data.myAssistants)
    return data.myAssistants
  } catch (error) {
    console.error(`ERROR occurred: ${error}`)
  }
}

// Get a single assistant
export const GetAssistant = async (assistantId) => {
  try {
    const response = await fetch(`${baseurl}/api/assistants/${assistantId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    })
    if (!response.ok) {
      console.error("Failed to get assistant")
      //throw new Error("Failed to get assistant")
    }
    const data = await response.json()
    console.log("Assistant retrieved successfully")
    //console.log(data.myAssistant)
    return data.myAssistant
  } catch (error) {
    console.error(`ERROR occurred: ${error}`)
  }
}

// Create a new thread
export const CreateThread = async () => {
  try {
    const response = await fetch(`${baseurl}/api/threads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) {
      console.error("Failed to create thread")
      //throw new Error("Failed to create thread")
    }
    const data = await response.json()
    console.log("Thread created successfully")
    //console.log(data.threads)
    return data.threads
  } catch (error) {
    console.error(`ERROR occurred: ${error}`)
  }
}

// Get a list of threads
export const GetThreads = async (assistantId) => {
  if (!assistantId) {
    assistantId = ""
  }
  try {
    const response = await fetch(`${baseurl}/api/assistants/${assistantId}/threads`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // cache: "no-store",
    })
    if (!response.ok) {
      console.error("Failed to get threads")
      //throw new Error("Failed to create threads")
    }
    const data = await response.json()
    console.log("Threads retrieved successfully")
    //console.log(data.threads)
    return data.threads
  } catch (error) {
    console.error(`ERROR occurred: ${error}`)
  }
}

// Get a list of threads by user
export const GetUserThreads = async (userId) => {
  try {
    const response = await fetch(`${baseurl}/api/threads${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // cache:'no-store'
    })
    if (!response.ok) {
      console.error("Failed to get threads")
      //throw new Error("Failed to get threads")
    }
    const data = await response.json()
    console.log("Threads retrieved successfully")
    //console.log(data.threads)
    return data.threads
  } catch (error) {
    console.error(`ERROR occurred: ${error}`)
  }
}

// Get a thread
export const GetThread = async (threadId) => {
  try {
    const response = await fetch(`${baseurl}/api/threads/${threadId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // cache:'no-store'
    })
    if (!response.ok) {
      console.error("Failed to get thread")
      //throw new Error("Failed to get thread")
    }
    const data = await response.json()
    console.log("Thread retrieved successfully")
    //console.log(data.myThread)
    return data.myThread
  } catch (error) {
    console.error(`ERROR occurred: ${error}`)
  }
}

// Delete a thread
//TODO frontend
export const DeleteThread = async (threadId) => {
  try {
    const response = await fetch(`${baseurl}/api/threads/${threadId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) {
      console.error("Failed to delete thread")
      //throw new Error("Failed to delete thread")
    }
    const data = await response.json()
    console.log("Thread deleteed successfully")
    //console.log(data.myThread)
    return data.myThread
  } catch (error) {
    console.error(`ERROR occurred: ${error}`)
  }
}

// Create a message in a thread
export const CreateMessage = async (threadId, message) => {
  try {
    const response = await fetch(`${baseurl}/api/threads/${threadId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message }),
    })
    if (!response.ok) {
      console.error("Failed to create message")
      //throw new Error("Failed to create message")
    }
    const data = await response.json()
    console.log("Message created successfully")
    //console.log(data.threadMessages)
    return data.threadMessages
  } catch (error) {
    console.error(`ERROR occurred: ${error}`)
  }
}

// Get list of all messages in a thread
//TODO frontend, Will call this only once when page is rendered, call this with only the latest assistant reply and extract last message.
export const GetMessages = async (threadId) => {
  try {
    const response = await fetch(`${baseurl}/api/threads/${threadId}/messages`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // cache:'no-store'
    })
    if (!response.ok) {
      console.error("Failed to get messages")
      //throw new Error("Failed to get messages")
    }
    const data = await response.json()
    console.log("Messages retrieved successfully")
    //console.log(data.threadMessages)
    return data.threadMessages
  } catch (error) {
    console.error(`ERROR occurred: ${error}`)
  }
}

// Create a run
export const CreateRun = async (threadId, assistantId) => {
  try {
    const response = await fetch(`${baseurl}/api/threads/${threadId}/runs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ assistant_id: assistantId }),
    })
    if (!response.ok) {
      console.error("Failed to create a run")
      //throw new Error("Failed to create a run")
    }
    const data = await response.json()
    console.log("Run created successfully")
    //console.log(data.run)
    return data.run
  } catch (error) {
    console.error(`ERROR occurred: ${error}`)
  }
}

// List all runs
//TODO frontend probably
export const GetRuns = async (threadId) => {
  try {
    const response = await fetch(`${baseurl}/api/threads/${threadId}/runs`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // cache:'no-store'
    })
    if (!response.ok) {
      console.error("Failed to get runs")
      //throw new Error("Failed to get runs")
    }
    const data = await response.json()
    console.log("Runs retrieved successfully")
    //console.log(data.runs)
    return data.runs
  } catch (error) {
    console.error(`ERROR occurred: ${error}`)
  }
}
