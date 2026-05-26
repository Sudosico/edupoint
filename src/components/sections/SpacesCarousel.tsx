"use client";

import { useRef } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";

const spaces = [
  {
    name: "Study Cafe",
    description: "Spatiu de studiu modern cu Wi-Fi, biblioteca si zona de relaxare.",
    image: IMAGES.building.studyCafePeople,
    tier: "Basic+",
    href: "/spaces#study-cafe",
  },
  {
    name: "Career Lab",
    description: "CV, portofoliu, simulare interviu si orientare profesionala.",
    image: IMAGES.building.careerLabPeople,
    tier: "Pro+",
    href: "/career-lab",
  },
  {
    name: "Project Studio",
    description: "Podcast, CV video, pitch deck si continut de portofoliu.",
    image: IMAGES.building.studioPeople,
    tier: "Pro+",
    href: "/project-studio",
  },
  {
    name: "Receptie & Check-in",
    description: "Acces cu Smart Card, kiosk digital si informatii.",
    image: IMAGES.building.receptionPeople,
    tier: "Basic+",
    href: "/spaces",
  },
];

export function SpacesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="bg-ivory py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 mb-12 lg:mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span
              className={`inline-block text-xs font-medium tracking-[0.2em] uppercase text-graphite-light mb-5 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Spatii dedicate
            </span>
            <h2
              className={`font-serif text-3xl sm:text-4xl lg:text-[3.5rem] text-navy leading-[1.15] tracking-[-0.02em] transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Fiecare spatiu, gandit pentru
              <br className="hidden sm:block" /> progresul tau.
            </h2>
          </div>
          <p
            className={`text-graphite-light text-sm max-w-xs transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            De la cafenea la studio, fiecare metru patrat este optimizat pentru productivitate.
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-6 lg:px-16 pb-6 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {spaces.map((space, i) => (
          <a
            key={space.name}
            href={space.href}
            className={`group flex-shrink-0 w-[80vw] sm:w-[60vw] lg:w-[calc(25%-15px)] snap-center transition-all duration-700 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${200 + i * 100}ms` }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/[0.04]">
              <Image
                src={space.image}
                alt={space.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 25vw"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-3 right-3">
                <span className="bg-white/95 backdrop-blur-md text-navy text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide shadow-sm">
                  {space.tier}
                </span>
              </div>
              {/* Number index — Linear-inspired */}
              <div className="absolute bottom-3 left-3">
                <span className="text-white/0 group-hover:text-white/60 text-xs font-mono transition-colors duration-500">
                  0{i + 1}
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-navy group-hover:text-blue transition-colors duration-300">
                  {space.name}
                </h3>
                <p className="mt-1 text-sm text-graphite-light leading-relaxed">
                  {space.description}
                </p>
              </div>
              <svg className="w-4 h-4 text-graphite-light/40 group-hover:text-blue shrink-0 mt-1 transition-all duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
