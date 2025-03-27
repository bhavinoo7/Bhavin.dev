"use client"

import type React from "react"
import axios from "axios"
import { useState } from "react"
import { usePortfolio } from "@/context/portfolio-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Axis3DIcon, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const { data } = usePortfolio()
  const { personal, social } = data

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    console.log(formData);
    const response=await axios.post("/api/message",formData);
    if(response.data.success){

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000)
    }, 1500)
  }
  }

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className="h-5 w-5" />
      case "linkedin":
        return <Linkedin className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <section id="contact" className="mb-20 scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl font-bold">
        <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Get In Touch</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border-2 border-primary/10 bg-background shadow-lg dark:bg-background/5">
            <CardContent className="p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-border bg-background px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-border bg-background px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-border bg-background px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-border bg-background px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitSuccess && (
                  <div className="mt-2 rounded-md bg-green-100 p-2 text-center text-sm text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Message sent successfully!
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          <div>
            <h3 className="mb-2 text-xl font-semibold">Contact Information</h3>
            <p className="text-foreground/80">
              Feel free to reach out through the form or via the contact details below.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <a href={`mailto:${personal.email}`} className="text-foreground/80 transition-colors hover:text-primary">
                {personal.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <a href={`tel:${personal.phone}`} className="text-foreground/80 transition-colors hover:text-primary">
                {personal.phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-foreground/80">{personal.location}</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Connect With Me</h3>
            <div className="flex gap-4">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  {getSocialIcon(item.platform)}
                  <span className="sr-only">{item.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

