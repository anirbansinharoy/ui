"use client"
import { MainNav } from "@/components/navigation/MainNav"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Verifica</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <MainNav />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}