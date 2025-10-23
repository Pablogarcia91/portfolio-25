"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Moon, Sun, Menu, X, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "ecommerce-redesign",
    title: "E-commerce Platform Redesign",
    description: "A complete redesign of a B2C e-commerce platform",
    category: "UI/UX Design",
    year: "2024"
  },
  {
    id: "banking-app",
    title: "Banking App Interface",
    description: "Mobile-first banking application with accessibility focus",
    category: "Product Design",
    year: "2023"
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    description: "Analytics dashboard with complex data visualization",
    category: "Web Design",
    year: "2023"
  },
  {
    id: "fitness-tracking",
    title: "Fitness Tracking App",
    description: "Wellness app with workout tracking and social features",
    category: "Mobile Design",
    year: "2024"
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    description: "Property search with advanced filtering and 3D tours",
    category: "UI/UX Design",
    year: "2023"
  },
  {
    id: "educational-portal",
    title: "Educational Learning Portal",
    description: "Interactive learning with gamification elements",
    category: "Product Design",
    year: "2024"
  }
];

export default function Arts() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-auto">
      {/* Geometric Background */}
      <div className="geometric-background">
        <div className="geometric-blob geometric-blob-1"></div>
        <div className="geometric-blob geometric-blob-2"></div>
        <div className="geometric-blob geometric-blob-3"></div>
        <div className="geometric-blob geometric-blob-4"></div>
      </div>

      <div className="rounded-container glass-container m-4 md:m-8 my-8 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-16 md:mb-20">
          <Link href="/" className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/resume" className="hover:opacity-60 transition-opacity">About</Link>
            <Link href="/arts" className="hover:opacity-60 transition-opacity">Works</Link>
            <Link href="/surprise" className="hover:opacity-60 transition-opacity">Surprise</Link>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-19 right-4 bg-background border border-border rounded-2xl shadow-lg z-50 min-w-[200px]">
            <nav className="flex flex-col p-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/arts"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium"
              >
                Works
              </Link>
              <Link
                href="/surprise"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium"
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
                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                </>
              )}
            </nav>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">Works</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 md:mb-20 font-normal">
            Selected projects
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/arts/${project.id}`}
                className="project-card group relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 group-hover:from-primary/40 group-hover:via-primary/30 group-hover:to-primary/20 transition-all duration-300">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-8xl opacity-10">🎨</span>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent p-6 flex flex-col justify-end">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-medium">{project.category}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-24 md:mt-32 pt-12 md:pt-16 border-t border-border text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Let's create something amazing
            </p>
            <a
              href="mailto:hellopgarciadesign@gmail.com"
              className="link-animated inline-flex items-center text-xl text-primary underline decoration-1 underline-offset-4 transition-all font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
