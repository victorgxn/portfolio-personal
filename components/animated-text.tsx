"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface AnimatedTextProps {
  texts: string[]
  interval?: number
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, interval)

    return () => clearInterval(timer)
  }, [texts, interval])

  return <span className="font-serif italic font-normal text-[#4AFF53]">{texts[currentIndex]}</span>
}

export default AnimatedText

