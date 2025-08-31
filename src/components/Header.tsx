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
    <header className="sticky top-0 z-50 w-full bg-slate-950/70 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <A2ZLogo className="h-8 w-auto" />
          <span className="font-bold text-xl text-slate-100">
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
                  "transition-colors hover:text-cyan-400",
                  isActive ? "text-cyan-400 [text-shadow:0_0_8px_theme(colors.cyan.400)]" : "text-slate-300"
                )}
              >
                {item}
              </a>
            );
          })}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent border-cyan-500/50 text-cyan-400 hover:bg-cyan-900/50 hover:text-cyan-300">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-slate-950 border-l-cyan-500/20">
            <div className="grid gap-4 p-4">
              <a href="#" className="flex items-center gap-2">
                <A2ZLogo className="h-8 w-auto" />
                <span className="font-bold text-xl text-slate-100">
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
                        "rounded-md px-3 py-2 transition-colors hover:bg-slate-800 hover:text-cyan-400",
                        isActive ? "bg-slate-800 text-cyan-400" : "text-slate-300"
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