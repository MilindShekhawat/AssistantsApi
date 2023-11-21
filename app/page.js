import Assistants from "./components/Assistants"
import Sidebar from "./components/Sidebar"

export default function Home() {
  const assistants = [
    { name: "abcd", model: "chatgpt-3.5-turbo", description: "added 5 packages, and audited 330 packages in 5s" },
    { name: "Hello", model: "chatgpt-3.5-turbo", description: "added 5 packages, and audited 330 packages in 5s" },
    { name: "Hello", model: "chatgpt-3.5-turbo", description: "added 5 packages, and audited 330 packages in 5s" },
    {
      name: "RPSBOT",
      model: "chatgpt-3.5-turbo",
      description: "117 packages are looking for funding run `npm fund` for details found 0 vulnerabilities i",
    },
  ]
  return (
    <main className='flex'>
      <Sidebar assistants={assistants} />
      <Assistants assistants={assistants} />
    </main>
  )
}
