"use client"

import { PortfolioProvider } from "@/context/portfolio-context"
import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResumePreview } from "@/components/resume-preview"
import { ContactSection } from "@/components/contact-section"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { usePortfolio } from "@/context/portfolio-context"

function Portfolio() {
  const { data } = usePortfolio()
  const { personal } = data

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />

      <main className="container px-4 py-12">
        {/* Hero Section */}
        <section className="mb-20 flex flex-col items-center justify-center py-12 text-center md:py-24">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>
          <p className="mb-6 max-w-2xl text-xl text-foreground/80">{personal.bio}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#contact">
                <Mail className="h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#projects">
                <Github className="h-5 w-5" />
                View Projects
              </a>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Resume Section */}
        <section id="resume" className="mb-20 scroll-mt-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-semibold">Professional Summary</h3>
              <p className="mb-4 text-foreground/80">
                {personal.title} with{" "}
                {data.experience.length > 0
                  ? `${data.experience.length}+ years of experience building responsive and performant web applications.`
                  : "experience building responsive and performant web applications."}
                Proficient in modern JavaScript frameworks and libraries with a strong focus on user experience and
                accessibility.
              </p>

              <h4 className="mb-2 text-xl font-medium">Experience</h4>
              <ul className="mb-4 space-y-2">
                {data.experience.map((exp, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-medium">{exp.title}</span>
                    <span className="text-sm text-foreground/70">
                      {exp.company} | {exp.period}
                    </span>
                  </li>
                ))}
              </ul>

              <h4 className="mb-2 text-xl font-medium">Education</h4>
              <ul className="space-y-2">
                {data.education.map((edu, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-medium">{edu.degree}</span>
                    <span className="text-sm text-foreground/70">
                      {edu.institution} | {edu.period} 
                    </span>
                    {edu.grade && <span className="text-sm text-foreground/70">Grade: {edu.grade}</span>}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ResumePreview />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <footer className="border-t border-border/40 bg-background/80 py-6">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-foreground/70">
                © {new Date().getFullYear()} {personal.name}. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              {data.social.map((item, index) => {
                const Icon =
                  item.platform.toLowerCase() === "github"
                    ? Github
                    : item.platform.toLowerCase() === "linkedin"
                      ? Linkedin
                      : Mail

                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 transition-colors hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{item.platform}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Page() {
  return (
    <PortfolioProvider>
      <Portfolio />
    </PortfolioProvider>
  )
}

