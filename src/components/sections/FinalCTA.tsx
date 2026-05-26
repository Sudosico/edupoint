"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const trustBadges = [
  "Fara contract pe termen lung",
  "Poti anula oricand",
  "Acces din prima zi",
];

export function FinalCTA() {
  const { ref, inView } = useInView(0.2);

  return (
    <section ref={ref} className="relative h-[85vh] min-h-[550px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.building.exteriorClean}
          alt="EduPoint — cladirea te asteapta"
          fill
          className="object-cover"
          sizes="100vw"
          style={{
            filter: inView ? "saturate(0.65) brightness(0.9)" : "saturate(1)",
            transition: "filter 2s ease",
          }}
        />
      </div>

      {/* Multi-layer overlay — Stripe depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

      {/* Radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue/[0.06] rounded-full blur-[100px]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h2
          className={`font-serif text-3xl sm:text-4xl lg:text-[4rem] text-white leading-[1.08] tracking-[-0.02em] transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Esti pregatit sa faci
          <br />
          primul pas?
        </h2>

        <p
          className={`mt-6 text-white/60 text-base lg:text-lg max-w-md transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Alatura-te primei generatii de membri EduPoint. Locurile sunt
          limitate.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row items-center gap-3 transition-all duration-700 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Button href="/join" size="lg">
            Devino Membru
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
          <Button href="/contact" variant="outline-dark" size="lg">
            Programeaza o vizita
          </Button>
        </div>

        {/* Trust badges — pill style */}
        <div
          className={`mt-12 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm">
              <svg
                className="w-3.5 h-3.5 text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-white/50 text-xs font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
