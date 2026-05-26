"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const services = [
  { icon: "01", title: "CV & Scrisoare de intentie" },
  { icon: "02", title: "Portofoliu profesional" },
  { icon: "03", title: "Simulare interviu" },
  { icon: "04", title: "Orientare facultate" },
  { icon: "05", title: "Ghidare Erasmus" },
  { icon: "06", title: "Internship & Voluntariat" },
];

export function CareerLabSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="bg-ivory-warm py-28 lg:py-36 px-6 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/[0.04] shadow-2xl shadow-navy/10 transition-all duration-1000 ${
              inView
                ? "opacity-100 clip-path-full"
                : "opacity-0"
            }`}
            style={{
              clipPath: inView
                ? "inset(0 0 0 0)"
                : "inset(0 100% 0 0)",
              transition: "clip-path 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s",
            }}
          >
            <Image
              src={IMAGES.building.careerLabPeople}
              alt="EduPoint Career Lab — spatiu de orientare profesionala"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Warm overlay — Stripe-inspired */}
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/10 to-transparent" />
          </div>

          <div>
            <span
              className={`inline-block text-xs font-medium tracking-[0.2em] uppercase text-graphite-light mb-5 transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Career Lab
            </span>

            <h2
              className={`font-serif text-3xl sm:text-4xl lg:text-[3.5rem] text-navy leading-[1.15] tracking-[-0.02em] transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Directia bate confuzia.
            </h2>

            <p
              className={`mt-5 text-graphite-light text-base lg:text-lg leading-relaxed transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              CV. Portofoliu. Interviu. Facultate. Erasmus. Totul intr-un singur
              loc.
            </p>

            {/* Services list — Linear numbered style */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + i * 80}ms` }}
                >
                  <span className="text-[10px] font-mono text-blue/60 w-4 shrink-0">{service.icon}</span>
                  <span className="text-sm font-medium text-navy">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>

            <div
              className={`mt-10 transition-all duration-700 delay-[1000ms] ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Button href="/career-lab">
                Descopera Career Lab
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
