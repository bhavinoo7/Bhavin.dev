"use client"

import { useState } from "react"
import { usePortfolio } from "@/context/portfolio-context"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown, ChevronUp, Eye } from "lucide-react"
import { motion } from "framer-motion"

export function ProjectsSection() {
  const { data } = usePortfolio()
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<string, boolean>>({})
  const [openProjectId, setOpenProjectId] = useState<string | null>(null)

  const toggleDescription = (projectId: string) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }))
  }

  const openProjectPopup = (projectId: string) => {
    setOpenProjectId(projectId)
  }

  const closeProjectPopup = () => {
    setOpenProjectId(null)
  }

  return (
    <section id="projects" className="mb-20 scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl font-bold">
        <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Projects</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((project, index) => {
          const isExpanded = expandedDescriptions[project.id] || false
          const isOpen = openProjectId === project.id

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full overflow-hidden border-2 border-primary/10 bg-background transition-all duration-300 hover:border-primary/30 hover:shadow-lg dark:bg-background/5">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>

                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <div className="mb-2">
                    <p className={`text-sm text-foreground/70 ${isExpanded ? "" : "line-clamp-2"}`}>
                      {project.description}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-1 h-6 px-2 text-xs text-primary"
                      onClick={() => toggleDescription(project.id)}
                    >
                      {isExpanded ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp className="ml-1 h-3 w-3" />
                        </>
                      ) : (
                        <>
                          <span>Read More</span>
                          <ChevronDown className="ml-1 h-3 w-3" />
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-primary/5 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between gap-2 border-t border-border/40 p-6 pt-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>

                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => openProjectPopup(project.id)}
                  >
                    <Eye className="h-4 w-4" />
                    <span>Details</span>
                  </Button>

                  {project.demoUrl && (
                    <Button variant="default" size="sm" className="flex items-center gap-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  )}
                </CardFooter>

                <Dialog open={isOpen} onOpenChange={(open) => !open && closeProjectPopup()}>
                  <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                      <DialogDescription className="text-foreground/70">{project.description}</DialogDescription>
                    </DialogHeader>

                    <div className="mt-4">
                      <div className="mb-6 overflow-hidden rounded-lg">
                        <img
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={project.title}
                          className="h-auto w-full object-cover"
                        />
                      </div>

                      <div className="mb-4">
                        <h4 className="mb-2 text-lg font-semibold">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="bg-primary/5">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="mb-2 text-lg font-semibold">Key Features</h4>
                        <ul className="list-inside list-disc space-y-1 text-foreground/70">
                          {project.description
                            .split(/[.!?]\s+/)
                            .filter((sentence) => sentence.trim().length > 0)
                            .map((sentence, index) => (
                              <li key={index}>
                                {sentence.trim()}
                                {!sentence.endsWith(".") && "."}
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex gap-4">
                        <Button variant="outline" className="flex items-center gap-2" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            <span>View Code</span>
                          </a>
                        </Button>

                        {project.demoUrl && (
                          <Button variant="default" className="flex items-center gap-2" asChild>
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              <span>Live Demo</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

