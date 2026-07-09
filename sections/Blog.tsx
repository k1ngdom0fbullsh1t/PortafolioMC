"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";

export function Blog() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="blog" className="py-24 sm:py-32 bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionTitle
            label="Blog"
            title="Artículos técnicos"
            description="Comparto lo que aprendo sobre arquitectura de software, performance y desarrollo moderno."
            isInView={isInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="h-3 w-px bg-border" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime} lectura
                  </span>
                </div>

                <h3 className="text-base font-semibold text-foreground group-hover:text-indigo-400 transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5 flex-1">
                  {post.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="accent">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-indigo-400 group-hover:gap-2.5 transition-all mt-auto">
                  Leer artículo
                  <ArrowRight size={12} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
