"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

export function StudioSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="relative h-[90vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.building.studioPeople}
          alt="EduPoint Project Studio — studio de creare continut"
          fill
          className={`object-cover transition-transform duration-[2000ms] ${
            inView ? "scale-100" : "scale-105"
          }`}
          sizes="100vw"
        />
      </div>

      {/* Multi-layer gradient overlay — Stripe depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Film grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      {/* REC indicator */}
      <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="text-white/70 text-[10px] font-mono tracking-[0.15em] uppercase">
          Rec
        </span>
      </div>

      <div className="relative z-10 h-full flex items-end pb-16 lg:pb-20 px-6 lg:px-16">
        <div
          className={`max-w-lg bg-black/30 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-white/[0.08] transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/40 mb-4 block">
            Project Studio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] text-white leading-[1.15] tracking-[-0.02em]">
            Ideile tale merita sa fie vazute.
          </h2>
          <p className="mt-4 text-white/60 text-base leading-relaxed">
            Podcast. CV video. Pitch deck. Portofoliu digital. Totul incepe in
            studio.
          </p>
          <div className="mt-8">
            <Button href="/project-studio">
              Rezerva o sesiune
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
