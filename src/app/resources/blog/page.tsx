"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogPost } from "@/components/BlogPost"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { blogPosts, type BlogType } from "@/lib/blog-data"

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogType | null>(null)
  const [postContent, setPostContent] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function loadContent() {
      if (selectedPost?.file) {
        setIsLoading(true)
        try {
          const response = await fetch(`/api/blog?file=${encodeURIComponent(selectedPost.file)}`)
          const data = await response.json()
          setPostContent(data.content || 'No Content Found')
        } catch (error) {
          console.error('Error loading blog content:', error)
          setPostContent('No Content Found')
        } finally {
          setIsLoading(false)
        }
      }
    }

    loadContent()
  }, [selectedPost])

  return (
    <div className="relative min-h-screen">
      <div className={`container py-8 ${selectedPost ? 'pr-[600px]' : ''}`}>
        <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} onClick={() => setSelectedPost(post)}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div className="fixed top-0 right-0 h-screen w-[600px] bg-background border-l overflow-y-auto">
          <button
            onClick={() => setSelectedPost(null)}
            className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full"
          >
            <X size={24} />
          </button>
          {isLoading ? (
            <div className="p-8">Loading...</div>
          ) : (
            <BlogPost
              title={selectedPost.title}
              date={selectedPost.date}
              content={postContent}
            />
          )}
        </div>
      )}
    </div>
  )
}
