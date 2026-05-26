"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const details = [
  { image: IMAGES.cards.proVisualSmoke, label: "Pro Card" },
  { image: IMAGES.cards.basicVisualWater, label: "Basic Card" },
  { image: IMAGES.cards.proVisualMacro, label: "Detaliu" },
];

export function UnboxingSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="relative py-28 lg:py-36 px-6 lg:px-16 overflow-hidden bg-navy">
      {/* Layered dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0d1b30] to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,169,110,0.06)_0%,transparent_60%)]" />

      {/* Gold particles */}
      {inView && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-gold-subtle rounded-full opacity-0 animate-[particle-drift_6s_ease-in-out_infinite]"
              style={{
                left: `${10 + Math.random() * 80}%`,
                bottom: `${Math.random() * 30}%`,
                animationDelay: `${i * 0.35}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-14">
          <span
            className={`inline-block text-[10px] font-medium tracking-[0.25em] uppercase text-gold-subtle/60 mb-6 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Welcome Kit
          </span>
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-[3.5rem] text-white leading-[1.15] tracking-[-0.02em] transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Nu primesti doar acces.
            <br />
            <span className="text-white/70">Primesti o experienta.</span>
          </h2>
        </div>

        <div
          className={`relative aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-white/[0.06] shadow-2xl transition-all duration-1000 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src={IMAGES.cards.premiumVisualUnboxing}
            alt="EduPoint Premium Welcome Kit — experienta de unboxing premium"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            quality={90}
          />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 lg:gap-6">
          {details.map((detail, i) => (
            <div
              key={detail.label}
              className={`group relative aspect-square rounded-xl overflow-hidden ring-1 ring-white/[0.06] transition-all duration-700 hover:ring-white/[0.15] ${
                inView
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: `${800 + i * 150}ms` }}
            >
              <Image
                src={detail.image}
                alt={detail.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 33vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white/70 text-xs font-medium tracking-wide">
                {detail.label}
              </span>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 text-center transition-all duration-700 delay-[1200ms] ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Button href="/membership" variant="secondary" size="lg">
            Descopera ce primesti
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
