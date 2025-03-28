import Link from "next/link"
import { Instagram, TwitterIcon as TikTok, Youtube, Linkedin } from "lucide-react"

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/victorgxn/" },
  { name: "TikTok", icon: TikTok, url: "https://www.tiktok.com/@victorgxnz" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@victorgxn" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/victorgxn/" },
]

export default function SocialMedia() {
  return (
    <div className="w-full max-w-5xl px-4 mb-16">
      <h2 className="text-2xl font-medium text-center mb-8">
        <span className="bg-gradient-to-r from-white via-white to-[#303030] bg-clip-text text-transparent">
          Connect with me
        </span>
      </h2>
      <div className="flex justify-center space-x-8">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4AFF53] transition-colors"
          >
            <social.icon size={32} />
            <span className="sr-only">{social.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

