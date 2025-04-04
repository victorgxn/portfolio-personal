import Link from "next/link";
import { socialLinks } from "@/data/social";

export default function SocialMediaButtons() {
  return (
    <div className="w-full max-w-xl mx-auto px-4 mb-12">
      <h2 className="text-3xl md:text-4xl font-medium text-center mb-8">
        Conéctate{" "}
        <span className="font-serif italic font-normal text-[#4AFF53]">
          conmigo
        </span>
      </h2>
      <div className="flex justify-center space-x-8">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4AFF53] transition-colors duration-300"
            aria-label={social.name}
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
