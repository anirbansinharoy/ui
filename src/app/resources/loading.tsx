export default function Loading() {
  return (
    <div className="container py-8">
      <div className="animate-pulse">
        <div className="h-8 w-48 bg-muted rounded mb-8"></div>
        <div className="h-4 w-96 bg-muted rounded mb-4"></div>
        <div className="h-4 w-80 bg-muted rounded"></div>
      </div>
    </div>
  )
} 