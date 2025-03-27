"use client"

import { useState, useEffect } from "react"
import { usePortfolio } from "@/context/portfolio-context"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const { data } = usePortfolio()
  const { personal } = data

  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-10 border-b border-border/40 bg-background/80 backdrop-blur-md transition-shadow ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <User className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">{personal.name}</span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="relative text-foreground/80 transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="default" className="hidden md:inline-flex" asChild>
            <a href="#contact">Contact Me</a>
          </Button>

          <button className="inline-flex md:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border/40 bg-background/95 backdrop-blur-md md:hidden"
          >
            <nav className="container px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block py-2 text-foreground/80 transition-colors hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

