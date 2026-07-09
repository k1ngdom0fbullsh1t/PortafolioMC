"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<typeof motion.button> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-50 cursor-pointer";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20",
    outline:
      "border border-border bg-transparent text-foreground hover:bg-muted hover:border-indigo-500/50",
    ghost: "text-muted-foreground hover:text-foreground hover:bg-muted",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
