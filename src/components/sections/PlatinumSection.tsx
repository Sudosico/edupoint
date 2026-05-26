"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const criteria = [
  { number: "01", title: "Excelenta", description: "Rezultate academice si progres constant in ecosistem." },
  { number: "02", title: "Dedicare", description: "Prezenta activa, workshopuri si proiecte finalizate." },
  { number: "03", title: "Impact", description: "Contributie reala in comunitate si leadership demonstrat." },
];

export function PlatinumSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-44 px-6 lg:px-16 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #F0F0F0 0%, #E8E8E8 25%, #E0E0E0 50%, #D8D8D8 75%, #E4E4E4 100%)",
      }}
    >
      {/* Subtle diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 21px)",
      }} />

      <div className="max-w-[1280px] mx-auto text-center">
        <span
          className={`inline-block text-[10px] font-medium tracking-[0.3em] uppercase text-graphite-light/60 mb-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Statut de excelenta
        </span>

        <h2
          className={`font-serif text-3xl sm:text-4xl lg:text-[3.5rem] text-navy leading-[1.15] tracking-[-0.02em] transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Platinum nu se cumpara.
          <br />
          <span className="text-graphite-light">Se castiga.</span>
        </h2>

        <p
          className={`mt-5 text-graphite-light text-base max-w-md mx-auto transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Statutul rezervat celor care demonstreaza excelenta, dedicare si
          impact in comunitate.
        </p>

        {/* Floating card with enhanced glow */}
        <div
          className={`mt-16 relative w-64 sm:w-80 mx-auto aspect-[85.6/53.98] transition-all duration-1000 delay-400 ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Glow behind card */}
          <div className="absolute inset-0 scale-[1.3] bg-navy/10 rounded-full blur-[60px]" />
          <div className="relative w-full h-full animate-[float_5s_ease-in-out_infinite]">
            <Image
              src={IMAGES.cards.platinum}
              alt="EduPoint Platinum Card — statut obtinut prin merit"
              fill
              className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              sizes="320px"
            />
          </div>
          {/* Light sweep */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[3000ms] ${
              inView ? "translate-x-[300%]" : "-translate-x-[100%]"
            }`}
            style={{ transitionDelay: "1000ms" }}
          />
        </div>

        {/* Criteria — bordered cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {criteria.map((item, i) => (
            <div
              key={item.title}
              className={`p-6 rounded-xl bg-white/60 backdrop-blur-sm ring-1 ring-black/[0.04] transition-all duration-700 hover:ring-black/[0.08] hover:bg-white/80 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${800 + i * 150}ms` }}
            >
              <span className="text-[10px] font-mono text-blue/50">{item.number}</span>
              <h3 className="mt-2 font-bold text-navy text-[15px] tracking-[-0.01em]">{item.title}</h3>
              <p className="mt-2 text-sm text-graphite-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 transition-all duration-700 delay-[1200ms] ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Button href="/platinum" variant="ghost" className="text-navy">
            Descopera Platinum
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
