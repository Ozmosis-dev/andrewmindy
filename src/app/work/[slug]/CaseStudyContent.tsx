"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import type { CaseStudy } from "@/data/case-studies";
import type { Project } from "@/data/projects";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
  project: Project;
}

function ContentSection({
  label,
  number,
  paragraphs,
}: {
  label: string;
  number: string;
  paragraphs: string[];
}) {
  return (
    <div className="py-12 md:py-16 border-t border-border-dark">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
        <ScrollReveal>
          <span className="font-mono text-[0.65rem] text-amber tracking-widest uppercase block">
            {number} &mdash; {label}
          </span>
        </ScrollReveal>
        <div>
          {paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <p className="font-display text-base text-steel leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CaseStudyContent({
  caseStudy,
  project,
}: CaseStudyContentProps) {
  return (
    <div className="container-site">
      <ContentSection
        label="The Challenge"
        number="01"
        paragraphs={caseStudy.challenge}
      />
      <ContentSection
        label="The Approach"
        number="02"
        paragraphs={caseStudy.approach}
      />
      <ContentSection
        label="The Execution"
        number="03"
        paragraphs={caseStudy.execution}
      />

      {caseStudy.results.length > 0 && (
        <div className="py-12 md:py-16 border-t border-border-dark">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
            <ScrollReveal>
              <span className="font-mono text-[0.65rem] text-amber tracking-widest uppercase block">
                04 &mdash; Results
              </span>
            </ScrollReveal>
            <div>
              {caseStudy.results.map((r, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <p className="font-display text-base text-cream/90 leading-relaxed mb-3 last:mb-0">
                    {r}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="py-12 md:py-16 border-t border-border-dark">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
          <ScrollReveal>
            <span className="font-mono text-[0.65rem] text-amber tracking-widest uppercase block">
              {caseStudy.results.length > 0 ? "05" : "04"} &mdash; What This
              Demonstrates
            </span>
          </ScrollReveal>
          <div>
            <ScrollReveal>
              <p className="font-display text-base text-steel leading-relaxed mb-4">
                This project shows my ability to:
              </p>
            </ScrollReveal>
            {caseStudy.demonstrates.map((d, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <p className="font-display text-base text-cream/80 leading-relaxed mb-2 last:mb-0 flex gap-3">
                  <span className="text-amber shrink-0">&bull;</span>
                  {d}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Notova special - show live URL */}
      {project.liveUrl && (
        <div className="py-12 border-t border-border-dark">
          <ScrollReveal>
            <p className="font-display text-steel text-sm">
              Live at{" "}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:text-cream transition-colors underline"
              >
                {project.liveUrl.replace("https://", "")}
              </a>
            </p>
          </ScrollReveal>
        </div>
      )}
    </div>
  );
}
