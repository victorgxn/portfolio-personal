import { getAllPosts } from "@/lib/blog";
import BlogPostCard from "@/components/BlogPostCard";
import Link from "next/link";

export default function BlogPage() {
  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div>
            <h1 className="text-5xl md:text-6xl font-medium mb-6">
              Mi{" "}
              <span className="font-serif italic font-normal text-[#4AFF53]">
                blog
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Artículos, tutoriales y reflexiones sobre desarrollo web,
              tecnología y más.
            </p>
          </div>
          <Link
            href="/"
            className="mt-6 md:mt-0 inline-flex items-center text-[#4AFF53] hover:text-[#3ae043] transition-colors group"
          >
            <svg
              className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver al inicio
          </Link>
        </div>

        <section>
          <h2 className="text-3xl font-medium mb-8 text-white">
            Todos los <span className="text-[#4AFF53]">posts</span>
          </h2>
          <div className="grid gap-8">
            {allPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
