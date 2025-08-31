"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { A2ZLogo } from "./A2ZLogo";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const Header = () => {
  const menuItems = ["Home", "About", "Product", "Researches", "Pricing", "Contact"];
  const sectionIds = menuItems.map((item) => item.toLowerCase());
  const activeId = useScrollSpy(sectionIds, { rootMargin: "0px 0px -80% 0px" });

  return (
    <header className="sticky top-0 z-50 w-full bg-purple-800 text-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <A2ZLogo className="h-8 w-auto" />
          <span className="font-bold text-xl text-white">
            A2Z Company
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeId === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={cn(
                  "relative text-purple-200 transition-colors hover:text-white after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                  isActive && "text-white after:scale-x-100 after:origin-bottom-left"
                )}
              >
                {item}
              </a>
            );
          })}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent text-white hover:bg-purple-700 hover:text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <a href="#" className="flex items-center gap-2">
                <A2ZLogo className="h-8 w-auto" />
                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500">
                  A2Z Company
                </span>
              </a>
              <nav className="grid gap-2 text-base font-medium">
                {menuItems.map((item) => {
                  const id = item.toLowerCase();
                  const isActive = activeId === id;
                  return (
                    <a
                      key={item}
                      href={`#${id}`}
                      className={cn(
                        "rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-primary",
                        isActive && "bg-muted text-primary"
                      )}
                    >
                      {item}
                    </a>
                  );
                })}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;