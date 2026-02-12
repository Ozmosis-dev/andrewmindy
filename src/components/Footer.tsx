import Link from "next/link";

const footerLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/andrewmindy" },
  { label: "GitHub", href: "https://github.com/andrewmindy" },
];

export function Footer() {
  return (
    <footer className="bg-ink border-t border-border-dark">
      <div className="container-site py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display text-sm text-ash">
          &copy; 2026 Andrew Mindy
        </div>

        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] text-steel uppercase tracking-widest hover:text-cream transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
