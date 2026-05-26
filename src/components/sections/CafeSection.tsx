"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const zones = [
  {
    icon: "☕",
    title: "Zona Publica",
    description: "Deschisa tuturor. Cafea, studiu, conversatii.",
  },
  {
    icon: "🔑",
    title: "Zona Membri",
    description: "Acces cu Smart Card. Studiu concentrat.",
  },
  {
    icon: "📚",
    title: "Mini Library",
    description: "Carti organizate pe competente si domenii.",
  },
];

export function CafeSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="bg-ivory py-28 lg:py-36 px-6 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span
              className={`inline-block text-xs font-medium tracking-[0.2em] uppercase text-graphite-light mb-5 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              EduPoint Cafe
            </span>

            <h2
              className={`font-serif text-3xl sm:text-4xl lg:text-[3.5rem] text-navy leading-[1.15] tracking-[-0.02em] transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Mai mult decat o cafenea.
            </h2>

            <p
              className={`mt-5 text-graphite-light text-base lg:text-lg leading-relaxed transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Un loc unde ideile se nasc, conversatiile conteaza si viitorul se
              planuieste la o cafea.
            </p>

            <div className="mt-10 space-y-1">
              {zones.map((zone, i) => (
                <div
                  key={zone.title}
                  className={`flex items-start gap-4 p-4 rounded-xl hover:bg-navy/[0.02] transition-all duration-500 ${
                    inView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${400 + i * 150}ms` }}
                >
                  <span className="text-2xl shrink-0">{zone.icon}</span>
                  <div>
                    <h3 className="font-semibold text-navy text-[15px]">{zone.title}</h3>
                    <p className="text-sm text-graphite-light mt-0.5 leading-relaxed">
                      {zone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`mt-10 transition-all duration-700 delay-[900ms] ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Button href="/cafe">
                Viziteaza EduPoint Cafe
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/[0.04] shadow-2xl shadow-navy/10"
            style={{
              clipPath: inView
                ? "inset(0 0 0 0)"
                : "inset(0 0 0 100%)",
              transition:
                "clip-path 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            <Image
              src={IMAGES.building.studyCafePeople}
              alt="EduPoint Study Cafe — spatiu de studiu si socializare"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-navy/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
