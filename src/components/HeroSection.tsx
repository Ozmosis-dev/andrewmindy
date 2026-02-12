"use client";

import { motion } from "framer-motion";
import { MetricCard } from "./MetricCard";
import { Button } from "./Button";

const proofPoints = [
  { metric: "$3M → $20M", label: "Revenue Growth" },
  { metric: "35% → 52%", label: "Close Rate" },
  { metric: "$37K", label: "Annual Savings" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen grain overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F5EDE4 0%, #EDE4D8 100%)",
      }}
    >
      <div className="container-site relative z-10 flex flex-col justify-center min-h-screen py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          {/* Left column - copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display font-bold uppercase tracking-tightest leading-[0.95] text-charcoal mb-8"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              }}
            >
              I turn ambiguous growth problems into systems that scale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-base text-slate leading-relaxed max-w-xl mb-10"
            >
              Bridging brand, marketing, and operations to drive measurable
              outcomes&mdash;from $3M to $20M revenue growth, 17-point close
              rate improvements, and systems that reclaim 1,000+ hours per year.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" href="#work">
                See the Work
              </Button>
              <Button variant="secondary" href="#contact">
                Let&apos;s Talk
              </Button>
            </motion.div>
          </div>

          {/* Right column - proof points */}
          <div className="flex flex-col gap-3 lg:pl-8">
            {proofPoints.map((point, i) => (
              <MetricCard
                key={point.label}
                value={point.metric}
                label={point.label}
                delay={0.3 + i * 0.1}
              />
            ))}
            <MetricCard
              value="$3M → $20M"
              label="Revenue Growth"
              dark
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
