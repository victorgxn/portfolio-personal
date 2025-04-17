"use client";

import { useState, useRef } from "react";

export default function DocumentProcess() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.src += "&autoplay=1";
    }
  };

  return (
    <div className="max-w-5xl w-full mb-16 px-4">
      <h2 className="text-4xl md:text-5xl font-medium text-center mb-8">
        Documentar el{" "}
        <span className="font-serif italic font-normal text-[#4AFF53]">
          proceso
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
        <div className="video-container">
        <iframe
  ref={videoRef}
  src="https://www.youtube.com/embed/btxsDec_60o?si=XSaylRAusCvq0wmh"
  title="Como consegui mi primer trabajo como programador"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  onClick={handlePlay}
/>

          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-[#999999] bg-black bg-opacity-50 px-2 py-1 rounded">
            Mi último vídeo de YouTube
          </p>
        </div>
      </div>
    </div>
  );
}
