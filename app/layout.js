import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "./components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Assistants",
  description: "Interface to chat with ChatGPT Assistants",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex'>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
