"use client"

import { useState, useRef } from "react"

export default function BuildingInPublic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)

  const handlePlay = () => {
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.src += "&autoplay=1"
    }
  }

  return (
    <div className="max-w-5xl w-full mb-8 px-4">
      <h2 className="text-3xl font-medium text-center mb-8">
        <span className="bg-gradient-to-r from-white via-white to-[#303030] bg-clip-text text-transparent">
          Building in Public
        </span>
      </h2>
      <div className="bg-[rgba(252,252,252,0.08)] rounded-lg overflow-hidden border-t border-[rgba(242,242,242,0.35)]">
        <div className="h-8 bg-black flex items-center px-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E3E3E3]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#E3E3E3]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#E3E3E3]"></div>
          </div>
        </div>
        <div className="relative aspect-video">
          <iframe
            ref={videoRef}
            src="https://www.youtube.com/embed/KuEW6XmkRto?si=Dzu7Llhh9CmGLzLM"
            title="¿Qué hay en mi MacBook? | Un día en mi vida como estudiante de ingeniería"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            onClick={handlePlay}
          />
          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-[#7E7E7E] bg-black bg-opacity-50 px-2 py-1 rounded">
            Mi último vídeo de YouTube
          </p>
        </div>
      </div>
    </div>
  )
}

