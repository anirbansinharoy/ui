"use client"

import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { sections } from "@/lib/navigation-data"

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col space-y-4">
          {sections.map((section) => (
            <div key={section.title}>
              <Link href={section.href} className="text-lg font-medium">
                {section.title}
              </Link>
              {section.subsections.length > 0 && (
                <ul className="mt-2 ml-4 space-y-2">
                  {section.subsections.map((subsection) => (
                    <li key={subsection.title}>
                      <Link href={subsection.href} className="text-sm text-muted-foreground">
                        {subsection.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}