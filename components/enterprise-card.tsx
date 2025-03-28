"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface EnterpriseCardProps {
  logo: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function EnterpriseCard({ logo, title, description, buttonText, buttonLink }: EnterpriseCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="bg-[#212121] border border-[#363636] rounded-2xl p-6 flex flex-col items-center shadow-[0_1px_25px_-7px_rgba(227,227,227,0.25)]"
    >
      <div className="w-24 h-24 mb-6 relative filter drop-shadow-[0_6px_17px_rgba(0,0,0,0.66)]">
        <Image src={logo || "/placeholder.svg"} alt={`${title} logo`} fill className="object-contain" />
      </div>
      <h2 className="text-2xl font-medium mb-4 text-center text-white">{title}</h2>
      <p className="text-[#999999] text-center text-sm mb-6">{description}</p>
      <Link
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#4AFF53] text-black px-6 py-2 rounded-lg text-sm hover:bg-[#3AEF43] transition-colors duration-300 font-medium"
      >
        {buttonText}
      </Link>
    </motion.div>
  )
}

