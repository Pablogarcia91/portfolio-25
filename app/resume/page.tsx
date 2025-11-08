"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";

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
  const [activeTab, setActiveTab] = useState("resume");

  return (
    <div className="min-h-screen bg-background overflow-auto">
      <div className="rounded-container glass-container m-4 md:m-8 my-8 relative z-10">
        <Navigation />

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
              <div className="space-y-10 md:space-y-12">
                {experiences.map((exp, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="border-l-2 border-primary pl-6 py-2">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                        <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground font-medium">{exp.period}</p>
                      </div>
                      <p className="text-muted-foreground mb-4 font-medium">{exp.company}</p>
                      <ul className="list-disc list-inside space-y-2 text-foreground leading-relaxed">
                        {exp.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="font-normal">{task}</li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          )}

          {activeTab === "studies" && (
            <section className="mb-16">
              <div className="space-y-10 md:space-y-12">
                <ScrollReveal delay={0}>
                  <div className="border-l-2 border-primary pl-6 py-2">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">Master's Degree in Interaction Design and User Experience (UX)</h3>
                    <p className="text-muted-foreground font-medium">UOC - Open University of Catalonia</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <div className="border-l-2 border-primary pl-6 py-2">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">Bachelor's Degree in Industrial Design and Product Development</h3>
                    <p className="text-muted-foreground font-medium">Universitat Jaume I - Castelló de la Plana</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="border-l-2 border-primary pl-6 py-2">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">Scientific Baccalaureate</h3>
                    <p className="text-muted-foreground font-medium">I.E.S Vall d'Alba - Castelló de la Plana</p>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          )}

          {activeTab === "languages" && (
            <section className="mb-16">
              <div className="space-y-10 md:space-y-12">
                <ScrollReveal delay={0}>
                  <div className="border-l-2 border-primary pl-6 py-2">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">🇪🇸 Español</h3>
                    <p className="text-muted-foreground font-medium">Nivel nativo</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <div className="border-l-2 border-primary pl-6 py-2">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">🍊 Valencià / Català</h3>
                    <p className="text-muted-foreground font-medium">Nivell natiu</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="border-l-2 border-primary pl-6 py-2">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">🇬🇧 English</h3>
                    <p className="text-muted-foreground font-medium">Upper Intermediate Level (B2)</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="border-l-2 border-primary pl-6 py-2">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">🇵🇹 Português</h3>
                    <p className="text-muted-foreground font-medium">Nível médio</p>
                  </div>
                </ScrollReveal>
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
