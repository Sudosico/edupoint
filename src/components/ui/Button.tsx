import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline-dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-[0.02em] transition-all duration-300 rounded-xl relative overflow-hidden group";

  const variants = {
    primary:
      "bg-blue text-white shadow-lg shadow-blue/25 hover:shadow-xl hover:shadow-blue/30 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "border border-white/30 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/50 active:scale-[0.98]",
    ghost:
      "text-navy border-2 border-navy/10 hover:border-navy/30 hover:bg-navy/5 active:scale-[0.98]",
    "outline-dark":
      "border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[15px]",
    lg: "px-8 py-3.5 text-[15px]",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
