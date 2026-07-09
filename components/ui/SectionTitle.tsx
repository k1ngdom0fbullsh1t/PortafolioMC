"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  isInView: boolean;
}

export function SectionTitle({
  label,
  title,
  description,
  className,
  align = "center",
  isInView,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-16", align === "center" && "text-center", className)}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-indigo-400 mb-4"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
