"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Layers } from "lucide-react";

const Header = () => {
  const menuItems = ["Home", "About", "Product", "Researches", "Pricing", "Contact"];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <Layers className="h-6 w-6" />
          <span className="font-bold text-lg">A2Z Company</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-600 dark:text-gray-300 transition-colors hover:text-primary after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item}
            </a>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <a href="#" className="flex items-center gap-2">
                <Layers className="h-6 w-6" />
                <span className="font-bold text-lg">A2Z Company</span>
              </a>
              <nav className="grid gap-2 text-base font-medium">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-primary"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;