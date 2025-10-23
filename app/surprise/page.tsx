"use client";

import Link from "next/link";
import { ArrowLeft, Moon, Sun, Menu, X, RefreshCw } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const officeQuotes = [
  {
    quote: "I'm not superstitious, but I am a little stitious.",
    character: "Michael Scott"
  },
  {
    quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    character: "Michael Scott"
  },
  {
    quote: "I am Beyoncé, always.",
    character: "Michael Scott"
  },
  {
    quote: "I DECLARE BANKRUPTCY!",
    character: "Michael Scott"
  },
  {
    quote: "That's what she said.",
    character: "Michael Scott"
  },
  {
    quote: "I talk a lot, so I've learned to tune myself out.",
    character: "Kelly Kapoor"
  },
  {
    quote: "I'm not usually the butt of the joke. I'm usually the face of the joke.",
    character: "Jim Halpert"
  },
  {
    quote: "Dwight, you ignorant slut!",
    character: "Michael Scott"
  },
  {
    quote: "I am running away from my responsibilities. And it feels good.",
    character: "Michael Scott"
  },
  {
    quote: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
    character: "Michael Scott"
  },
  {
    quote: "I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    character: "Michael Scott"
  },
  {
    quote: "Bears. Beets. Battlestar Galactica.",
    character: "Jim Halpert"
  },
  {
    quote: "Identity theft is not a joke, Jim! Millions of families suffer every year!",
    character: "Dwight Schrute"
  },
  {
    quote: "You miss 100% of the shots you don't take. - Wayne Gretzky",
    character: "Michael Scott"
  },
  {
    quote: "I am about to do something very bold in this job that I've never done before: try.",
    character: "Jim Halpert"
  },
  {
    quote: "Whenever I'm about to do something, I think 'Would an idiot do that?' And if they would, I do not do that thing.",
    character: "Dwight Schrute"
  },
  {
    quote: "I don't care what they say about me. I just want to eat.",
    character: "Pam Beesly"
  },
  {
    quote: "There's a lot of beauty in ordinary things. Isn't that kind of the point?",
    character: "Pam Beesly"
  },
  {
    quote: "I'm not offended by homosexuality. In the '60s, I made love to many, many women, often outdoors, in the mud and the rain... and it's possible a man slipped in. There'd be no way of knowing.",
    character: "Creed Bratton"
  },
  {
    quote: "If I can't scuba, then what's this all been about? What am I working toward?",
    character: "Creed Bratton"
  },
  {
    quote: "I stopped caring a long time ago.",
    character: "Stanley Hudson"
  },
  {
    quote: "Boy have you lost your mind? 'Cause I'll help you find it!",
    character: "Stanley Hudson"
  },
  {
    quote: "I am running away from my responsibilities. And it feels good.",
    character: "Michael Scott"
  },
  {
    quote: "I love inside jokes. I'd love to be a part of one someday.",
    character: "Michael Scott"
  },
  {
    quote: "Guess what, I have flaws. What are they? Oh, I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car.",
    character: "Michael Scott"
  },
  {
    quote: "The worst thing about prison was the Dementors.",
    character: "Prison Mike (Michael Scott)"
  },
  {
    quote: "I'm an early bird and I'm a night owl. So I'm wise and I have worms.",
    character: "Michael Scott"
  },
  {
    quote: "I feel like all my kids grew up, and then they married each other. It's every parent's dream.",
    character: "Michael Scott"
  },
  {
    quote: "I want people to be afraid of how much they love me.",
    character: "Michael Scott"
  },
  {
    quote: "It takes an advanced sense of humor. I don't expect everybody to understand.",
    character: "Michael Scott"
  }
];

export default function Surprise() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(officeQuotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set random quote on mount
    const randomIndex = Math.floor(Math.random() * officeQuotes.length);
    setCurrentQuote(officeQuotes[randomIndex]);

    // Trigger confetti on page load
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const generateRandomQuote = () => {
    setIsAnimating(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * officeQuotes.length);
      setCurrentQuote(officeQuotes[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">Surprise!</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 md:mb-20 font-normal">
            Random quotes from The Office
          </p>

          {/* Quote Card */}
          <div className={`border border-border rounded-3xl p-8 md:p-12 bg-card mb-8 transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="mb-8">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-primary opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <blockquote className="text-lg md:text-xl lg:text-2xl font-normal italic leading-relaxed mb-8 text-foreground">
              {currentQuote.quote}
            </blockquote>

            <div className="flex items-center justify-between">
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                — {currentQuote.character}
              </p>
            </div>
          </div>

          {/* Generate Button */}
          <div className="flex justify-center">
            <button
              onClick={generateRandomQuote}
              disabled={isAnimating}
              className="link-animated text-primary underline decoration-1 underline-offset-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium"
            >
              More surprises
            </button>
          </div>

          {/* Fun fact */}
          <div className="mt-16 md:mt-20 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              That's what she said... probably 🤷‍♂️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
