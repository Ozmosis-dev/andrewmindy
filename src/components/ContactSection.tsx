"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!formState.email) {
      setError("Email is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Frontend-only for now
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #C75B2A 0%, #8B3D1A 100%)",
      }}
    >
      {/* Large background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold uppercase text-white/5 whitespace-nowrap pointer-events-none select-none"
        style={{ fontSize: "clamp(6rem, 20vw, 18rem)" }}
      >
        LET&apos;S TALK
      </div>

      <div className="container-site relative z-10">
        <ScrollReveal>
          <span className="font-mono text-[0.65rem] text-cream/60 tracking-widest uppercase block mb-3">
            04 &mdash; Contact
          </span>
          <h2
            className="font-display font-bold uppercase tracking-tighter leading-none text-cream mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Let&apos;s Talk
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-display text-base text-cream/80 leading-relaxed max-w-xl mb-10">
            Working on something that needs systems thinking? Let&apos;s discuss
            what you&apos;re building and how I can help.
          </p>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal>
            <div className="bg-white/10 backdrop-blur-sm p-8 max-w-lg">
              <p className="font-display text-cream text-lg font-semibold mb-2">
                Message sent.
              </p>
              <p className="font-display text-cream/70 text-sm">
                I&apos;ll be in touch within 24 hours.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="max-w-lg flex flex-col gap-5"
            >
              <div>
                <label className="font-mono text-[0.6rem] text-cream/60 tracking-widest uppercase block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                  className="w-full bg-white/10 border border-white/20 text-cream font-display text-sm px-4 py-3 placeholder:text-cream/30 focus:outline-none focus:border-cream/50 transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-[0.6rem] text-cream/60 tracking-widest uppercase block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                  className="w-full bg-white/10 border border-white/20 text-cream font-display text-sm px-4 py-3 placeholder:text-cream/30 focus:outline-none focus:border-cream/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="font-mono text-[0.6rem] text-cream/60 tracking-widest uppercase block mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  placeholder="Tell me about what you're working on..."
                  className="w-full bg-white/10 border border-white/20 text-cream font-display text-sm px-4 py-3 placeholder:text-cream/30 focus:outline-none focus:border-cream/50 transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="font-display text-sm text-cream font-semibold">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="bg-cream text-charcoal font-display font-bold text-[0.7rem] uppercase tracking-wide px-8 py-4 hover:-translate-y-0.5 transition-all duration-200 self-start"
              >
                Send Message
              </button>

              <p className="font-display text-[0.8rem] text-cream/50 leading-relaxed">
                I&apos;ll respond within 24 hours. If it sounds like a fit,
                we&apos;ll set up a quick call to discuss your project in detail.
              </p>

              <p className="font-display text-[0.8rem] text-cream/50">
                Prefer email? Reach me directly at{" "}
                <a
                  href="mailto:contact@andrewmindy.com"
                  className="text-cream/80 underline hover:text-cream transition-colors"
                >
                  contact@andrewmindy.com
                </a>
              </p>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
