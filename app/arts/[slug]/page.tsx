"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Moon, Sun, Menu, X, ExternalLink, Calendar, Tag } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const projectsData: { [key: string]: any } = {
  "ecommerce-redesign": {
    title: "E-commerce Platform Redesign",
    category: "UI/UX Design",
    year: "2024",
    client: "RetailCo",
    duration: "4 months",
    role: "Lead Product Designer",
    description: "A complete redesign of a B2C e-commerce platform focusing on user experience and conversion optimization. The project involved extensive user research, prototyping, and A/B testing to improve the checkout flow and overall user satisfaction.",
    challenge: "The existing platform had a high cart abandonment rate (68%) and users were struggling with the checkout process. Mobile experience was particularly problematic with low conversion rates.",
    solution: "We redesigned the entire user journey with a mobile-first approach, simplified the checkout to 3 steps, implemented guest checkout, and added trust signals throughout the funnel.",
    results: [
      "42% reduction in cart abandonment",
      "35% increase in mobile conversions",
      "28% improvement in average order value",
      "92% positive user feedback score"
    ],
    tools: ["Figma", "Maze", "Hotjar", "Google Analytics"],
    externalLink: "https://www.behance.net/gallery/example1"
  },
  "banking-app": {
    title: "Banking App Interface",
    category: "Product Design",
    year: "2023",
    client: "FinTech Bank",
    duration: "6 months",
    role: "Senior Product Designer",
    description: "Mobile-first banking application with focus on accessibility and intuitive navigation for all age groups. The project aimed to modernize the digital banking experience while maintaining security and trust.",
    challenge: "The bank needed to appeal to younger users while not alienating their existing older customer base. Security concerns and regulatory compliance added complexity.",
    solution: "Created a flexible design system with adjustable text sizes, high contrast modes, and biometric authentication. Implemented progressive disclosure to simplify complex banking operations.",
    results: [
      "250k+ app downloads in first 3 months",
      "4.8/5 app store rating",
      "45% of transactions moved to mobile",
      "WCAG 2.1 AA compliant"
    ],
    tools: ["Figma", "Principle", "Lottie", "Zeplin"],
    externalLink: "https://www.behance.net/gallery/example2"
  },
  "saas-dashboard": {
    title: "SaaS Dashboard",
    category: "Web Design",
    year: "2023",
    client: "DataFlow Inc",
    duration: "3 months",
    role: "Product Designer",
    description: "Analytics dashboard for B2B SaaS product with complex data visualization and real-time updates. Focused on making complex data accessible and actionable for business users.",
    challenge: "Users were overwhelmed by the amount of data and struggled to extract actionable insights. The existing dashboard was slow and difficult to customize.",
    solution: "Implemented customizable widgets, smart filters, and AI-powered insights. Created data visualization best practices and a modular component library.",
    results: [
      "60% faster time to insights",
      "40% increase in daily active users",
      "85% of users utilize custom dashboards",
      "50% reduction in support tickets"
    ],
    tools: ["Figma", "D3.js", "Framer", "Storybook"],
    externalLink: "https://www.behance.net/gallery/example3"
  },
  "fitness-tracking": {
    title: "Fitness Tracking App",
    category: "Mobile Design",
    year: "2024",
    client: "FitLife",
    duration: "5 months",
    role: "Lead Designer",
    description: "Wellness application combining workout tracking, nutrition planning, and social features. Designed to motivate users through gamification and community support.",
    challenge: "High user drop-off after the first week. Users found it difficult to maintain motivation and track multiple aspects of their wellness journey.",
    solution: "Integrated social features, achievement system, and personalized AI coaching. Simplified data entry with smart suggestions and wearable device integration.",
    results: [
      "78% 30-day retention rate",
      "3.2M workouts logged",
      "500k+ active community members",
      "Featured in App Store"
    ],
    tools: ["Figma", "After Effects", "ProtoPie", "Mixpanel"],
    externalLink: "https://www.behance.net/gallery/example4"
  },
  "real-estate-platform": {
    title: "Real Estate Platform",
    category: "UI/UX Design",
    year: "2023",
    client: "PropTech Solutions",
    duration: "4 months",
    role: "UX/UI Designer",
    description: "Property search and management platform with advanced filtering and 3D virtual tours. Revolutionizing how people search and view properties online.",
    challenge: "Users spent too much time searching for properties and scheduling viewings. High bounce rate on property listings without enough visual information.",
    solution: "Implemented AI-powered search, 360° virtual tours, neighborhood analytics, and instant booking for viewings. Created a seamless mobile-to-desktop experience.",
    results: [
      "55% increase in property inquiries",
      "40% reduction in viewing cancellations",
      "2M+ virtual tours completed",
      "Industry innovation award 2023"
    ],
    tools: ["Figma", "Miro", "Unity", "InVision"],
    externalLink: "https://www.behance.net/gallery/example5"
  },
  "educational-portal": {
    title: "Educational Learning Portal",
    category: "Product Design",
    year: "2024",
    client: "EduTech Academy",
    duration: "6 months",
    role: "Senior Product Designer",
    description: "Interactive learning platform with gamification elements and progress tracking for students. Designed to make online learning engaging and effective for K-12 students.",
    challenge: "Students lacked engagement in online learning environments. Parents needed better visibility into their children's progress and teachers needed efficient tools for content management.",
    solution: "Created three distinct user experiences (student, parent, teacher) with gamification, real-time progress tracking, and collaborative learning spaces. Integrated accessibility features for diverse learning needs.",
    results: [
      "89% student engagement rate",
      "45% improvement in test scores",
      "100k+ students onboarded",
      "EdTech Excellence Award"
    ],
    tools: ["Figma", "Notion", "FigJam", "Amplitude"],
    externalLink: "https://www.behance.net/gallery/example6"
  }
};

export default function ProjectDetail() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const params = useParams();
  const slug = params.slug as string;

  const project = projectsData[slug];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

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
          <Link href="/arts" className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors">
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
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium">
                Home
              </Link>
              <Link href="/resume" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium">
                About
              </Link>
              <Link href="/arts" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium">
                Works
              </Link>
              <Link href="/surprise" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium">
                Surprise
              </Link>
              {mounted && (
                <>
                  <div className="border-t border-border my-2"></div>
                  <button onClick={() => { setTheme(theme === "dark" ? "light" : "dark"); setMobileMenuOpen(false); }} className="px-4 py-3 hover:bg-muted rounded-lg transition-colors text-sm font-medium flex items-center justify-between">
                    <span>Theme</span>
                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                </>
              )}
            </nav>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Project Header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="font-medium">{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{project.title}</h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 mb-12 md:mb-16 border border-border flex items-center justify-center">
            <span className="text-9xl opacity-20">🎨</span>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Client</h3>
              <p className="font-semibold">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Duration</h3>
              <p className="font-semibold">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Year</h3>
              <p className="font-semibold">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Role</h3>
              <p className="font-semibold">{project.role}</p>
            </div>
          </div>

          {/* Challenge Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>

          {/* Solution Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>

          {/* Results Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((result: string, index: number) => (
                <div key={index} className="border-l-4 border-primary pl-6 py-3">
                  <p className="font-medium text-lg">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool: string, index: number) => (
                <span key={index} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* External Link */}
          <div className="pt-12 md:pt-16 border-t border-border text-center">
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-animated inline-flex items-center gap-2 text-xl text-primary underline decoration-1 underline-offset-4 transition-all font-medium"
            >
              View full case study on Behance
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
