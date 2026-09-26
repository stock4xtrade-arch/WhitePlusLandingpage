export type Block =
  | { type: "h2" | "h3" | "h4" | "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; ordered: boolean; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  blocks: Block[];
};
