"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const logos = [
  {
    src: "https://framerusercontent.com/images/iuNDWCguTZrQD03fQ78hh3Yrc4.png",
    alt: "Brand Logo 1",
  },
  {
    src: "https://framerusercontent.com/images/nwBf7cTVfvPCl6f4STLc3KJ0edU.png",
    alt: "Brand Logo 2",
  },
  {
    src: "https://framerusercontent.com/images/xhUpwVsi2zmXoeJRzsmBIYiAw7Y.png",
    alt: "Brand Logo 3",
  },
  {
    src: "https://framerusercontent.com/images/9UyMcXJwx85Vdnj7wlrq8Unifw.png",
    alt: "Brand Logo 4",
  },
]

export default function LogoCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLUListElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isDuplicatesAdded, setIsDuplicatesAdded] = useState(false)
  const [allLogos, setAllLogos] = useState(logos)

  // Measure container and content width
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      const updateWidths = () => {
        setContainerWidth(containerRef.current?.clientWidth || 0)
        setContentWidth(contentRef.current?.scrollWidth || 0)
      }

      updateWidths()
      window.addEventListener("resize", updateWidths)

      return () => window.removeEventListener("resize", updateWidths)
    }
  }, [])

  // Add duplicates for infinite scrolling
  useEffect(() => {
    if (!isDuplicatesAdded && contentWidth > 0) {
      // Duplicate logos to ensure continuous scrolling
      setAllLogos([...logos, ...logos, ...logos])
      setIsDuplicatesAdded(true)
    }
  }, [contentWidth, isDuplicatesAdded])

  // Auto-scroll animation
  useEffect(() => {
    if (!contentWidth || !containerWidth) return

    const scrollSpeed = 0.5 // pixels per frame
    let animationFrameId: number
    let currentPosition = scrollPosition

    const scroll = () => {
      currentPosition += scrollSpeed

      // Reset position when we've scrolled through one set of logos
      if (currentPosition >= contentWidth / 3) {
        currentPosition = 0
      }

      setScrollPosition(currentPosition)
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [contentWidth, containerWidth, scrollPosition])

  return (
    <div className="w-full flex justify-center mb-16">
      {" "}
      {/* Added flex and justify-center */}
      <div
        ref={containerRef}
        className="max-w-3xl w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
        }}
      >
        <ul ref={contentRef} className="flex items-center" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {allLogos.map((logo, index) => (
            <li key={index} className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-[100px] h-[50px] flex items-center justify-center px-3">
                  {" "}
                  {/* Reduced size */}
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      fill
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                {index < allLogos.length - 1 && <div className="h-6 w-px bg-zinc-800" />} {/* Reduced divider height */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

