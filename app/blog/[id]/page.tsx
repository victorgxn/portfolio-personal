import { getPostData, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { marked } from "marked";
import Link from "next/link";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostData(params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-[#4AFF53] hover:text-[#3ae043] transition-colors mb-8 group"
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
          Volver al blog
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-white">
            {post.title}
          </h1>
          <p className="text-gray-400">
            {new Date(post.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>

        <div
          className="prose prose-lg max-w-none prose-invert
            prose-headings:text-white
            prose-p:text-gray-300
            prose-a:text-[#4AFF53] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-code:text-[#4AFF53]
            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800
            prose-blockquote:border-l-[#4AFF53] prose-blockquote:text-gray-400
            prose-ul:text-gray-300 prose-ol:text-gray-300
          "
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        />
      </div>
    </article>
  );
}
