import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { title: "Home", href: "/" },
  {
    title: "About Us",
    href: "/aboutTeam",
    // content: [
    //   {
    //     title: "Our Story",
    //     href: "/about/story",
    //     description: "Learn about our journey and milestones",
    //   },
    //   {
    //     title: "Team",
    //     href: "/about/team",
    //     description: "Meet the people behind our success",
    //   },
    //   {
    //     title: "Vision & Mission",
    //     href: "/about/vision",
    //     description: "Discover what drives us forward",
    //   },
    // ],
  },
  {
    title: "Services",
    href: "/services",
    content: [
      {
        title: "IT Consulting",
        href: "/dropdown/consulting",
        description: "Expert advice for your IT needs",
      },
      {
        title: "Software Development",
        href: "/dropdown/software",
        description: "Custom software solutions",
      },
      {
        title: "Cloud Services",
        href: "/services/cloud",
        description: "Scalable cloud infrastructure",
      },
      {
        title: "Cybersecurity",
        href: "/services/security",
        description: "Protect your digital assets",
      },
    ],
  },
  { title: "Careers", href: "/careers" },
  {
    title: "Resources",
    href: "/resources",
    content: [
      {
        title: "Blog",
        href: "/dropdown/blog",
        description: "Read our latest articles and insights",
      },
      {
        title: "Case Studies",
        href: "/dropdown/caseStudies",
        description: "Explore our client success stories",
      },
      {
        title: "Whitepapers",
        href: "/dropdown/whitepapers",
        description: "In-depth research and analysis",
      },
      {
        title: "FAQ",
        href: "/dropdown/faq",
        description: "Answers to commonly asked questions",
      },
    ],
  },
];

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 ",
              className
            )}
            {...props}
          >
            <div className="text-lg font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export function NavbarItems() {
  return (
    <header className=" sticky top-0 z-50 w-full border-b border-blue-200 bg-white ">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center ">
          <Image src="/ksvn.png" alt="KSVN Logo" width={150} height={150} />
        </Link>
        <NavigationMenu className="hidden lg:flex  font-sans">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.content ? (
                  <NavigationMenuTrigger className="text-base">
                    {item.title}
                  </NavigationMenuTrigger>
                ) : (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
                {item.content && (
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.content.map((subItem) => (
                        <ListItem
                          key={subItem.title}
                          title={subItem.title}
                          href={subItem.href}
                        >
                          {subItem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Link href="/business">
            {" "}
            <Button className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900">
              For Business
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-blue-600 hover:text-blue-800"
                    >
                      {item.title}
                    </Link>
                    {item.content && (
                      <ul className="ml-4 space-y-2">
                        {item.content.map((subItem) => (
                          <li key={subItem.title}>
                            <Link
                              href={subItem.href}
                              className="text-base text-gray-600 hover:text-blue-600"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                <Link href="/business">
                  <Button className="w-full bg-blue-600 text-sm text-white hover:bg-blue-700">
                    For Business
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
