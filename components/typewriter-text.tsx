"use client"

import { useEffect, useState } from "react"

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
}

export function TypewriterText({ text, className = "", speed = 80 }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={`${className} text-balance`}>
      {displayedText}
      <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-red-500 transition-opacity duration-100`}>
        |
      </span>
    </span>
  )
}
