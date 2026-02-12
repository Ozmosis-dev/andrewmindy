export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  timeline: string;
  role: string;
  description: string;
  category: string;
  categoryLabel: string;
  metrics: ProjectMetric[];
  featured: boolean;
  liveUrl?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    slug: "atlanta-roofing",
    title: "Atlanta Regional Roofing Company",
    client: "Regional Roofing Company (Atlanta, GA)",
    industry: "Home Services / Roofing",
    timeline: "4 years (Spring 2018 – Spring 2022)",
    role: "Sales → Training Manager → Assistant Sales Manager",
    description:
      "Built a psychology-based sales training system that scaled a regional roofing company from $3M to $20M in four years.",
    category: "revenue-ops",
    categoryLabel: "Revenue Operations",
    metrics: [
      { value: "$3M → $20M", label: "Revenue Growth" },
      { value: "35% → 52%", label: "Close Rate" },
      { value: "7x", label: "Review Volume" },
    ],
    featured: true,
    gradient: "linear-gradient(135deg, #1A2F23 0%, #0D1A12 100%)",
  },
  {
    slug: "southern-water",
    title: "Southern Water Service & GloFlo",
    client: "Southern Water Service & GloFlo",
    industry: "Industrial Equipment / B2B Distribution",
    timeline: "~2 months",
    role: "Systems Architect, Web Developer, Automation Engineer",
    description:
      "Built an AI-powered platform that eliminated 1,000+ hours of manual work annually and saved $37K in labor costs.",
    category: "automation",
    categoryLabel: "Systems Automation",
    metrics: [
      { value: "95%", label: "Faster Lead Search" },
      { value: "1,000+", label: "Hours/Year Saved" },
      { value: "$37K", label: "Annual Savings" },
    ],
    featured: true,
    gradient: "linear-gradient(135deg, #1A1A2E 0%, #0D0D1A 100%)",
  },
  {
    slug: "notova",
    title: "Notova",
    client: "Personal Project",
    industry: "SaaS / Productivity",
    timeline: "~3 weeks",
    role: "Founder, Designer, Full-Stack Developer",
    description:
      "Designed and built a full-stack SaaS product from concept to launch in three weeks.",
    category: "product",
    categoryLabel: "Full-Stack Product",
    metrics: [
      { value: "3 Weeks", label: "To Launch" },
      { value: "Full-Stack", label: "Ownership" },
      { value: "Live", label: "notova.app" },
    ],
    featured: true,
    liveUrl: "https://notova.app",
    gradient: "linear-gradient(135deg, #2E1A1A 0%, #1A0D0D 100%)",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const caseStudyNav: Record<
  string,
  { prev: string | null; next: string | null }
> = {
  "atlanta-roofing": { prev: null, next: "southern-water" },
  "southern-water": { prev: "atlanta-roofing", next: "notova" },
  notova: { prev: "southern-water", next: null },
};

export const categories = [
  { value: "all", label: "All" },
  { value: "revenue-ops", label: "Revenue Operations" },
  { value: "automation", label: "Systems & Automation" },
  { value: "product", label: "Product Development" },
  { value: "creative", label: "Brand & Creative" },
];
