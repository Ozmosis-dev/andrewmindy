# Andrew Mindy Portfolio — Design System
## Phase 7: Final Design Foundation

> **Design Direction:** Bold Editorial Warmth  
> Geometric confidence meets human warmth. Award-worthy without trying too hard.

---

## 1. Design Philosophy

### The Concept: Bold Editorial Warmth

This portfolio is a **statement**. It combines the structural sophistication of top agencies with a warm, human palette that feels approachable. The bold sans-serif typography commands attention while the cream/amber palette keeps it from feeling cold.

**The tension that makes it memorable:**
- Bold geometric type × Warm organic textures
- Sharp uppercase headlines × Inviting body copy
- Dark dramatic sections × Soft cream backgrounds
- Systems precision × Creative soul

### Design Principles

1. **Command Attention** — Bold typography, confident metrics, no apologies
2. **Warm Sophistication** — Rich amber, textured cream, not sterile white
3. **Editorial Structure** — Numbered sections, asymmetric grids, magazine-quality layouts
4. **Let Results Speak** — Metrics as visual heroes, not footnotes
5. **Intentional Details** — Grain textures, geometric accents, hover states that reward exploration

---

## 2. Typography System

### Font Stack

**Display: Sora**
- A geometric sans-serif with warmth and character
- Weights: 700 (bold) and 800 (extra bold) for headlines
- Used for: Headlines, hero text, metrics, section titles, navigation
- Treatment: Uppercase for headlines, tight letter-spacing

**Body: Sora**
- Same family for cohesion
- Weights: 400 (regular) for body text
- Used for: Paragraphs, descriptions, form labels

**Accent: JetBrains Mono (or system monospace)**
- For technical/systems feel
- Used for: Section labels `[01]`, category tags, timestamps, small metadata

### Alternative Font Options

| Font | Vibe | Source |
|------|------|--------|
| **Sora** ✓ | Modern geometric warmth | Google Fonts |
| **Clash Display** | Sharp, very bold | Fontshare (free) |
| **Cabinet Grotesk** | Editorial distinction | Fontshare |
| **Outfit** | Friendly geometric | Google Fonts |

### Font Loading

```tsx
// app/layout.tsx
import { Sora, JetBrains_Mono } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800']
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

### Type Scale

```css
:root {
  /* ═══════════════════════════════════════
     DISPLAY — Hero headlines, massive impact
  ═══════════════════════════════════════ */
  --text-display: clamp(3.5rem, 9vw, 7rem);
  --text-display-weight: 700;
  --text-display-leading: 0.95;
  --text-display-tracking: -0.04em;
  --text-display-transform: uppercase;

  /* ═══════════════════════════════════════
     H1 — Section headlines
  ═══════════════════════════════════════ */
  --text-h1: clamp(2rem, 5vw, 3.5rem);
  --text-h1-weight: 700;
  --text-h1-leading: 1.0;
  --text-h1-tracking: -0.03em;
  --text-h1-transform: uppercase;

  /* ═══════════════════════════════════════
     H2 — Subsections, about headline
  ═══════════════════════════════════════ */
  --text-h2: clamp(1.75rem, 3.5vw, 2.75rem);
  --text-h2-weight: 700;
  --text-h2-leading: 1.1;
  --text-h2-tracking: -0.03em;
  --text-h2-transform: uppercase;

  /* ═══════════════════════════════════════
     H3 — Card titles, process steps
  ═══════════════════════════════════════ */
  --text-h3: clamp(1.25rem, 2vw, 1.5rem);
  --text-h3-weight: 700;
  --text-h3-leading: 1.1;
  --text-h3-tracking: -0.01em;
  --text-h3-transform: uppercase;

  /* ═══════════════════════════════════════
     METRICS — Large numbers that command attention
  ═══════════════════════════════════════ */
  --text-metric-lg: clamp(2rem, 4vw, 2.5rem);
  --text-metric-xl: clamp(2.5rem, 5vw, 3rem);
  --text-metric-weight: 800;
  --text-metric-tracking: -0.03em;

  /* ═══════════════════════════════════════
     BODY — Readable text
  ═══════════════════════════════════════ */
  --text-body: 1rem;
  --text-body-weight: 400;
  --text-body-leading: 1.7;

  --text-body-lg: 1rem;
  --text-body-lg-leading: 1.7;

  /* ═══════════════════════════════════════
     LABELS — Monospace metadata
  ═══════════════════════════════════════ */
  --text-label: 0.65rem;
  --text-label-tracking: 0.15em;
  --text-label-transform: uppercase;

  /* ═══════════════════════════════════════
     SMALL — Navigation, buttons
  ═══════════════════════════════════════ */
  --text-sm: 0.75rem;
  --text-sm-tracking: 0.05em;
  --text-sm-transform: uppercase;

  --text-xs: 0.55rem;
  --text-xs-tracking: 0.12em;
}
```

### Typography Utilities

```css
/* Display headlines */
.text-display {
  font-family: var(--font-display), system-ui, sans-serif;
  font-size: var(--text-display);
  font-weight: var(--text-display-weight);
  line-height: var(--text-display-leading);
  letter-spacing: var(--text-display-tracking);
  text-transform: var(--text-display-transform);
}

/* Section headlines */
.text-h1 {
  font-family: var(--font-display), system-ui, sans-serif;
  font-size: var(--text-h1);
  font-weight: var(--text-h1-weight);
  line-height: var(--text-h1-leading);
  letter-spacing: var(--text-h1-tracking);
  text-transform: var(--text-h1-transform);
}

/* Metrics */
.text-metric {
  font-family: var(--font-display), system-ui, sans-serif;
  font-size: var(--text-metric-lg);
  font-weight: var(--text-metric-weight);
  letter-spacing: var(--text-metric-tracking);
  line-height: 1;
}

/* Section labels */
.text-label {
  font-family: var(--font-mono), monospace;
  font-size: var(--text-label);
  letter-spacing: var(--text-label-tracking);
  text-transform: var(--text-label-transform);
}

/* Body text */
.text-body {
  font-family: var(--font-display), system-ui, sans-serif;
  font-size: var(--text-body);
  font-weight: var(--text-body-weight);
  line-height: var(--text-body-leading);
}
```

---

## 3. Color System

### The Palette

```css
:root {
  /* ═══════════════════════════════════════
     WARM NEUTRALS — The Foundation
  ═══════════════════════════════════════ */
  --color-cream: #F5EDE4;           /* Primary warm background */
  --color-cream-dark: #EDE4D8;      /* Gradient end, subtle variation */
  
  /* ═══════════════════════════════════════
     DARK TONES — Contrast & Depth
  ═══════════════════════════════════════ */
  --color-ink: #0D0D0D;             /* Primary dark background */
  --color-charcoal: #1A1A1A;        /* Primary text on light, cards */
  --color-slate: #4A4A4A;           /* Body text on light backgrounds */
  --color-steel: #888888;           /* Body text on dark backgrounds */
  --color-ash: #666666;             /* Muted text, labels */
  --color-border-dark: #222222;     /* Borders on dark backgrounds */
  
  /* ═══════════════════════════════════════
     AMBER — Your Signature Accent
  ═══════════════════════════════════════ */
  --color-amber: #C75B2A;           /* Primary accent — rich burnt orange */
  --color-amber-deep: #8B3D1A;      /* Gradient end, darker amber */
  
  /* ═══════════════════════════════════════
     CARD GRADIENTS — Dark section variety
  ═══════════════════════════════════════ */
  --gradient-card-green: linear-gradient(135deg, #1A2F23 0%, #0D1A12 100%);
  --gradient-card-blue: linear-gradient(135deg, #1A1A2E 0%, #0D0D1A 100%);
  --gradient-card-red: linear-gradient(135deg, #2E1A1A 0%, #1A0D0D 100%);
  
  /* ═══════════════════════════════════════
     UTILITY
  ═══════════════════════════════════════ */
  --color-white: #FFFFFF;
  --color-white-85: rgba(255, 255, 255, 0.85);
  --color-black-90: rgba(0, 0, 0, 0.9);
}
```

### Color Application

| Section | Background | Primary Text | Secondary Text | Accent |
|---------|------------|--------------|----------------|--------|
| Hero | `cream` → `cream-dark` gradient | `charcoal` | `slate` | `amber` |
| Work | `ink` | `cream` | `steel` | `amber` |
| About (left) | `amber` → `amber-deep` gradient | — | — | — |
| About (right) | `cream` | `charcoal` | `slate` | `amber` |
| Process | `ink` | `cream` | `steel` | `amber` |
| Contact CTA | `amber` | `cream` | `white-75` | — |
| Footer | `ink` | `cream` | `ash` | — |

### Gradients

```css
/* Hero background */
--gradient-hero: linear-gradient(180deg, #F5EDE4 0%, #EDE4D8 100%);

/* About section amber side */
--gradient-amber: linear-gradient(135deg, #C75B2A 0%, #8B3D1A 100%);

/* Card bottoms for text readability */
--gradient-card-overlay: linear-gradient(transparent, rgba(0, 0, 0, 0.9));

/* Hover overlay */
--gradient-hover: rgba(199, 91, 42, 0.95);
```

---

## 4. Texture & Atmosphere

### Grain Overlay

Adds analog warmth, prevents sterile digital feel:

```css
.grain-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.35;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}
```

**Apply to:**
- Hero section
- About section (cream side)
- Any warm-toned section

### Geometric Accents

Decorative elements that add sophistication:

```css
/* Circle accent (on project cards) */
.accent-circle {
  width: 80px;
  height: 80px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

/* Square accent (on about section) */
.accent-square {
  width: 100px;
  height: 100px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}
```

---

## 5. Spacing System

### Base Unit: 8px

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### Section Spacing

```css
/* Section padding */
--section-padding-x: 2rem;
--section-padding-y: 5rem;

/* On larger screens */
@media (min-width: 768px) {
  --section-padding-x: 3rem;
}
```

### Component Spacing

```css
/* Card padding */
--card-padding: 1.5rem;
--card-padding-lg: 2rem;

/* Card gap in grids */
--card-gap: 1.25rem;

/* Section header margin bottom */
--section-header-mb: 3rem;
```

---

## 6. Layout System

### Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│ HERO — Full viewport, cream gradient, grain texture         │
├─────────────────────────────────────────────────────────────┤
│ WORK — Dark ink background, asymmetric card grid            │
├─────────────────────────────────────────────────────────────┤
│ ABOUT — Split: amber gradient | cream with grain            │
├─────────────────────────────────────────────────────────────┤
│ PROCESS — Dark ink, numbered editorial steps                │
├─────────────────────────────────────────────────────────────┤
│ CONTACT — Full amber background, oversized bg text          │
├─────────────────────────────────────────────────────────────┤
│ FOOTER — Dark ink, minimal                                  │
└─────────────────────────────────────────────────────────────┘
```

### Grid Patterns

**Hero Grid:**
```css
.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
}
```

**Work Grid (Asymmetric):**
```css
.work-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 1.25rem;
}
```

**About Split:**
```css
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 80vh;
}
```

**Process Rows:**
```css
.process-row {
  display: grid;
  grid-template-columns: 60px 130px 1fr;
  gap: 1.5rem;
  align-items: baseline;
}
```

### Responsive Breakpoints

```css
/* Mobile first */
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
```

---

## 7. Component Specifications

### 7.1 Header / Navigation

```tsx
interface NavItem {
  label: string;
  href: string;
  number: string;  // "01", "02", "03"
}

// Structure
<header className="sticky top-0 z-50 backdrop-blur-sm">
  <div className="flex justify-between items-center p-6">
    {/* Logo — stacked name */}
    <div className="font-display font-bold text-lg uppercase tracking-tight leading-tight">
      Andrew<br/>Mindy
    </div>
    
    {/* Navigation */}
    <nav className="flex items-center gap-8">
      {navItems.map((item) => (
        <a className="font-display text-xs uppercase tracking-wide">
          <span className="opacity-40 mr-1 font-mono text-[0.65rem]">
            {item.number}
          </span>
          {item.label}
        </a>
      ))}
      
      {/* CTA Button */}
      <button className="font-display font-bold text-xs uppercase tracking-wide bg-charcoal text-cream px-6 py-3">
        Let's Talk
      </button>
    </nav>
  </div>
</header>
```

### 7.2 Section Label

```tsx
interface SectionLabelProps {
  number: string;  // "01", "02", etc.
  label: string;
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <span className="font-mono text-[0.65rem] text-amber tracking-[0.15em] uppercase block mb-3">
      {number} — {label}
    </span>
  );
}
```

### 7.3 Section Headline

```tsx
interface SectionHeadlineProps {
  children: React.ReactNode;
  accent?: string;  // Text to highlight in amber
}

export function SectionHeadline({ children, accent }: SectionHeadlineProps) {
  return (
    <h2 className="font-display font-bold text-h1 uppercase tracking-tight leading-none">
      {children}
      {accent && <span className="text-amber block">{accent}</span>}
    </h2>
  );
}

// Usage
<SectionHeadline accent="drove results">
  Projects that
</SectionHeadline>
```

### 7.4 Metric Card (Hero)

```tsx
interface MetricCardProps {
  value: string;
  label: string;
  dark?: boolean;
  offset?: number;  // translateX offset for staggered effect
}

export function MetricCard({ value, label, dark = false, offset = 0 }: MetricCardProps) {
  return (
    <div 
      className={cn(
        "flex items-baseline gap-4 px-6 py-4 backdrop-blur-sm",
        dark ? "bg-charcoal" : "bg-white/85"
      )}
      style={{ transform: `translateX(${offset}px)` }}
    >
      <span className={cn(
        "font-display font-bold text-[1.75rem] tracking-tight",
        dark ? "text-amber" : "text-charcoal"
      )}>
        {value}
      </span>
      <span className={cn(
        "font-mono text-[0.6rem] uppercase tracking-[0.08em]",
        dark ? "text-steel" : "text-ash"
      )}>
        {label}
      </span>
    </div>
  );
}
```

### 7.5 Project Card (Featured)

```tsx
interface ProjectCardProps {
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  gradient: string;
  slug: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  category,
  metric,
  metricLabel,
  gradient,
  slug,
  featured = false
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <Link
      href={`/work/${slug}`}
      className={cn(
        "relative overflow-hidden cursor-pointer transition-transform duration-400 ease-out",
        featured ? "aspect-[16/10]" : "flex-1",
        hovered && "scale-[1.02]"
      )}
      style={{ background: gradient }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Decorative circles */}
      {featured && (
        <>
          <div className="absolute top-6 right-6 w-20 h-20 border border-white/10 rounded-full" />
          <div className="absolute top-10 right-10 w-15 h-15 border border-white/5 rounded-full" />
        </>
      )}
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90">
        <div className="flex justify-between items-end">
          <div>
            <span className="font-mono text-[0.55rem] text-amber tracking-[0.12em] uppercase block mb-2">
              {category}
            </span>
            <h3 className="font-display font-bold text-2xl text-cream uppercase tracking-tight leading-tight">
              {title}
            </h3>
          </div>
          <div className="text-right">
            <span className="font-display font-[800] text-[2.5rem] text-amber tracking-tight block">
              {metric}
            </span>
            <span className="font-mono text-[0.55rem] text-steel tracking-[0.08em] uppercase">
              {metricLabel}
            </span>
          </div>
        </div>
      </div>
      
      {/* Hover overlay */}
      <div className={cn(
        "absolute inset-0 bg-amber/95 flex items-center justify-center transition-opacity duration-300",
        hovered ? "opacity-100" : "opacity-0"
      )}>
        <span className="font-display font-bold text-sm text-cream tracking-[0.15em] uppercase">
          View Case Study →
        </span>
      </div>
    </Link>
  );
}
```

### 7.6 Process Step

```tsx
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="grid grid-cols-[60px_130px_1fr] gap-6 py-7 border-t border-border-dark items-baseline">
      <span className="font-display text-[2rem] font-light text-amber leading-none tracking-tight">
        {number}
      </span>
      <h3 className="font-display font-bold text-base text-cream uppercase tracking-wide">
        {title}
      </h3>
      <p className="font-display font-normal text-[0.9rem] text-steel leading-relaxed">
        {description}
      </p>
    </div>
  );
}
```

### 7.7 Button

```tsx
type ButtonVariant = 'primary' | 'secondary' | 'cta';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variants = {
  primary: "bg-amber text-cream hover:translate-y-[-2px]",
  secondary: "bg-transparent border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream",
  cta: "bg-cream text-charcoal hover:translate-y-[-2px]"
};

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "font-display font-bold text-[0.7rem] uppercase tracking-[0.05em]",
        "px-8 py-4",
        "transition-all duration-200",
        variants[variant]
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

---

## 8. Animation & Motion

### Timing Functions

```css
:root {
  --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-slow: 400ms;
}
```

### Key Animations

**Card Hover:**
```css
.card {
  transition: transform 400ms var(--ease-out);
}
.card:hover {
  transform: scale(1.02);
}
```

**Button Hover:**
```css
.button {
  transition: transform 200ms var(--ease-out), opacity 200ms var(--ease-out);
}
.button:hover {
  transform: translateY(-2px);
}
```

**Marquee:**
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-25%); }
}

.marquee {
  animation: marquee 25s linear infinite;
}
```

**Fade Up (Framer Motion):**
```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};
```

---

## 9. Tailwind Configuration

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5EDE4',
          dark: '#EDE4D8',
        },
        ink: '#0D0D0D',
        charcoal: '#1A1A1A',
        slate: '#4A4A4A',
        steel: '#888888',
        ash: '#666666',
        amber: {
          DEFAULT: '#C75B2A',
          deep: '#8B3D1A',
        },
        border: {
          dark: '#222222',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3.5rem, 9vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'h1': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'h2': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'h3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'metric': ['clamp(2rem, 4vw, 2.5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'metric-lg': ['clamp(2.5rem, 5vw, 3rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.03em',
        'tight': '-0.02em',
        'wide': '0.05em',
        'wider': '0.08em',
        'widest': '0.15em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-25%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 10. Global Styles

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-ink text-cream antialiased;
    font-family: var(--font-display), system-ui, sans-serif;
  }
  
  ::selection {
    @apply bg-amber/30 text-charcoal;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
  }
}

@layer components {
  /* Grain overlay utility */
  .grain {
    position: relative;
  }
  
  .grain::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.35;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    mix-blend-mode: overlay;
  }
  
  /* Section label */
  .section-label {
    @apply font-mono text-[0.65rem] text-amber tracking-[0.15em] uppercase;
  }
  
  /* Container */
  .container-site {
    @apply max-w-7xl mx-auto px-8;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## 11. Implementation Checklist

### Fonts & Config
- [ ] Install Sora font via next/font
- [ ] Install JetBrains Mono via next/font
- [ ] Configure Tailwind with design tokens
- [ ] Set up CSS variables in globals.css

### Core Components
- [ ] Header / Navigation
- [ ] SectionLabel
- [ ] SectionHeadline
- [ ] Button (primary, secondary, cta)
- [ ] MetricCard
- [ ] ProjectCard
- [ ] ProcessStep

### Page Sections
- [ ] Hero section with grain texture
- [ ] Work section with asymmetric grid
- [ ] About section with split layout
- [ ] Process section with numbered steps
- [ ] Contact CTA section
- [ ] Footer

### Polish
- [ ] Hover states on all interactive elements
- [ ] Scroll-triggered animations
- [ ] Marquee animation
- [ ] Mobile responsive layouts
- [ ] Performance optimization

---

## 12. Summary: What Makes This Design Award-Worthy

| Element | Treatment |
|---------|-----------|
| **Typography** | Sora — bold geometric sans, uppercase headlines, tight tracking |
| **Color** | Warm cream + rich amber + deep ink contrast |
| **Texture** | Grain overlays on warm sections |
| **Layout** | Asymmetric editorial grids, not standard 12-col |
| **Metrics** | Large, bold, colored — they're heroes |
| **Motion** | Subtle scale on hover, smooth transitions |
| **Details** | Numbered section labels, geometric accents, staggered elements |

**The result:** A portfolio that commands attention while feeling warm and human. Bold enough to be memorable, refined enough to be professional.

---

*Ready for Phase 7 Build.*
