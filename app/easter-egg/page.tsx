'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { FlipText } from '@/components/flip-text';
import confetti from 'canvas-confetti';

const officeQuotes = [
  { quote: "That's what she said.", character: "Michael Scott" },
  { quote: "I'm not superstitious, but I am a little stitious.", character: "Michael Scott" },
  { quote: "I am Beyoncé, always.", character: "Michael Scott" },
  { quote: "I DECLARE BANKRUPTCY!", character: "Michael Scott" },
  { quote: "Bears. Beets. Battlestar Galactica.", character: "Jim Halpert" },
  { quote: "I'm an early bird and a night owl. So I'm wise and I have worms.", character: "Michael Scott" },
  { quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.", character: "Michael Scott" },
  { quote: "I talk a lot, so I've learned to tune myself out.", character: "Kelly Kapoor" },
  { quote: "I wish there was a way to know you're in the good old days before you've actually left them.", character: "Andy Bernard" },
  { quote: "The worst thing about prison was the dementors.", character: "Michael Scott" },
  { quote: "If I don't have some cake soon, I might die.", character: "Stanley Hudson" },
  { quote: "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing.", character: "Dwight Schrute" },
  { quote: "I stopped caring a long time ago.", character: "Creed Bratton" },
  { quote: "I feel like all my kids grew up and then they married each other. It's every parent's dream.", character: "Michael Scott" },
  { quote: "Why are you the way that you are?", character: "Michael Scott" },
  { quote: "Fool me once, strike one, but fool me twice... strike three.", character: "Michael Scott" },
  { quote: "You miss 100% of the shots you don't take. — Wayne Gretzky", character: "Michael Scott" },
  { quote: "I am running away from my responsibilities. And it feels good.", character: "Michael Scott" },
  { quote: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.", character: "Michael Scott" },
  { quote: "Identity theft is not a joke, Jim! Millions of families suffer every year!", character: "Dwight Schrute" },
  { quote: "Dwight, you ignorant slut!", character: "Michael Scott" },
];

export default function EasterEgg() {
  const [current, setCurrent] = useState<{ quote: string; character: string } | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const fireConfetti = useCallback(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#111', '#fafafa', '#888', '#ccc', '#444'],
    });
  }, []);

  const generateQuote = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      const random = officeQuotes[Math.floor(Math.random() * officeQuotes.length)];
      setCurrent(random);
      setIsAnimating(false);
      fireConfetti();
    }, 300);
  }, [fireConfetti]);

  useEffect(() => {
    generateQuote();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-(--v3-bg)/90 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-sm font-medium hover:opacity-50 transition-opacity">
            pgarciadesign
          </Link>
          <Link
            href="/"
            className="text-[13px] opacity-50 hover:opacity-100 transition-opacity"
          >
            Back to home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 md:px-8 flex-1 flex items-center justify-center">
        <div className="text-center w-full py-20">
          <h1 className="text-xl font-medium mb-1"><FlipText>The Office Quotes</FlipText></h1>
          <p className="text-[13px] text-(--v3-fg)/35 mb-16">That&apos;s what she said... generator</p>

          <div className="min-h-[120px] flex items-center justify-center mb-12">
            {current ? (
              <div
                className="transition-all duration-300"
                style={{
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ? 'translateY(8px)' : 'translateY(0)',
                }}
              >
                <p className="text-lg font-medium leading-relaxed mb-3">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-(--v3-fg)/30">
                  &mdash; {current.character}
                </p>
              </div>
            ) : null}
          </div>

          <button
            onClick={generateQuote}
            className="text-[13px] px-6 py-2.5 border border-(--v3-fg)/15 rounded-full hover:bg-(--v3-fg) hover:text-(--v3-bg) transition-all"
          >
            Generate quote
          </button>
        </div>
      </div>
    </main>
  );
}
