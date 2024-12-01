import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const file = searchParams.get('file')

  if (!file) {
    return NextResponse.json({ content: 'No Content Found' }, { status: 200 })
  }

  const contentDirectory = path.join(process.cwd(), 'src', 'content')
  const fullPath = path.join(contentDirectory, file)

  try {
    const content = await fs.promises.readFile(fullPath, 'utf8')
    return NextResponse.json({ content })
  } catch (error) {
    console.error(`Error reading markdown file: ${file}`, error)
    return NextResponse.json({ content: 'No Content Found' }, { status: 200 })
  }
} 