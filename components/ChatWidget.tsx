"use client"

import { useState } from "react"
import { useUser } from "@/components/UserProvider"
import { useLocale } from "next-intl"

export default function ChatWidget() {

  const [messages, setMessages] = useState<{ role: string; text: string }[]>([])
  const [input, setInput] = useState("")

  // Use the global app-wide User Context
  const { userId } = useUser()
  const locale = useLocale()

  async function send() {
    if (!input.trim() || !userId) return

    const userMessageCount = messages.filter(m => m.role === "user").length;
    if (userMessageCount >= 20) {
      setMessages(prev => [...prev, { role: "ai", text: "You have reached the limit of 20 messages for this conversation." }]);
      setInput("");
      return;
    }

    setMessages([...messages, { role: "user", text: input }])
    const currentInput = input
    setInput("")

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: currentInput, userId, locale })
      })

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`)
      }

      const data = await res.json()

      setMessages(prev => [
        ...prev,
        { role: "ai", text: data.reply }
      ])
    } catch (error) {
      console.error(error)
      setMessages(prev => [
        ...prev,
        { role: "ai", text: "Sorry, I am having trouble connecting to the server. Please check your API key." }
      ])
    }
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white border rounded-lg shadow-2xl w-80 sm:w-96 h-[500px] flex flex-col">
          <div className="p-4 border-b flex justify-between items-center text-black">
            <h3 className="font-semibold">🤖 shah.zip</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close Chat">
              ✕
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto w-full overflow-x-hidden text-black flex flex-col gap-3">
            <p className="text-sm bg-gray-100 p-3 rounded-lg w-fit max-w-[85%] break-words">Hello! I am shah.zip, a version of Shahzeb. How can I help you today?</p>
            {messages.map((m, i) => (
              <p
                key={i}
                className={`text-sm p-3 rounded-lg w-fit max-w-[85%] break-words whitespace-pre-wrap ${m.role === "user" ? "bg-blue-600 text-white self-end" : "bg-gray-100 text-black self-start"
                  }`}
              >
                {m.text}
              </p>
            ))}
          </div>
          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full border rounded-md px-3 py-2 text-sm text-black"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
            />
            <button
              onClick={send}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white rounded-full px-5 py-3 shadow-xl hover:bg-blue-700 transition flex items-center gap-2"
        >
          <span className="text-xl">🤖</span>
          <span className="font-semibold">Chat with Me</span>
        </button>
      )}
    </div>
  )
}
