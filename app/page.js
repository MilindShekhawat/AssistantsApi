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
    <div className='flex flex-col p-2 w-full justify-center'>
      <h1 className='text-center text-3xl font-bold m-5'>Select your Assistant</h1>
      <div className='flex flex-wrap gap-2 w-3/5 min-w-[500px] h-auto mx-auto'>
        {assistants.map((assistant) => (
          <div
            key={assistant.name}
            className='flex flex-col flex-grow h-28 w-64 p-2 border-[1px] border-neutral-300 rounded-lg'>
            <span className='font-bold'>{assistant.name}</span>
            <span className='font-medium text-xs text-neutral-400'>{assistant.model}</span>
            <span className='font-medium text-sm text-neutral-600 pt-1'>{assistant.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
