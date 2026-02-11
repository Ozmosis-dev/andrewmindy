"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects, categories } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Header variant="dark" />
      <main className="bg-ink min-h-screen">
        <div className="container-site py-20 md:py-28">
          <ScrollReveal>
            <span className="font-mono text-[0.65rem] text-amber tracking-widest uppercase block mb-3">
              Portfolio
            </span>
            <h1
              className="font-display font-bold uppercase tracking-tighter leading-none text-cream mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Work
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="font-display text-steel text-base leading-relaxed max-w-2xl mb-12">
              A selection of projects spanning revenue operations, systems
              automation, and full-stack product development.
            </p>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={cn(
                    "font-mono text-[0.6rem] uppercase tracking-widest px-4 py-2 border transition-all duration-200",
                    activeFilter === cat.value
                      ? "bg-amber border-amber text-cream"
                      : "border-border-dark text-steel hover:border-steel hover:text-cream"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                category={project.categoryLabel}
                metric={project.metrics[0].value}
                metricLabel={project.metrics[0].label}
                gradient={project.gradient}
                slug={project.slug}
                featured={i === 0}
                delay={i * 0.1}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="font-display text-steel text-center py-20">
              No projects in this category yet.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
