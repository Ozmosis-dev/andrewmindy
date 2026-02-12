"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  gradient: string;
  slug: string;
  featured?: boolean;
  delay?: number;
}

export function ProjectCard({
  title,
  category,
  metric,
  metricLabel,
  gradient,
  slug,
  featured = false,
  delay = 0,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link
        href={`/work/${slug}`}
        className={cn(
          "relative overflow-hidden block cursor-pointer transition-transform duration-400 ease-out",
          featured ? "aspect-[16/10]" : "aspect-[4/3]",
          hovered && "scale-[1.02]"
        )}
        style={{ background: gradient }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Decorative circles */}
        {featured && (
          <>
            <div className="absolute top-6 right-6 w-20 h-20 border border-white/10 rounded-full" />
            <div className="absolute top-10 right-10 w-15 h-15 border border-white/5 rounded-full" />
          </>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 to-transparent">
          <div className="flex justify-between items-end">
            <div>
              <span className="font-mono text-[0.55rem] text-amber tracking-widest uppercase block mb-2">
                {category}
              </span>
              <h3 className="font-display font-bold text-xl md:text-2xl text-cream uppercase tracking-tight leading-tight">
                {title}
              </h3>
            </div>
            <div className="text-right hidden sm:block">
              <span className="font-display font-[800] text-[2rem] md:text-[2.5rem] text-amber tracking-tight block leading-none">
                {metric}
              </span>
              <span className="font-mono text-[0.55rem] text-steel tracking-wider uppercase">
                {metricLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-amber/95 flex items-center justify-center transition-opacity duration-300",
            hovered ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="font-display font-bold text-sm text-cream tracking-widest uppercase">
            View Case Study &rarr;
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
