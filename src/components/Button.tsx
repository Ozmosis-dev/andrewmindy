import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "cta";

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-amber text-cream hover:-translate-y-0.5",
  secondary:
    "bg-transparent border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream",
  cta: "bg-cream text-charcoal hover:-translate-y-0.5",
};

export function Button({
  variant = "primary",
  children,
  href,
  type = "button",
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "font-display font-bold text-[0.7rem] uppercase tracking-wide",
    "px-8 py-4 inline-block text-center",
    "transition-all duration-200",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
