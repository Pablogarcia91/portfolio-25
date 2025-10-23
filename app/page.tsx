"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const phrases = [
  "sees problems as puzzles waiting to be solved",
  "loves to dig into the why of user behaviors",
  "always is looking for collaborate with others to create effortless solutions",
  "is a passionate designer and basketball runner"
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
          setTypingSpeed(80);
        } else {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
          setTypingSpeed(40);
        } else {
          // Move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <div className="h-screen bg-background overflow-hidden">
      {/* Geometric Background */}
      <div className="geometric-background">
        <div className="geometric-blob geometric-blob-1"></div>
        <div className="geometric-blob geometric-blob-2"></div>
        <div className="geometric-blob geometric-blob-3"></div>
        <div className="geometric-blob geometric-blob-4"></div>
      </div>

      {/* Main Container */}
      <div className="rounded-container m-4 md:m-8 h-[calc(100vh-2rem)] md:h-[calc(100vh-4rem)] flex flex-col relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-12 md:mb-16 shrink-0">
          <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center bg-card hover:bg-muted transition-colors">
            <span className="text-xl font-semibold">P</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/resume" className="hover:opacity-60 transition-opacity">About</Link>
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
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium"
              >
                About
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
        <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16 overflow-hidden min-h-0">
          {/* Left Side - Text */}
          <div className="w-full lg:flex-1 space-y-4 md:space-y-6 overflow-y-auto pr-0 lg:pr-8">
            <div>
              <h1 className="font-bold leading-tight mb-3 md:mb-4">
                <span className="block text-xl sm:text-2xl md:text-3xl mb-2">Hello there 👋🏼</span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">I'm Pablo García</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-normal">
                That guy who{" "}
                <span className="typewriter-text italic">
                  {displayedText}
                  <span className="typewriter-cursor">|</span>
                </span>
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-auto shrink-0 flex items-end justify-end lg:items-start lg:justify-end pt-0 lg:pt-8">
            <div className="relative w-[140px] h-[140px] lg:w-[210px] lg:h-[210px]">
              {mounted && (
                <Image
                  src={theme === "dark" ? "/profile-pic-dark.png" : "/profile-pic-light.png"}
                  alt="Pablo García"
                  width={210}
                  height={210}
                  className="w-full h-full object-cover object-center rounded-3xl"
                  priority
                />
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col items-center md:flex-row md:justify-between md:items-center gap-4 md:gap-0 pt-8 md:pt-12 border-t border-border mt-auto shrink-0">
          <div className="flex gap-4 md:gap-6 text-sm font-medium">
            <a href="https://www.linkedin.com/in/pablo-garcia-pedro/" target="_blank" rel="noopener noreferrer" className="link-animated text-primary underline decoration-1 underline-offset-4 transition-all">
              Linkedin
            </a>
            <span className="text-muted-foreground">/</span>
            <a href="https://bsky.app/profile/sinanimodlucro.bsky.social" target="_blank" rel="noopener noreferrer" className="link-animated text-primary underline decoration-1 underline-offset-4 transition-all">
              Bluesky
            </a>
            <span className="text-muted-foreground">/</span>
            <a href="https://github.com/Pablogarcia91" target="_blank" rel="noopener noreferrer" className="link-animated text-primary underline decoration-1 underline-offset-4 transition-all">
              Github
            </a>
          </div>
          <a href="mailto:hellopgarciadesign@gmail.com" className="link-animated text-sm font-medium text-primary underline decoration-1 underline-offset-4 transition-all">
            hellopgarciadesign@gmail.com
          </a>
        </footer>
      </div>
    </div>
  );
}
