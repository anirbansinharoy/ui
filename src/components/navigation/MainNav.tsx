"use client"

import Link from "next/link"
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu"
import { sections } from "@/lib/navigation-data"
import { ListItem } from "./ListItem"
import { MobileMenu } from "./MobileMenu"

export function MainNav() {
  return (
    <div className="flex items-center p-4 bg-background border-b">
      <Link href="/" className="mr-6">
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
      <div className="ml-auto">
        <MobileMenu />
      </div>
    </div>
  )
}