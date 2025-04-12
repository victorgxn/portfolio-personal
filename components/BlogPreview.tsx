import { getLatestPosts } from "@/lib/blog";
import BlogPostCard from "./BlogPostCard";
import Link from "next/link";

// Este componente debe ser un Server Component
export default function BlogPreview() {
  const latestPosts = getLatestPosts(2);

  return (
    <section className="w-full max-w-5xl mb-20 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-medium text-white">
            Últimos{" "}
            <span className="font-serif italic font-normal text-[#4AFF53]">
              posts
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            Descubre mis últimas reflexiones y artículos sobre desarrollo web,
            tecnología y más.
          </p>
        </div>
        <Link
          href="/blog"
          className="mt-6 md:mt-0 inline-flex items-center text-[#4AFF53] hover:text-[#3ae043] transition-colors group"
        >
          Ver todos los posts
          <svg
            className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {latestPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
