export type BlogPost = {
  slug: string;
  title: string; // SEO title
  h1: string;
  description: string; // meta description (<160)
  excerpt: string;
  keywords: string;
  category: string;
  author: string;
  datePublished: string; // ISO
  dateModified: string;
  readMinutes: number;
  cover: string; // image URL
  coverAlt: string;
  // Body as structured blocks for clean rendering + schema
  body: BlogBlock[];
  faqs?: { q: string; a: string }[];
};

export type BlogBlock =
  | { type: "p"; text: string; link?: { url: string; title?: string } }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export const BLOG_POSTS: BlogPost[] = [];

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);