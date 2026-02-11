"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MetricCardProps {
  value: string;
  label: string;
  dark?: boolean;
  delay?: number;
}

export function MetricCard({
  value,
  label,
  dark = false,
  delay = 0,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(
        "flex items-baseline gap-4 px-6 py-4 backdrop-blur-sm",
        dark ? "bg-charcoal" : "bg-white/85"
      )}
    >
      <span
        className={cn(
          "font-display font-bold text-[1.75rem] tracking-tight",
          dark ? "text-amber" : "text-charcoal"
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "font-mono text-[0.6rem] uppercase tracking-wider",
          dark ? "text-steel" : "text-ash"
        )}
      >
        {label}
      </span>
    </motion.div>
  );
}
