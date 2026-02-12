import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects, getProjectBySlug, caseStudyNav } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyContent } from "./CaseStudyContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const descriptions: Record<string, string> = {
    "atlanta-roofing":
      "How a psychology-based sales training system scaled a regional roofing company from $3M to $20M in four years and improved close rates from 35% to 52%.",
    "southern-water":
      "Building an AI-powered platform that eliminated 1,000+ hours of manual work annually and delivered $37K in labor cost savings for a B2B distribution company.",
    notova:
      "Full-stack SaaS product built from concept to launch in three weeks using Next.js, TypeScript, and modern web technologies. AI-powered note organization and smart search.",
  };

  return {
    title: `${project.title} — Andrew Mindy`,
    description: descriptions[slug] || project.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const caseStudy = caseStudies[slug];

  if (!project || !caseStudy) {
    notFound();
  }

  const nav = caseStudyNav[slug];
  const prevProject = nav?.prev ? getProjectBySlug(nav.prev) : null;
  const nextProject = nav?.next ? getProjectBySlug(nav.next) : null;

  return (
    <>
      <Header variant="dark" />
      <main className="bg-ink min-h-screen">
        {/* Hero area */}
        <div
          className="relative py-20 md:py-32 overflow-hidden"
          style={{ background: project.gradient }}
        >
          <div className="container-site relative z-10">
            <Link
              href="/work"
              className="font-mono text-[0.65rem] text-cream/60 tracking-widest uppercase inline-flex items-center gap-2 mb-8 hover:text-cream transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Work
            </Link>

            <span className="font-mono text-[0.55rem] text-amber tracking-widest uppercase block mb-3">
              {project.categoryLabel}
            </span>

            <h1
              className="font-display font-bold uppercase tracking-tighter leading-none text-cream mb-8"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {project.title}
            </h1>

            {/* Metadata grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div>
                <span className="font-mono text-[0.55rem] text-cream/40 tracking-widest uppercase block mb-1">
                  Client
                </span>
                <span className="font-display text-sm text-cream/80">
                  {project.client}
                </span>
              </div>
              <div>
                <span className="font-mono text-[0.55rem] text-cream/40 tracking-widest uppercase block mb-1">
                  Industry
                </span>
                <span className="font-display text-sm text-cream/80">
                  {project.industry}
                </span>
              </div>
              <div>
                <span className="font-mono text-[0.55rem] text-cream/40 tracking-widest uppercase block mb-1">
                  Timeline
                </span>
                <span className="font-display text-sm text-cream/80">
                  {project.timeline}
                </span>
              </div>
              <div>
                <span className="font-mono text-[0.55rem] text-cream/40 tracking-widest uppercase block mb-1">
                  Role
                </span>
                <span className="font-display text-sm text-cream/80">
                  {project.role}
                </span>
              </div>
            </div>

            {/* Key metrics */}
            <div className="flex flex-wrap gap-6">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <span className="font-display font-bold text-[2rem] md:text-[2.5rem] text-amber tracking-tight block leading-none">
                    {m.value}
                  </span>
                  <span className="font-mono text-[0.55rem] text-cream/50 tracking-widest uppercase">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case study content */}
        <CaseStudyContent caseStudy={caseStudy} project={project} />

        {/* Navigation */}
        <div className="border-t border-border-dark">
          <div className="container-site py-12 flex justify-between items-center">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="flex items-center gap-3 group"
              >
                <ArrowLeft
                  size={16}
                  className="text-steel group-hover:text-cream transition-colors"
                />
                <div>
                  <span className="font-mono text-[0.55rem] text-steel tracking-widest uppercase block">
                    Previous
                  </span>
                  <span className="font-display text-sm text-cream/80 group-hover:text-cream transition-colors">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/work/${nextProject.slug}`}
                className="flex items-center gap-3 text-right group"
              >
                <div>
                  <span className="font-mono text-[0.55rem] text-steel tracking-widest uppercase block">
                    Next
                  </span>
                  <span className="font-display text-sm text-cream/80 group-hover:text-cream transition-colors">
                    {nextProject.title}
                  </span>
                </div>
                <ArrowRight
                  size={16}
                  className="text-steel group-hover:text-cream transition-colors"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* CTA */}
        <div
          className="py-16 text-center"
          style={{
            background: "linear-gradient(135deg, #C75B2A 0%, #8B3D1A 100%)",
          }}
        >
          <Link
            href="/#contact"
            className="font-display font-bold text-sm text-cream uppercase tracking-wide hover:opacity-80 transition-opacity inline-flex items-center gap-2"
          >
            Let&apos;s Talk About Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
