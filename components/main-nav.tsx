"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const sections = [
  {
    title: "Home",
    href: "/",
    subsections: [
      { title: "Overview", href: "/#overview" },
      { title: "Call-to-Action (CTA)", href: "/#cta" },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    subsections: [
      { title: "By Industry", href: "/solutions/industry" },
      { title: "By Use Case", href: "/solutions/use-case" },
    ],
  },
  {
    title: "Features",
    href: "/features",
    subsections: [
      { title: "Identity Verification", href: "/features/identity-verification" },
      { title: "Compliance Management", href: "/features/compliance-management" },
      { title: "Risk Assessment", href: "/features/risk-assessment" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    subsections: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Case Studies", href: "/resources/case-studies" },
      { title: "Whitepapers", href: "/resources/whitepapers" },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
    subsections: [
      { title: "Plans", href: "/pricing/plans" },
      { title: "Custom Quotes", href: "/pricing/custom-quotes" },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    subsections: [
      { title: "Company Overview", href: "/about/overview" },
      { title: "Leadership Team", href: "/about/leadership" },
      { title: "Careers", href: "/about/careers" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    subsections: [
      { title: "Support", href: "/contact/support" },
      { title: "Sales Inquiries", href: "/contact/sales" },
      { title: "Office Locations", href: "/contact/locations" },
    ],
  },
]

export function MainNav() {
  return (
    <div className="flex justify-between items-center p-4 bg-background border-b">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl">Your Logo</span>
      </Link>
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {sections.map((section) => (
              <NavigationMenuItem key={section.title}>
                {section.subsections.length > 0 ? (
                  <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
                ) : (
                  <Link href={section.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {section.title}
                    </NavigationMenuLink>
                  </Link>
                )}
                {section.subsections.length > 0 && (
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {section.subsections.map((subsection) => (
                        <ListItem
                          key={subsection.title}
                          title={subsection.title}
                          href={subsection.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
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
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

