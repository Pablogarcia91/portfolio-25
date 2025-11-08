"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const centerNavLinks = [
    { href: "/", label: "Home" },
    { href: "/resume", label: "About" },
    { href: "/side-projects", label: "Side Projects" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={`flex justify-between items-center mb-12 md:mb-16 shrink-0 transition-opacity duration-1000 ease-in-out ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Logo - Left */}
      <Link
        href="/"
        className={`w-12 h-12 border border-border rounded-lg flex items-center justify-center hover:bg-muted/50 transition-all duration-500 ease-in-out backdrop-blur-sm ${
          mounted ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
        style={{ transitionDelay: mounted ? "100ms" : "0ms" }}
      >
        <span className="text-xl font-semibold">P</span>
      </Link>

      {/* Center Navigation - Desktop */}
      <nav
        className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8 text-sm font-medium bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-border px-6 py-3 rounded-lg transition-all duration-1000 ease-in-out ${
          mounted ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
        style={{ transitionDelay: mounted ? "200ms" : "0ms" }}
      >
        <TooltipProvider>
          {centerNavLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:opacity-60 transition-all duration-700 ease-in-out ${
                isActive(link.href) ? "text-primary" : ""
              } ${
                mounted ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
              }`}
              style={{ transitionDelay: mounted ? `${400 + index * 80}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className={`flex items-center gap-2 text-muted-foreground/50 cursor-not-allowed transition-all duration-700 ease-in-out ${
                  mounted ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                }`}
                style={{ transitionDelay: mounted ? `${400 + centerNavLinks.length * 80}ms` : "0ms" }}
              >
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                <span>Works</span>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white dark:bg-neutral-900 text-foreground border border-border shadow-lg">
              <p>Coming soon</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>

      {/* Right side - Desktop */}
      <div
        className={`hidden md:flex items-center gap-4 transition-all duration-1000 ease-in-out ${
          mounted ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
        style={{ transitionDelay: mounted ? "300ms" : "0ms" }}
      >
        <Link
          href="/surprise"
          className={`text-sm font-medium hover:opacity-60 transition-opacity duration-500 ease-in-out ${
            isActive("/surprise") ? "text-primary" : ""
          }`}
        >
          Surprise
        </Link>
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-all duration-500 ease-in-out backdrop-blur-sm"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`md:hidden w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-muted transition-all duration-1000 ease-in-out ${
          mounted ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
        style={{ transitionDelay: mounted ? "300ms" : "0ms" }}
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-19 right-4 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-border rounded-lg shadow-lg z-50 min-w-[200px] animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col p-2">
            {centerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium ${
                  isActive(link.href) ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-3 text-sm font-medium flex items-center gap-2 text-muted-foreground/50 cursor-not-allowed">
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
              <span>Works</span>
              <span className="ml-auto text-xs">(Coming soon)</span>
            </div>
            <Link
              href="/surprise"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium ${
                isActive("/surprise") ? "text-primary" : ""
              }`}
            >
              Surprise
            </Link>
            {mounted && (
              <>
                <div className="border-t border-border my-2"></div>
                <button
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium flex items-center justify-between"
                >
                  <span>Theme</span>
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
