"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#"
            className="text-sm font-semibold text-foreground tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="gradient-text font-bold">Marcelo Corro</span>
            <span className="text-muted-foreground ml-2 hidden sm:inline">/ dev</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
                whileHover={{ y: -1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              className="md:hidden h-9 w-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
