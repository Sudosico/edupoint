"use client";

import { useInView } from "@/hooks/useInView";

export function ProblemStatement() {
  const { ref, inView } = useInView(0.3);

  const lines = [
    { text: "Scoala iti da teorie.", weight: "font-light", number: "01" },
    { text: "Meditatiile iti dau note.", weight: "font-normal", number: "02" },
    { text: "EduPoint iti da ", weight: "font-bold", highlight: "directie.", number: "03" },
  ];

  return (
    <section
      ref={ref}
      id="mission"
      className="relative bg-ivory py-36 lg:py-52 px-6 lg:px-16 overflow-hidden"
    >
      {/* Subtle radial gradient — Vercel-inspired */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue/[0.03] rounded-full blur-[100px]" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Minimal label — Linear-inspired */}
        <div
          className={`mb-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-graphite-light">
            De ce EduPoint
          </span>
        </div>

        <h2
          className={`font-serif text-3xl sm:text-4xl lg:text-[3.5rem] text-navy leading-[1.15] tracking-[-0.02em] transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Ai informatii. Dar ai directie?
        </h2>

        <div className="mt-20 space-y-0">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`relative py-6 border-t border-navy/[0.06] last:border-b transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${400 + i * 200}ms` }}
            >
              {/* Step number — Linear numbered progression */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] font-mono text-graphite-light/40 tracking-wider hidden sm:block">
                {line.number}
              </span>
              <p
                className={`text-xl sm:text-2xl lg:text-[1.75rem] text-graphite ${line.weight} tracking-[-0.01em]`}
              >
                {line.text}
                {line.highlight && (
                  <span className="text-blue font-bold">{line.highlight}</span>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Animated accent line */}
        <div className="mt-16 flex justify-center">
          <div
            className={`h-[1px] bg-gradient-to-r from-transparent via-navy/20 to-transparent transition-all duration-[1200ms] delay-[1000ms] ${
              inView ? "w-32 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
