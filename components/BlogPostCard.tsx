import Link from "next/link";
import { Post } from "@/lib/blog";

interface BlogPostCardProps {
  post: Post;
  featured?: boolean;
}

export default function BlogPostCard({
  post,
  featured = false,
}: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <article
        className={`
        group relative overflow-hidden rounded-xl p-6 transition-all duration-300
        ${
          featured
            ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-gray-600"
            : "bg-gray-900 border border-gray-800 hover:border-gray-700"
        }
      `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4AFF53]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative">
          <h2
            className={`
            font-medium mb-3 transition-colors duration-300
            ${featured ? "text-2xl text-white" : "text-xl text-gray-200"}
          `}
          >
            {post.title}
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            {new Date(post.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="text-gray-300 line-clamp-3">{post.description}</p>

          <div className="mt-4 flex items-center text-[#4AFF53] text-sm font-medium">
            Leer más
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
