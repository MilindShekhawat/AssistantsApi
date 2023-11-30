import { Inter } from "next/font/google"
import "./globals.css"
import StoreProvider from "./store/StoreProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Assistants",
  description: "Interface to chat with ChatGPT Assistants",
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </StoreProvider>
  )
}
