"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export function ProcessStep({
  number,
  title,
  description,
  delay = 0,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="grid grid-cols-1 md:grid-cols-[60px_130px_1fr] gap-3 md:gap-6 py-7 border-t border-border-dark items-baseline"
    >
      <span className="font-display text-[2rem] font-light text-amber leading-none tracking-tight">
        {number}
      </span>
      <h3 className="font-display font-bold text-base text-cream uppercase tracking-wide">
        {title}
      </h3>
      <p className="font-display font-normal text-[0.9rem] text-steel leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
