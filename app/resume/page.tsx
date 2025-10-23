"use client";

import Link from "next/link";
import { ArrowLeft, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

const experiences = [
  {
    title: "Product Designer",
    company: "VEGA Investments, València - London",
    period: "2024 (nov) - current",
    tasks: [
      "Working on the vertical of Onboarding and subscription",
      "User flows",
      "User Journeys",
      "VEGA Design System",
      "Prototyping"
    ]
  },
  {
    title: "Associate Professor",
    company: "IEM Business School, València",
    period: "2024 - current",
    tasks: [
      "In charge of teaching the class on Fundamentals of Interface Design II",
      "Components with interactive variants",
      "Guides and guidelines to improve UI",
      "Usability and hierarchy of interface content",
      "Prototyping"
    ]
  },
  {
    title: "Product Designer",
    company: "El meu nebot, València",
    period: "2023/2024",
    tasks: [
      "Product Strategy",
      "Connexion with different stakeholders and clients",
      "Design navigation flows and interactions"
    ]
  },
  {
    title: "Senior Product Designer",
    company: "Clidrive, València - Madrid",
    period: "2023 (jul-nov)",
    tasks: [
      "Product Strategy",
      "Continuous discovery with the Product and Engineering teams",
      "Business vision",
      "Design navigation flows and interactions",
      "Visual Design of the product and Prototyping"
    ]
  },
  {
    title: "Product Designer",
    company: "Creditas, València - São Paulo",
    period: "2021/2023",
    tasks: [
      "Research",
      "Continuous discovery with the Product and Engineering teams",
      "Design navigation flows and interactions",
      "Visual Design of the product and Prototyping",
      "Testing and validation with users",
      "Follow results and metrics"
    ]
  },
  {
    title: "Product Designer",
    company: "Lucera Energía, València",
    period: "2019/2021",
    tasks: [
      "Design and creation of online pieces",
      "Landing and Web designs",
      "Design system Neon DS",
      "Lucera App",
      "App support [Energy GO] and [Más Móvil energía]"
    ]
  },
  {
    title: "Display Designer",
    company: "SCPF, Madrid",
    period: "2018/2019",
    tasks: [
      "Design of digital pieces, creation, and layout of newsletters for BMW, Danone, and Selenta Group",
      "Creation of dynamic banners with CSS"
    ]
  },
  {
    title: "Visual and Web Designer",
    company: "Flashback Group, Madrid",
    period: "2017/2018",
    tasks: [
      "Graphic design on-offline",
      "Creation of advertising pieces and online campaigns",
      "Design, layout, and construction of web pages with HTML 5, CSS 3, Wordpress, and PHP",
      "Branding and web support"
    ]
  },
  {
    title: "Visual Designer",
    company: "Epigram Tech, València",
    period: "2017",
    tasks: [
      "Interface design for app",
      "Mercado de colón",
      "Goldcar",
      "Design, layout, and construction of web pages with HTML 5, CSS 3, Wordpress, and PHP"
    ]
  },
  {
    title: "Web Designer",
    company: "Cuatroochenta, Castelló de la Plana",
    period: "2015/2017",
    tasks: [
      "Design of graphic pieces for Google Adwords, social media, and web components",
      "Design, layout, and construction of web pages with HTML 5, CSS 3, Wordpress, and PHP"
    ]
  },
  {
    title: "Graphic Designer",
    company: "Halcón Cerámicas, Castelló de la Plana",
    period: "2014",
    tasks: [
      "Creation and design of catalogs, brochures, and other offline advertising formats",
      "File management, inventory, and organizational structures"
    ]
  }
];

export default function Resume() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("resume");
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeTab !== "resume") return;

    setVisibleItems(new Set());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeTab]);

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">About</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 md:mb-20 font-normal">my experience</p>

          {/* Tabs */}
          <div className="overflow-x-auto -mx-4 md:mx-0 mb-12 md:mb-16">
            <div className="flex gap-2 border-b border-border min-w-max px-4 md:px-0">
              <button
                onClick={() => setActiveTab("resume")}
                className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                  activeTab === "resume"
                    ? "border-b-2 border-primary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Resume
              </button>
              <button
                onClick={() => setActiveTab("studies")}
                className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                  activeTab === "studies"
                    ? "border-b-2 border-primary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Studies
              </button>
              <button
                onClick={() => setActiveTab("languages")}
                className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                  activeTab === "languages"
                    ? "border-b-2 border-primary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Languages
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "resume" && (
            <section className="mb-16">
              <div className="space-y-12 md:space-y-16">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    ref={(el) => { itemRefs.current[index] = el; }}
                    className={`transition-all duration-700 ${
                      visibleItems.has(index)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-muted-foreground mb-4 font-medium">{exp.company} | {exp.period}</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground ml-2 leading-relaxed">
                      {exp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="font-normal">{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "studies" && (
            <section className="mb-16">
              <div className="space-y-10 md:space-y-12">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Master's Degree in Interaction Design and User Experience (UX)</h3>
                  <p className="text-muted-foreground font-medium">UOC - Open University of Catalonia</p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Bachelor's Degree in Industrial Design and Product Development</h3>
                  <p className="text-muted-foreground font-medium">Universitat Jaume I - Castelló de la Plana</p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Scientific Baccalaureate</h3>
                  <p className="text-muted-foreground font-medium">I.E.S Vall d'Alba - Castelló de la Plana</p>
                </div>
              </div>
            </section>
          )}

          {activeTab === "languages" && (
            <section className="mb-16">
              <div className="space-y-10 md:space-y-12">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">🇪🇸 Español</h3>
                  <p className="text-muted-foreground font-medium">Nivel nativo</p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">🍊 Valencià / Català</h3>
                  <p className="text-muted-foreground font-medium">Nivell natiu</p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">🇬🇧 English</h3>
                  <p className="text-muted-foreground font-medium">Upper Intermediate Level (B2)</p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">🇵🇹 Português</h3>
                  <p className="text-muted-foreground font-medium">Nível médio</p>
                </div>
              </div>
            </section>
          )}

          {/* Contact */}
          <section className="pt-12 md:pt-16 border-t border-border">
            <p className="text-lg md:text-xl font-medium mb-4 md:mb-6">Feel free to get in touch</p>
            <a
              href="mailto:hellopgarciadesign@gmail.com"
              className="link-animated text-xl md:text-2xl text-primary underline decoration-1 underline-offset-4 transition-all"
            >
              hellopgarciadesign@gmail.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
