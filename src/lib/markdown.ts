import fs from 'fs'
import path from 'path'

const contentDirectory = path.join(process.cwd(), 'content')

export async function getMarkdownContent(filePath: string): Promise<string> {
  const fullPath = path.join(contentDirectory, filePath)
  try {
    const fileContent = await fs.promises.readFile(fullPath, 'utf8')
    return fileContent
  } catch (error) {
    console.error(`Error reading markdown file: ${filePath}`, error)
    return 'No Content'
  }
} 