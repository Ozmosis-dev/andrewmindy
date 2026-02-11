"use client";

import Link from "next/link";
import { SectionLabel } from "./SectionLabel";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "./ScrollReveal";
import { projects } from "@/data/projects";

export function WorkSection() {
  return (
    <section id="work" className="bg-ink py-20 md:py-28">
      <div className="container-site">
        <SectionLabel number="01" label="Selected Work" />

        <ScrollReveal>
          <h2 className="font-display font-bold uppercase tracking-tighter leading-none text-cream mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Projects that
            <span className="text-amber block">drove results</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-display text-steel text-base leading-relaxed max-w-2xl mb-12">
            Projects that drove measurable outcomes&mdash;from revenue operations
            to systems automation to full-stack product development.
          </p>
        </ScrollReveal>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-5">
          {/* Featured large card */}
          <ProjectCard
            title={projects[0].title}
            category={projects[0].categoryLabel}
            metric={projects[0].metrics[0].value}
            metricLabel={projects[0].metrics[0].label}
            gradient={projects[0].gradient}
            slug={projects[0].slug}
            featured
            delay={0}
          />

          {/* Stacked smaller cards */}
          <div className="flex flex-col gap-5">
            {projects.slice(1).map((project, i) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                category={project.categoryLabel}
                metric={project.metrics[0].value}
                metricLabel={project.metrics[0].label}
                gradient={project.gradient}
                slug={project.slug}
                delay={0.1 * (i + 1)}
              />
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.2} className="mt-12">
          <Link
            href="/work"
            className="font-display font-bold text-sm text-amber uppercase tracking-wide hover:text-cream transition-colors duration-200 inline-flex items-center gap-2"
          >
            View All Projects
            <span>&rarr;</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
