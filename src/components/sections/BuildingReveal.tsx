"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const rooms = [
  { label: "EduPoint Cafe", x: "8%", y: "62%" },
  { label: "Receptie", x: "42%", y: "72%" },
  { label: "Career Lab", x: "40%", y: "50%" },
  { label: "Sala Workshop-uri", x: "60%", y: "42%" },
  { label: "Studio Proiecte", x: "35%", y: "28%" },
  { label: "Sala Prezentari", x: "65%", y: "25%" },
  { label: "Mentorat Premium", x: "25%", y: "18%" },
  { label: "Zona Studiu Linistita", x: "42%", y: "15%" },
  { label: "Lounge Premium", x: "15%", y: "30%" },
];

export function BuildingReveal() {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="bg-ivory-warm py-28 lg:py-36 px-6 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 lg:mb-20">
          <span
            className={`inline-block text-xs font-medium tracking-[0.2em] uppercase text-graphite-light mb-6 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Ecosistemul complet
          </span>
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-[3.5rem] text-navy leading-[1.15] tracking-[-0.02em] transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Un campus educational complet.
            <br />
            <span className="text-blue">Intr-o singura cladire.</span>
          </h2>
        </div>

        <div className="relative w-full aspect-[16/10] lg:aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-black/[0.04] shadow-2xl shadow-navy/10">
          <Image
            src={IMAGES.building.birdsEye}
            alt="EduPoint — vedere de ansamblu asupra cladirii"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1280px"
            quality={90}
          />

          {rooms.map((room, i) => (
            <div
              key={room.label}
              className={`absolute transition-all duration-500 ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{
                left: room.x,
                top: room.y,
                transitionDelay: `${400 + i * 150}ms`,
              }}
            >
              <div className="relative group cursor-default">
                {/* Pulse ring */}
                <div
                  className="absolute inset-0 -m-2 rounded-full border-2 border-blue/40 animate-[pulse-glow_2s_ease-in-out_infinite]"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
                <div className="w-3 h-3 bg-blue rounded-full shadow-lg shadow-blue/30 group-hover:scale-150 transition-transform duration-300" />
                {/* Tooltip on hover (mobile + hover devices) */}
                <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap bg-navy/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none lg:hidden">
                  {room.label}
                </div>
                {/* Always-visible label on desktop */}
                <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap hidden lg:block">
                  <span className="bg-white/95 backdrop-blur-md text-navy text-[11px] font-semibold px-3 py-1.5 rounded-lg shadow-md shadow-black/5 border border-white/60">
                    {room.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 text-center transition-all duration-700 delay-[1800ms] ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Button href="/spaces" variant="ghost">
            Exploreaza toate spatiile &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
