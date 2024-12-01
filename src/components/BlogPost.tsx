import { marked } from 'marked'

interface BlogPostProps {
  title: string
  content: string
  date: string
}

export function BlogPost({ title, date, content }: BlogPostProps) {
  // Configure marked to handle line breaks and other GitHub Flavored Markdown features
  marked.setOptions({
    breaks: true,
    gfm: true,
  })

  // Parse the markdown content
  const htmlContent = marked.parse(content)

  return (
    <article className="p-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="text-muted-foreground mb-8">
        {new Date(date).toLocaleDateString()}
      </div>
      <div 
        className="markdown"
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    </article>
  )
} 