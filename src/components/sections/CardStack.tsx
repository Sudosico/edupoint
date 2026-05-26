"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const cards = [
  {
    name: "Basic",
    image: IMAGES.cards.basic,
    benefits: ["Acces Study Cafe", "Mini Library", "Evenimente"],
    bg: "bg-ivory-warm",
  },
  {
    name: "Pro",
    image: IMAGES.cards.pro,
    benefits: ["Workshopuri", "Career Lab", "Project Studio"],
    bg: "bg-navy",
  },
  {
    name: "Premium",
    image: IMAGES.cards.premium,
    benefits: ["Mentor personal", "Plan personalizat", "Acces complet"],
    bg: "bg-black",
  },
  {
    name: "Platinum",
    image: IMAGES.cards.platinum,
    benefits: ["Merit-based", "Exclusiv", "Recunoastere"],
    bg: "bg-platinum",
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -12,
      y: (x - 0.5) * 12,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.5s ease" : "transform 0.1s ease",
      }}
    >
      {children}
    </div>
  );
}

export function CardStack() {
  const { ref, inView } = useInView(0.2);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative bg-navy py-28 lg:py-36 px-6 lg:px-16 overflow-hidden"
    >
      {/* Multi-layer gradient — Stripe-inspired depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-navy/95 to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,127,255,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="text-center mb-20">
          <span
            className={`inline-block text-[10px] font-medium tracking-[0.25em] uppercase text-blue-light/60 mb-6 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Smart Card System
          </span>
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-[3.5rem] text-white leading-[1.15] tracking-[-0.02em] transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Un card. Intreaga experienta.
          </h2>
          <p
            className={`mt-5 text-white/50 text-lg max-w-xl mx-auto transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Smart Card-ul tau EduPoint: acces, identitate, EduCredit si statut.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <div
              key={card.name}
              className={`group relative transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <TiltCard className="relative aspect-[85.6/53.98] rounded-xl overflow-hidden shadow-2xl shadow-black/30 ring-1 ring-white/[0.08] transition-all duration-500 group-hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)] group-hover:ring-white/[0.15]">
                <Image
                  src={card.image}
                  alt={`EduPoint ${card.name} Card`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                {/* Shimmer sweep on all cards on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-[100%] group-hover:translate-x-[200%] transition-transform duration-[1200ms]"
                />
                {/* Extra shimmer for Platinum on load */}
                {card.name === "Platinum" && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[2500ms] ${
                      inView
                        ? "translate-x-[300%]"
                        : "-translate-x-[100%]"
                    }`}
                    style={{ transitionDelay: "1500ms" }}
                  />
                )}
              </TiltCard>

              <div className="mt-4 text-center">
                <h3 className="text-white font-semibold text-lg">
                  {card.name}
                </h3>
                <div
                  className={`mt-2 space-y-1 transition-all duration-300 ${
                    hoveredCard === i
                      ? "opacity-100 max-h-24"
                      : "opacity-0 max-h-0 overflow-hidden lg:opacity-100 lg:max-h-24"
                  }`}
                >
                  {card.benefits.map((b) => (
                    <p key={b} className="text-white/50 text-xs">
                      {b}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 text-center transition-all duration-700 delay-[1000ms] ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Button href="/membership" size="lg">
            Alege abonamentul tau
          </Button>
        </div>
      </div>
    </section>
  );
}
