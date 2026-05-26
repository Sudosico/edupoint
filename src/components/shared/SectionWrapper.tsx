"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  fullWidth?: boolean;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  dark,
  fullWidth,
  id,
}: SectionWrapperProps) {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative",
        dark ? "bg-navy text-white" : "bg-ivory",
        !fullWidth && "px-6 lg:px-16",
        className
      )}
    >
      <div
        className={cn(
          "transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          !fullWidth && "max-w-[1280px] mx-auto"
        )}
      >
        {children}
      </div>
    </section>
  );
}
