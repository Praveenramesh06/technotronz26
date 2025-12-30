"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

// Mock user data from instructions
export const MOCK_USER = {
  name: "John Doe",
  email: "john@gmail.com",
  tzId: "TZ26-A9F3KQ",
  eventsRegistered: ["Event 001", "Event 005"],
  workshopsRegistered: ["W-01"],
  eventsPaymentStatus: "PENDING" as const,
  workshopsPaymentStatus: {
    "W-01": "PAID" as const,
    "W-02": "NOT PAID" as const,
    "W-03": "NOT PAID" as const,
  },
}

interface AuthContextType {
  isLoggedIn: boolean
  user: typeof MOCK_USER | null
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<typeof MOCK_USER | null>(null)

  const login = () => {
    setIsLoggedIn(true)
    setUser(MOCK_USER)
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  return <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
