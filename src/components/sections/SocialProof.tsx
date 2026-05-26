"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: 138, label: "Elevi interesati", suffix: "+" },
  { value: 12, label: "Workshopuri planificate", suffix: "" },
  { value: 7, label: "Spatii dedicate", suffix: "" },
];

function AnimatedCounter({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [active, target]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      ref={ref}
      className="bg-navy py-28 lg:py-36 px-6 lg:px-16 relative overflow-hidden"
    >
      {/* Subtle grid — Vercel-inspired */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="text-center mb-20">
          <span
            className={`inline-block text-[10px] font-medium tracking-[0.25em] uppercase text-blue-light/50 mb-6 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Social Proof
          </span>
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-[3.5rem] text-white leading-[1.15] tracking-[-0.02em] transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Rezultate care vorbesc.
          </h2>
        </div>

        {/* Stats row — Vercel metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-10 px-6 bg-navy transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  active={inView}
                />
              </div>
              <p className="mt-3 text-white/40 text-xs font-medium uppercase tracking-[0.15em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials — refined cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            {
              quote: "Am nevoie de un loc unde pot lucra la proiecte reale, nu doar teorie.",
              author: "Elev, 16 ani",
            },
            {
              quote: "As vrea sa stiu cum sa-mi fac un CV si un portofoliu inainte de facultate.",
              author: "Elev, 17 ani",
            },
          ].map((t, i) => (
            <div
              key={i}
              className={`bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${700 + i * 150}ms` }}
            >
              <svg className="w-5 h-5 text-white/10 mb-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>
              <blockquote className="text-white/60 text-sm leading-relaxed">
                {t.quote}
              </blockquote>
              <p className="mt-4 text-white/30 text-xs font-medium tracking-wide">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
