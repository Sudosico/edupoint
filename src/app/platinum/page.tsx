"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const criteria = [
  {
    icon: "⭐",
    title: "Excelenta",
    description: "Rezultate academice remarcabile si progres constant demonstrat pe parcursul timpului.",
  },
  {
    icon: "🔥",
    title: "Dedicare",
    description: "Prezenta activa in comunitate, participare la workshopuri si proiecte finalizate cu succes.",
  },
  {
    icon: "💡",
    title: "Impact",
    description: "Contributie reala in comunitatea EduPoint — leadership, mentorat peer-to-peer, initiative proprii.",
  },
];

const benefits = [
  "Tot ce include Premium — fara exceptie",
  "Acces prioritar la toate spatiile si evenimentele",
  "Platinum Wall — recunoastere publica in cladire",
  "Evenimente exclusive Platinum-only",
  "Scrisori de recomandare de la echipa EduPoint",
  "Mentorat personalizat cu experti din industrie",
  "Invitatie permanenta la Mentor Night VIP",
  "Badge Platinum pe profil si platforma",
];

const journey = [
  { tier: "Basic", color: "bg-ivory-warm border-oak/30", desc: "Incepe calatoria. Descopera ecosistemul." },
  { tier: "Pro", color: "bg-navy text-white border-navy", desc: "Construieste. Workshopuri, Career Lab, Studio." },
  { tier: "Premium", color: "bg-black text-white border-black", desc: "Exceleaza. Mentorat, strategie, plan personal." },
  { tier: "Platinum", color: "bg-gradient-to-r from-gray-300 to-gray-100 border-gray-300", desc: "Legendar. Castigat prin merit." },
];

export default function PlatinumPage() {
  const { ref: heroRef, inView: heroInView } = useInView(0.2);
  const { ref: critRef, inView: critInView } = useInView(0.2);
  const { ref: benRef, inView: benInView } = useInView(0.2);
  const { ref: jourRef, inView: jourInView } = useInView(0.2);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative py-36 lg:py-52 px-6 lg:px-16 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #F0F0F0 0%, #E8E8E8 25%, #E0E0E0 50%, #D8D8D8 75%, #E4E4E4 100%)" }}
      >
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 21px)",
        }} />
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <span
            className={`inline-block text-[10px] font-medium tracking-[0.3em] uppercase text-graphite-light/50 mb-6 transition-all duration-700 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Statut de excelenta
          </span>
          <h1
            className={`font-serif text-4xl sm:text-5xl lg:text-7xl text-navy leading-[1.08] tracking-[-0.02em] transition-all duration-700 delay-100 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Platinum nu se cumpara.
            <br />
            <span className="text-graphite-light">Se castiga.</span>
          </h1>

          <p
            className={`mt-5 text-graphite-light text-base max-w-md mx-auto transition-all duration-700 delay-200 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Statutul suprem in ecosistemul EduPoint. Rezervat celor care
            demonstreaza excelenta, dedicare si impact.
          </p>

          <div
            className={`mt-16 relative w-56 sm:w-72 mx-auto aspect-[85.6/53.98] transition-all duration-1000 delay-400 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 scale-[1.4] bg-navy/10 rounded-full blur-[60px]" />
            <div className="relative animate-[float_5s_ease-in-out_infinite]">
              <Image src={IMAGES.cards.platinum} alt="EduPoint Platinum Card" fill className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.25)]" sizes="288px" priority />
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[3000ms] ${
                heroInView ? "translate-x-[300%]" : "-translate-x-[100%]"
              }`}
              style={{ transitionDelay: "1000ms" }}
            />
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section ref={critRef} className="py-28 lg:py-36 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[900px] mx-auto">
          <span className="block text-xs font-medium tracking-[0.2em] uppercase text-graphite-light text-center mb-5">Criterii</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy text-center mb-16 tracking-[-0.02em]">
            Cum se obtine Platinum
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {criteria.map((c, i) => (
              <div
                key={c.title}
                className={`p-6 rounded-xl bg-white ring-1 ring-black/[0.04] hover:ring-black/[0.08] transition-all duration-700 ${
                  critInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <span className="text-[10px] font-mono text-blue/50">0{i + 1}</span>
                <h3 className="mt-2 font-bold text-navy text-[15px] tracking-[-0.01em]">{c.title}</h3>
                <p className="mt-2 text-sm text-graphite-light leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-navy">
        <div className="max-w-[700px] mx-auto">
          <h2
            className={`font-serif text-3xl sm:text-4xl text-white text-center mb-12 transition-all duration-700 ${
              benInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Ce primesti cu Platinum
          </h2>
          <ul className="space-y-4">
            {benefits.map((b, i) => (
              <li
                key={b}
                className={`flex items-start gap-3 transition-all duration-700 ${
                  benInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <svg className="w-5 h-5 text-gold-subtle mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/80">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journey Timeline */}
      <section ref={jourRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory-warm">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy text-center mb-14">
            Calatoria spre Platinum
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {journey.map((j, i) => (
              <div
                key={j.tier}
                className={`rounded-2xl border p-5 text-center transition-all duration-700 ${j.color} ${
                  jourInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <h3 className="font-semibold text-lg">{j.tier}</h3>
                <p className={`mt-2 text-sm ${j.tier === "Basic" || j.tier === "Platinum" ? "text-graphite-light" : "text-white/70"}`}>
                  {j.desc}
                </p>
                {i < journey.length - 1 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 text-graphite-light">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button href="/membership" size="lg">
              Incepe cu un abonament
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
