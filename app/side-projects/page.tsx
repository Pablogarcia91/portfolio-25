"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import Navigation from "@/components/Navigation";

const projects = [
  {
    id: 1,
    title: "BSV Flamingos",
    description: "I thought it would be a good idea to have a way to collect game statistics, so I generated a site for the whole team to have access.",
    image: "🏀",
    demoUrl: "https://bsv-flamingos.vercel.app/",
  },
  {
    id: 2,
    title: "Financial Dictionary",
    description: "To learn and familiarize myself with financial terminologies, I built a dictionary with their Spanish translation and a usage example to provide more context.",
    image: "💰",
    demoUrl: "https://finance-dictionary.vercel.app/",
  },
  {
    id: 3,
    title: "Narrative Post-it",
    description: "A fun and engaging way to share your profile in a very direct and different manner.",
    image: "📝",
    demoUrl: "https://narrative-postit.vercel.app/",
  },
];

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-background overflow-auto">
      <div className="rounded-container glass-container m-4 md:m-8 my-8 relative z-10">
        <Navigation />

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">Side Projects</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 md:mb-20 font-normal">some experimental work</p>

          {/* Projects List */}
          <div className="space-y-6 mb-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group rounded-lg border border-border bg-white dark:bg-neutral-900 hover:bg-muted/50 transition-all duration-300 p-6"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Image */}
                  <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-4xl md:text-5xl">
                    {project.image}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Button */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-on-hover px-6 py-3 text-sm font-medium whitespace-nowrap self-start md:self-center"
                  >
                    Check it
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
