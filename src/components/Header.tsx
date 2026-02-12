"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", href: "#work", number: "01" },
  { label: "About", href: "#about", number: "02" },
  { label: "Contact", href: "#contact", number: "03" },
];

interface HeaderProps {
  variant?: "light" | "dark";
}

export function Header({ variant = "light" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = variant === "dark";

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 backdrop-blur-sm",
          isDark ? "bg-ink/90" : "bg-cream/90"
        )}
      >
        <div className="flex justify-between items-center px-6 py-5 md:px-8">
          <Link
            href="/"
            className={cn(
              "font-display font-bold text-lg uppercase tracking-tight leading-tight",
              isDark ? "text-cream" : "text-charcoal"
            )}
          >
            Andrew
            <br />
            Mindy
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "font-display text-xs uppercase tracking-wide transition-colors duration-200",
                  isDark
                    ? "text-cream/70 hover:text-cream"
                    : "text-charcoal/70 hover:text-charcoal"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[0.65rem] mr-1",
                    isDark ? "opacity-40" : "opacity-40"
                  )}
                >
                  {item.number}
                </span>
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              className={cn(
                "font-display font-bold text-xs uppercase tracking-wide px-6 py-3 transition-all duration-200 hover:-translate-y-0.5",
                isDark
                  ? "bg-cream text-charcoal"
                  : "bg-charcoal text-cream"
              )}
            >
              Let&apos;s Talk
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className={cn(
              "md:hidden p-2",
              isDark ? "text-cream" : "text-charcoal"
            )}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-5">
              <Link
                href="/"
                className="font-display font-bold text-lg uppercase tracking-tight leading-tight text-cream"
                onClick={() => setMenuOpen(false)}
              >
                Andrew
                <br />
                Mindy
              </Link>
              <button
                className="text-cream p-2"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center items-center gap-10">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="font-display font-bold text-4xl text-cream uppercase tracking-tight"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="font-mono text-amber text-sm mr-3 opacity-60">
                      {item.number}
                    </span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link
                  href="#contact"
                  className="font-display font-bold text-sm uppercase tracking-wide bg-amber text-cream px-10 py-4 mt-4 inline-block"
                  onClick={() => setMenuOpen(false)}
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
