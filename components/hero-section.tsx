"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative w-28 h-28 rounded-full border border-white/10 overflow-hidden"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2014.03.39-Dot6GbgOhJv3TzCkAIvoR1huGYwDgh.jpeg"
          alt="Victor Gonzalez"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4 py-1 bg-[#1A1A1A] rounded-full text-[#4AFF53] text-sm font-medium mb-6"
      >
        Victor Gonzalez
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl md:text-3xl font-bold mb-4"
      ></motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-4xl md:text-6xl font-medium mb-6 leading-tight"
      >
        <span className="text-white">Building</span>{" "}
        <span className="text-[#4AFF53] font-serif italic">cool</span>{" "}
        <span className="text-white">tech things and</span>{" "}
        <span className="text-[#4AFF53] font-serif italic">sharing</span>{" "}
        <span className="text-white">my progress.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg md:text-xl text-[#999999] max-w-2xl mb-8"
      >
        Programador, creador de contenido y emprendedor.
      </motion.p>
    </div>
  );
}
