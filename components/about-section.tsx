"use client"

import { usePortfolio } from "@/context/portfolio-context"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function AboutSection() {
  const { data } = usePortfolio()
  const { about, personal } = data

  return (
    <section id="about" className="mb-20 scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl font-bold">
        <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">{about.title}</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl md:h-80 md:w-80">
            <img src={about.imageUrl || personal.avatar} alt={personal.name} className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <Card className="overflow-hidden border-2 border-primary/10 bg-background shadow-lg dark:bg-background/5">
            <CardContent className="p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                {data.skills
                  .flatMap((category) => category.items.slice(0, 2))
                  .slice(0, 6)
                  .map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary dark:bg-primary/20">
                      {skill}
                    </Badge>
                  ))}
                <Badge variant="outline" className="border-primary/30 text-primary">
                  +{data.skills.flatMap((category) => category.items).length - 6} more
                </Badge>
              </div>

              {about.description.map((paragraph, index) => (
                <p key={index} className="mb-4 text-foreground/80 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

