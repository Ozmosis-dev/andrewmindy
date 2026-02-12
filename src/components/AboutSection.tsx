"use client";

import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";

const paragraphs = [
  "I started as a designer, spent four years on a sales floor closing deals and building training systems, and evolved into someone who can own the full stack\u2014from brand strategy to custom automation.",
  "That sales floor experience changed how I think about creative work. When you\u2019ve sold $160K+ per month and watched reps succeed or struggle based on whether the system supported them, you stop designing for awards. You design for conversion. You build systems that remove friction and create predictability.",
  "Now I work with companies that have outgrown their current tools and processes. The brand that got you to $1M won\u2019t get you to $10M. The manual workflows that worked with five people break down with fifty. I help systematize what\u2019s working so it scales without you.",
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-[80vh]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left - amber gradient */}
        <div
          className="relative flex items-center justify-center py-20 md:py-0 px-8"
          style={{
            background: "linear-gradient(135deg, #C75B2A 0%, #8B3D1A 100%)",
          }}
        >
          {/* Decorative square */}
          <div className="absolute top-12 left-12 w-24 h-24 border-2 border-white/20 hidden md:block" />

          <div className="relative z-10 text-center md:text-left">
            <span className="font-mono text-[0.65rem] text-cream/60 tracking-widest uppercase block mb-4">
              02 &mdash; About
            </span>
            <h2
              className="font-display font-bold uppercase tracking-tighter leading-none text-cream"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Designer.
              <br />
              Builder.
              <br />
              Systems
              <br />
              Thinker.
            </h2>
          </div>
        </div>

        {/* Right - cream with grain */}
        <div
          className="grain relative flex items-center py-20 px-8 md:px-16"
          style={{
            background: "linear-gradient(180deg, #F5EDE4 0%, #EDE4D8 100%)",
          }}
        >
          <div className="relative z-10 max-w-lg">
            {paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="font-display text-base text-slate leading-relaxed mb-6 last:mb-0">
                  {p}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
