export interface CaseStudySection {
  title: string;
  content: string[];
}

export interface CaseStudy {
  challenge: string[];
  approach: string[];
  execution: string[];
  results: string[];
  demonstrates: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
  "atlanta-roofing": {
    challenge: [
      "I joined a profitable but lean regional roofing company with six salespeople, ten support staff, and approximately $3M in annual revenue. They had built a strong reputation through quality work and referrals, but growth had plateaued.",
      "The company had no documented sales system, no formal training program, and no standardized processes. Each salesperson had developed their own approach. This worked fine at smaller scale, but made growth unpredictable\u2014there was no way to reliably onboard new reps or ensure consistency across the team.",
      "When a new rep joined, they either figured it out through observation or failed. The close rate varied wildly depending on who was running the appointment. There was talent on the team, but no system to scale it.",
    ],
    approach: [
      "I started on the sales floor, running appointments and closing deals. Within six months, I was consistently exceeding $100K per month in revenue sold, with recurring months over $200K and peak performance above $300K. I maintained a close rate above 50% on confirmed appointments.",
      "That hands-on experience informed everything I built next. When leadership asked me to develop a training program, I didn\u2019t create theoretical material\u2014I documented exactly what was working on the floor and why.",
      "The core insight was this: sales is a trainable skill, not an innate talent. If you understand the psychology behind buying decisions and trust the process, you can build a system that works for anyone willing to follow it.",
    ],
    execution: [
      "I designed a structured onboarding program that could take someone with zero sales experience and make them productive in 30 days:",
      "\u2022 Two weeks of classroom training covering product knowledge, buyer psychology, objection handling, and deal structuring",
      "\u2022 One week in the field shadowing experienced reps and running practice appointments",
      "\u2022 One week of debrief and support as they transitioned to running their own appointments",
      "I ran cohorts of 8-10 trainees at a time. The results were immediate and consistent. New reps\u2014including people who had never sold anything before\u2014were producing approximately $200K in first-month revenue sold.",
      "Two standout examples: a retail worker with no sales background exceeded $150K in month one and $200K in month two. A chef from a local restaurant hit similar numbers. Both succeeded because they trusted the system.",
      "Beyond training, I standardized SOPs across five departments: Sales, Confirmation, Operations, Production, and Insurance. These weren\u2019t theoretical documents\u2014they were working playbooks that removed guesswork and ensured consistency.",
      "I also implemented systematic follow-up using Podium and internal tracking systems to improve the customer experience. This drove review volume up approximately 7x and strengthened the company\u2019s market position.",
    ],
    results: [
      "Revenue: $3M/year \u2192 $20M/year over four years",
      "Close rate: 35% \u2192 52% improvement through systematic training and process refinement",
      "Review volume: 7x increase through consistent follow-up and customer experience improvements",
      "New rep production: ~$200K first-month revenue sold, including zero-experience hires",
      "Standout trainees: Retail worker and chef both exceeded $150K month one, $200K month two",
    ],
    demonstrates: [
      "Understand operations from the inside\u2014I wasn\u2019t an outside consultant theorizing; I was on the floor closing deals",
      "Document and systematize what works\u2014turn tribal knowledge into repeatable processes",
      "Train and scale teams\u2014enable new people to succeed quickly through structured systems",
      "Drive measurable growth\u2014not incremental improvement, but 6x revenue scale over four years",
    ],
  },
  "southern-water": {
    challenge: [
      "Southern Water Service & GloFlo had outgrown their spreadsheet-and-email workflow. They were managing B2B distribution for industrial water treatment equipment, and every lead required manual data entry, follow-up tracking, and document management across multiple systems.",
      "The team was losing approximately 4.2 hours per day to friction: searching for lead information, manually entering data into spreadsheets, tracking follow-ups, and keeping internal documentation up to date.",
      "They also needed a modern e-commerce presence to support direct sales and improve their market positioning. The existing site was outdated and didn\u2019t reflect the sophistication of their operation.",
    ],
    approach: [
      "I embedded with the team to map every touchpoint in their workflow: how leads came in, how they were qualified, how follow-ups were tracked, and where bottlenecks occurred.",
      "Rather than force them into an off-the-shelf CRM that wouldn\u2019t fit their process, I built a custom AI-powered platform designed specifically around their needs. The goal was to eliminate manual steps entirely and surface the information they needed when they needed it.",
    ],
    execution: [
      "The project had two main components:",
      "1. New E-Commerce Website \u2014 Built a modern, conversion-focused website with product catalogs, technical specifications, and direct purchase capabilities. Positioned the brand as a sophisticated partner for industrial clients.",
      "2. Custom AI-Powered Platform \u2014 Developed a unified platform that handled:",
      "\u2022 CRM: Lead tracking and pipeline management",
      "\u2022 Lead scraping: Automated data collection from multiple sources",
      "\u2022 AI-assisted email: Smart templates and automated follow-up sequences",
      "\u2022 Automated data entry: Information captured once and synced everywhere",
      "\u2022 Document management: Internal knowledge base with instant search",
      "The platform integrated with their existing tools and workflows, so adoption was seamless. The team didn\u2019t have to change how they worked\u2014the system adapted to them.",
    ],
    results: [
      "Lead entry: 1 minute \u2192 20 seconds (67% faster)",
      "Batch lead search: 25 minutes \u2192 1.2 minutes (95% faster)",
      "Time reclaimed: ~1,000+ hours per year",
      "Total annual labor savings: $37,221",
    ],
    demonstrates: [
      "Diagnose operational inefficiencies\u2014identify where manual work is costing time and money",
      "Build custom solutions\u2014create tools tailored to specific workflows, not force-fit existing products",
      "Integrate across systems\u2014ensure new tools work with existing infrastructure",
      "Deliver measurable ROI\u2014quantify time and cost savings with precision",
    ],
  },
  notova: {
    challenge: [
      "Evernote users who want to leave face a problem: .enex files are a proprietary format most note-taking apps can\u2019t read. When I decided to migrate away from Evernote, I hit this problem myself.",
      "I looked for a clean solution. The existing tools were clunky, limited, or required technical knowledge most people don\u2019t have. There was a clear gap in the market for a tool that just worked\u2014import your notes, get them organized, and move on.",
    ],
    approach: [
      "I decided to build the tool I wished existed. The product needed to be:",
      "\u2022 Simple: Upload your .enex file, see your notes immediately",
      "\u2022 Smart: Use AI to auto-organize and surface insights",
      "\u2022 Fast: Handle large notebooks without lag",
      "\u2022 Flexible: Support multiple formats beyond just Evernote",
      "I set a timeline: three weeks from concept to deployed product. Fast enough to validate the idea without overbuilding, tight enough to force prioritization.",
    ],
    execution: [
      "I built Notova as a full-stack SaaS application using modern web technologies:",
      "\u2022 Frontend: Next.js with TypeScript and React for a fast, type-safe UI",
      "\u2022 Styling: Tailwind CSS for responsive, customizable design",
      "\u2022 Database: PostgreSQL with Prisma ORM for reliable data management",
      "\u2022 Backend: Supabase for auth and real-time capabilities",
      "\u2022 Infrastructure: AWS for file processing, Vercel for deployment",
      "The core features included:",
      "\u2022 Native .enex import: Full Evernote notebook support with metadata preservation",
      "\u2022 Multi-format support: Import from multiple sources, not just Evernote",
      "\u2022 AI-powered organization: Auto-generated smart tags based on content analysis",
      "\u2022 AI summaries: Generate summaries for individual notes and entire notebooks",
      "\u2022 Smart search: Find notes quickly with advanced filtering",
      "\u2022 Custom themes: Personalize the interface to match your preferences",
      "I shipped the MVP in three weeks as planned. The product was live, functional, and solving a real problem.",
    ],
    results: [],
    demonstrates: [
      "Product thinking: Identify a real problem and build a solution that works",
      "Full-stack capability: Design, develop, and deploy production-grade applications",
      "Modern stack proficiency: Comfortable with contemporary tools and best practices",
      "Speed of execution: Move from concept to launch in weeks, not months",
      "Technical depth: Handle complex integrations like AI analysis and file parsing",
    ],
  },
};
