import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  illustration: "voice" | "capsule" | "hands" | "root";
  coverImage?: string;
}

export interface Post extends PostMeta {
  content: string;
}

const JOURNAL_DIR = path.join(process.cwd(), "content", "journal");

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(JOURNAL_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(path.join(JOURNAL_DIR, file), "utf8"));
      return { slug, ...(data as Omit<PostMeta, "slug">) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const file = path.join(JOURNAL_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { slug, content, ...(data as Omit<PostMeta, "slug">) };
}
