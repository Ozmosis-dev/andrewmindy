"use client";

import { SectionLabel } from "./SectionLabel";
import { ProcessStep } from "./ProcessStep";
import { ScrollReveal } from "./ScrollReveal";

const problems = [
  {
    title: "Outgrowing Current Systems",
    situation:
      "Your team is spending hours on manual tasks. Lead follow-up is inconsistent. Data lives in spreadsheets instead of dashboards. The processes that worked at $1M are breaking down at $5M.",
    solution:
      "Audit your workflows, identify bottlenecks, and build automation that reclaims time and eliminates friction. From custom CRM platforms to AI-powered lead management, I create systems that scale with you.",
  },
  {
    title: "Brand Doesn\u2019t Match Who You\u2019ve Become",
    situation:
      "Your website was built three years ago and feels dated. Prospects see your materials and question whether you can handle their scale. Your brand doesn\u2019t reflect the sophistication of your operation.",
    solution:
      "Rebuild from strategy through launch. Brand positioning, identity systems, website architecture, and conversion-focused execution. Not just prettier\u2014measurably better at driving leads and closing deals.",
  },
  {
    title: "Need to Move Fast Without Hiring Three People",
    situation:
      "You need brand work, a new website, marketing automation, and operational improvements. Hiring specialists for each function is slow and expensive. You need someone who can own the full scope.",
    solution:
      "Take ownership end-to-end. One engagement, from discovery through deployment. Brand strategy, web development, systems integration, and ongoing optimization. The range to execute across disciplines with the depth to do each one well.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "Understand the real problem, not just the symptoms. Map current workflows, identify friction points, and align on success metrics.",
  },
  {
    title: "Strategy",
    description:
      "Define the approach. What gets built, in what order, and how we\u2019ll measure success. Clear scope, realistic timeline, no surprises.",
  },
  {
    title: "Build",
    description:
      "Execute with regular check-ins. You see progress as it happens, not all at once at the end.",
  },
  {
    title: "Optimize",
    description:
      "Measure results, refine based on data, and hand off or continue based on what you need.",
  },
];

export function HowIWorkSection() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="container-site">
        <SectionLabel number="03" label="How I Work" />

        <ScrollReveal>
          <h2
            className="font-display font-bold uppercase tracking-tighter leading-none text-cream mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            How I Work
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-display text-steel text-base leading-relaxed max-w-2xl mb-16">
            I work with companies facing one or more of these situations:
          </p>
        </ScrollReveal>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {problems.map((problem, i) => (
            <ScrollReveal key={problem.title} delay={i * 0.1}>
              <div className="border border-border-dark p-6 md:p-8 h-full">
                <span className="font-mono text-[0.55rem] text-amber tracking-widest uppercase block mb-4">
                  Situation {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-bold text-lg text-cream uppercase tracking-tight mb-4">
                  {problem.title}
                </h3>
                <p className="font-display text-sm text-steel leading-relaxed mb-4">
                  {problem.situation}
                </p>
                <p className="font-display text-sm text-cream/80 leading-relaxed">
                  {problem.solution}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Process */}
        <ScrollReveal>
          <span className="font-mono text-[0.65rem] text-amber tracking-widest uppercase block mb-3">
            The Process
          </span>
          <h3
            className="font-display font-bold uppercase tracking-tighter leading-none text-cream mb-8"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Every engagement follows the same framework:
          </h3>
        </ScrollReveal>

        <div>
          {processSteps.map((step, i) => (
            <ProcessStep
              key={step.title}
              number={String(i + 1).padStart(2, "0")}
              title={step.title}
              description={step.description}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
