"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (parallaxRef.current) {
            const y = window.scrollY;
            parallaxRef.current.style.transform = `translateY(${y * 0.15}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div
        ref={parallaxRef}
        className={`absolute inset-0 transition-transform duration-[2000ms] ease-out ${
          loaded ? "scale-100" : "scale-[1.15]"
        }`}
      >
        <Image
          src={IMAGES.building.exteriorPeople}
          alt="EduPoint — campusul educational premium"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Window glow overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-amber-500/0 via-amber-200/0 to-amber-100/0 transition-opacity duration-[3000ms] ${
          loaded ? "animate-[window-glow_4s_ease-in-out_infinite_2s]" : "opacity-0"
        }`}
        style={{ mixBlendMode: "soft-light" }}
      />

      {/* Premium multi-layer gradient — Stripe-inspired depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Subtle radial glow behind text — Vercel-inspired */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue/5 rounded-full blur-[120px]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-20 lg:pb-24 px-6 text-center">
        {/* Badge — Linear-inspired */}
        <div
          className={`mb-6 transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 text-xs font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Locuri disponibile pentru 2025
          </span>
        </div>

        <h1
          className={`font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.08] tracking-[-0.02em] transition-all duration-1000 delay-500 ${
            loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Viitorul incepe aici.
        </h1>

        <p
          className={`mt-5 text-white/70 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed transition-all duration-1000 delay-700 ${
            loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Primul ecosistem educational premium din Romania, construit pentru
          generatia care vrea mai mult decat note.
        </p>

        <div
          className={`mt-8 flex flex-col sm:flex-row items-center gap-3 transition-all duration-1000 delay-1000 ${
            loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <Button href="/join" size="lg">
            Devino Membru
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
          <Button href="#mission" variant="secondary" size="lg">
            Descopera EduPoint
          </Button>
        </div>

        <div
          className={`mt-12 transition-all duration-1000 delay-[1200ms] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="animate-[bounce-subtle_2s_ease-in-out_infinite]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white/40"
            >
              <path
                d="M12 5v14m0 0l-6-6m6 6l6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
