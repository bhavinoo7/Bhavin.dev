"use client"

import { usePortfolio } from "@/context/portfolio-context"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function SkillsSection() {
  const { data } = usePortfolio()

  return (
    <section id="skills" className="mb-20 scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl font-bold">
        <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Skills</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {data.skills.map((skillCategory, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-primary/10 bg-background transition-all hover:border-primary/30 hover:shadow-lg dark:bg-background/5">
              <CardContent className="p-6">
                <h3 className="mb-4 text-center text-xl font-semibold text-primary">{skillCategory.category}</h3>

                <div className="flex flex-wrap justify-center gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

