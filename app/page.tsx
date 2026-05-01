'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FlipText } from '@/components/flip-text';
import { ThemeToggle } from '@/components/theme-toggle';

const projects = [
  {
    title: 'Financial Dashboard',
    description: 'Crafted the digital infrastructure for an alternative investment platform, unifying General Partners and Limited Partners under a seamless operational ecosystem',
    slug: 'Investments-dashboard',
    image: '/selected-work/Vega.png',
  },
  {
    title: 'Energy storage',
    description: 'Engineered the battery management interface for an electric facility, optimizing energy storage operations and maximizing plant efficiency',
    slug: 'energy-platform',
    image: '/selected-work/Elmeunebot.png',
  },
  {
    title: 'Creditas Auto',
    description: 'Designed the user experience for a second-hand car marketplace, streamlining the buying and selling process with speed and simplicity',
    slug: 'cars-marketplace',
    image: '/selected-work/Creditas.png',
  },
  {
    title: 'Lucera Energía',
    description: 'Designed the home energy dashboard for a consumption platform, empowering users to monitor, save, and optimize their household energy usage.',
    slug: 'core-platform',
    image: '/selected-work/Lucera.png',
  },
];

const experience = [
  { period: '2024 — Current', role: 'Senior Product Designer', place: 'Vega Investments' },
  { period: '2024 — Current', role: 'Associate Professor', place: 'IEM Business School' },
  { period: '2023 — 2024', role: 'Product Designer', place: 'elmeunebot' },
];

const rotatingTexts = [
  { article: 'a', text: 'statistics lover 📊' },
  { article: 'a', text: 'old hooper 🏀' },
  { article: 'the', text: 'owner of Turk 🐕' },
  { article: 'a', text: 'bad cooker 🔪' },
  { article: 'a', text: 'cool professor 🏫' },
  { article: 'a', text: 'good Joker 🤡' },
];

const sideProjects = [
  {
    title: 'Beat Weaver',
    description: 'Cool keyboard to play around and make your own beats.',
    url: 'https://beaver-keyboard.vercel.app/',
    image: '/side-projects/keyboard-beaver.png',
  },
  {
    title: 'Financial Dictionary',
    description: 'Learn and become familiar with financial terminologies.',
    url: 'https://finance-dictionary.vercel.app/',
    image: '/side-projects/financial-dictionary.png',
  },
  {
    title: 'BSV Flamingos',
    description: 'Collect game statistics of my team and be open for all.',
    url: 'https://bsv-flamingos.vercel.app/',
    image: '/side-projects/flamingos.png',
  },
  {
    title: 'Learning Terminal',
    description: 'Learn to use the terminal from scratch through interactive lessons.',
    url: 'https://terminal-edu.com/',
    image: '/side-projects/learning-terminal.png',
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-(--v3-bg)/90 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-sm font-medium hover:opacity-50 transition-opacity focus-visible:opacity-100 focus-visible:outline-none">
            pgarciadesign
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/easter-egg"
              className="opacity-50 hover:opacity-100 transition-opacity focus-visible:opacity-100 focus-visible:outline-none"
              aria-label="Easter egg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-2xl mx-auto px-6 md:px-8 pt-24 sm:pt-28">
        <section className="mb-14 sm:mb-24">
          <p className="text-[13px] text-(--v3-fg)/35 mb-1">Hello, I&apos;m</p>
          <h1 className="text-3xl font-medium mb-2 text-wrap-balance">
            Pablo García
          </h1>
          <p className="text-[13px] sm:text-[15px] leading-relaxed text-(--v3-fg)/60">
            Fun guy, Senior Product Designer with +7 years experience and {rotatingTexts[currentIndex].article}{' '}
            <span
              className="inline-block text-(--v3-fg)/40"
              style={{
                opacity: isVisible ? 1 : 0,
                filter: isVisible ? 'blur(0)' : 'blur(4px)',
                transform: isVisible ? 'translateY(0)' : 'translateY(-4px)',
                transition: 'opacity 250ms ease, filter 250ms ease, transform 250ms ease',
              }}
            >
              {rotatingTexts[currentIndex].text}
            </span>
          </p>
        </section>
      </div>

      {/* Selected Work — Full-width centered carousel */}
      <section id="work" className="mb-14 sm:mb-24">
        <div className="max-w-2xl mx-auto px-6 md:px-8 mb-6 sm:mb-8">
          <h2 className="text-sm uppercase tracking-[0.15em] text-(--v3-fg)/35">
            <FlipText>Selected Work</FlipText>
          </h2>
        </div>
        <div className="overflow-x-auto scrollbar-hide carousel-centered snap-x">
          <div className="flex gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="w-[280px] sm:w-[420px] shrink-0 snap-start rounded-xl bg-(--v3-elevated) p-2.5 pb-3.5 sm:p-3 sm:pb-4"
              >
                <div className="aspect-video rounded-lg mb-3 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={420}
                    height={236}
                    sizes="(max-width: 640px) 280px, 420px"
                    className="w-full h-full object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="px-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-sm font-medium">{project.title}</h3>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-(--v3-fg)/35 border border-(--v3-fg)/15 rounded-full px-2.5 py-0.5 shrink-0">
                      Soon
                    </span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-(--v3-fg)/45">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of content */}
      <div className="max-w-2xl mx-auto px-6 md:px-8 pb-20">
        {/* Experience */}
        <section id="about" className="mb-14 sm:mb-24">
          <h2 className="text-sm uppercase tracking-[0.15em] text-(--v3-fg)/35 mb-6 sm:mb-8">
            <FlipText>Experience</FlipText>
          </h2>

          <div className="space-y-6">
            {experience.map((job, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:gap-6">
                <span className="text-[13px] text-(--v3-fg)/30 sm:w-28 sm:shrink-0 mb-0.5 sm:mb-0">
                  {job.period}
                </span>
                <div>
                  <p className="text-sm font-medium">{job.role}</p>
                  <p className="text-[13px] text-(--v3-fg)/45">{job.place}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-block mt-8 text-[13px] text-(--v3-fg)/40 hover:text-(--v3-fg) transition-colors focus-visible:text-(--v3-fg) focus-visible:outline-none"
          >
            See more &rarr;
          </Link>
        </section>

        {/* Side Projects */}
        <section className="mb-14 sm:mb-24">
          <h2 className="text-sm uppercase tracking-[0.15em] text-(--v3-fg)/35 mb-6 sm:mb-8">
            <FlipText>Side Projects</FlipText>
          </h2>

          <div className="space-y-2">
            {sideProjects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 -mx-3 rounded-lg hover:bg-(--v3-elevated) transition-colors focus-visible:bg-(--v3-elevated) focus-visible:outline-none"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-md shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={80}
                    height={80}
                    sizes="(max-width: 640px) 56px, 80px"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium group-hover:opacity-60 transition-opacity">{project.title}</p>
                  <p className="text-[13px] text-(--v3-fg)/45 sm:truncate">{project.description}</p>
                </div>
                <svg className="w-4 h-4 text-(--v3-fg)/30 group-hover:text-(--v3-fg) transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.15em] text-(--v3-fg)/35 mb-6">
            <FlipText>Get in touch</FlipText>
          </h2>

          <div className="space-y-2 text-sm">
            <a
              href="mailto:hellopgarciadesign@gmail.com"
              className="block text-(--v3-fg)/60 hover:text-(--v3-fg) transition-colors focus-visible:text-(--v3-fg) focus-visible:outline-none"
            >
              hellopgarciadesign@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/pablo-garcia-pedro/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-(--v3-fg)/60 hover:text-(--v3-fg) transition-colors focus-visible:text-(--v3-fg) focus-visible:outline-none"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-(--v3-fg)/8">
          <p className="text-[11px] text-(--v3-fg)/25">
            &copy; {new Date().getFullYear()} Pablo García
          </p>
        </footer>
      </div>
    </main>
  );
}
