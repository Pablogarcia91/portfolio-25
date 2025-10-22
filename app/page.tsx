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
      {/* Main Container */}
      <div className="rounded-container m-4 md:m-8 h-[calc(100vh-2rem)] md:h-[calc(100vh-4rem)] flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 md:mb-12 shrink-0">
          <div className="w-12 h-12 border-2 border-foreground rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold">P</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 md:gap-8 text-sm font-medium uppercase tracking-wider">
            <Link href="/resume" className="hover:opacity-60 transition-opacity">About</Link>
            <a href="https://bento.me/pgarcia" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Works</a>
            <a href="mailto:hellopgarciadesign@org" className="hover:opacity-60 transition-opacity">Contact</a>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-card border-2 border-foreground rounded-2xl shadow-lg z-50 min-w-[200px]">
            <nav className="flex flex-col p-2">
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium uppercase tracking-wide"
              >
                About
              </Link>
              <a
                href="https://bento.me/pgarcia"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium uppercase tracking-wide"
              >
                Works
              </a>
              <a
                href="mailto:hellopgarciadesign@org"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium uppercase tracking-wide"
              >
                Contact
              </a>
              {mounted && (
                <>
                  <div className="border-t border-border my-2"></div>
                  <button
                    onClick={() => {
                      setTheme(theme === "dark" ? "light" : "dark");
                      setMobileMenuOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium uppercase tracking-wide flex items-center justify-between"
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
        <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12 overflow-hidden min-h-0">
          {/* Left Side - Text */}
          <div className="w-full lg:flex-1 space-y-4 md:space-y-6 overflow-y-auto pr-0 lg:pr-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-4 lg:mb-6">
                Hi I'm Pablo García
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed">
                That guy who{" "}
                <span className="typewriter-text">
                  {displayedText}
                  <span className="typewriter-cursor">|</span>
                </span>
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-auto shrink-0 flex items-center justify-center">
            <div className="m-3 md:m-6 w-full max-w-[560px]">
              <div className="relative w-full h-0 pb-[100%] rounded-[40px] overflow-hidden">
                <Image
                  src="/img-final.png"
                  alt="Pablo García"
                  fill
                  className="object-cover object-center absolute inset-0"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center items-center pt-6 md:pt-8 border-t border-border mt-auto shrink-0">
          <div className="flex gap-4 md:gap-6 text-sm">
            <a href="https://www.linkedin.com/in/pablo-garcia-pedro/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">
              Linkedin
            </a>
            <span className="text-muted-foreground">/</span>
            <a href="https://bsky.app/profile/sinanimodlucro.bsky.social" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">
              Bluesky
            </a>
            <span className="text-muted-foreground">/</span>
            <a href="https://github.com/Pablogarcia91" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">
              Github
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
