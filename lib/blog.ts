import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface Post {
  id: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

// Lista de posts (se actualizará en tiempo de compilación)
const posts: Post[] = [
  {
    id: "hello-world",
    title: "Hello World",
    date: "2024-04-12",
    description: "Mi primer post en el blog personal",
    content: `# ¡Bienvenido a mi blog!

Este es mi primer post en el blog. Aquí compartiré mis pensamientos, experiencias y conocimientos sobre desarrollo web, tecnología y más.

## ¿Qué puedes esperar?

- Artículos sobre desarrollo web
- Tutoriales prácticos
- Reflexiones sobre tecnología
- Y mucho más...

¡Gracias por visitar mi blog!`,
  },
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getLatestPosts(limit: number = 3): Post[] {
  return getAllPosts().slice(0, limit);
}

export function getPostData(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}
