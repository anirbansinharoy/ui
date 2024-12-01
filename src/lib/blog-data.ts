export interface BlogType {
  id: string
  title: string
  excerpt: string
  date: string
  file: string  // Path to markdown file relative to content directory
  content?: string
}

export const blogPosts: BlogType[] = [
  {
    id: "1",
    title: "First Blog Post",
    excerpt: "This is a brief description of the first blog post...",
    date: "2024-03-20",
    file: "blog/first-post.md"
  },
  {
    id: "2",
    title: "Second Blog Post",
    excerpt: "Another interesting blog post about development...",
    date: "2024-03-21",
    file: "blog/second-post.md"
  }
] 