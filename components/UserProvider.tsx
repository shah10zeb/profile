"use client"

import { createContext, useContext, useEffect, useState } from "react"

interface UserContextType {
  userId: string | null
}

const UserContext = createContext<UserContextType>({ userId: null })

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    // Check if we already have an ID in localStorage
    const storedId = localStorage.getItem("app_user_id")
    
    if (storedId) {
      setUserId(storedId)
    } else {
      // Generate a new one
      const newId = "user_" + Math.random().toString(36).substring(2, 15)
      localStorage.setItem("app_user_id", newId)
      setUserId(newId)
    }
  }, [])

  return (
    <UserContext.Provider value={{ userId }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
