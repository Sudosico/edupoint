"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const zones = [
  {
    icon: "☕",
    title: "Zona Publica",
    description: "Deschisa tuturor. Comanda o cafea, deschide laptopul si lucreaza intr-un spatiu proiectat pentru productivitate.",
  },
  {
    icon: "🔑",
    title: "Zona Membri",
    description: "Acces exclusiv cu Smart Card. Locuri dedicate, prize la fiecare masa, liniste si focusare.",
  },
  {
    icon: "📚",
    title: "Mini Library",
    description: "Carti de business, cariera, Erasmus, limbi straine si dezvoltare personala — gratuit pentru membri.",
  },
];

const events = [
  { title: "Mentor Night", description: "Seara de networking cu antreprenori si profesionisti.", frequency: "Lunar" },
  { title: "Study Sessions", description: "Sesiuni tematice de studiu in grup cu moderator.", frequency: "Saptamanal" },
  { title: "Book Club", description: "Discutii despre carti de business si dezvoltare personala.", frequency: "Bilunar" },
];

export default function CafePage() {
  const { ref: heroRef, inView: heroInView } = useInView(0.2);
  const { ref: zonesRef, inView: zonesInView } = useInView(0.2);
  const { ref: eventsRef, inView: eventsInView } = useInView(0.2);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[450px] overflow-hidden">
        <Image src={IMAGES.building.studyCafeClean} alt="EduPoint Cafe" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 px-6 text-center">
          <h1
            className={`font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.1] tracking-tight transition-all duration-700 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Cafea cu scop.
          </h1>
          <p
            className={`mt-5 text-white/70 text-lg max-w-lg transition-all duration-700 delay-200 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Un loc unde ideile se nasc, conversatiile conteaza si viitorul se
            planuieste la o cafea.
          </p>
        </div>
      </section>

      {/* Two Zones */}
      <section ref={zonesRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy text-center mb-14">
            Doua zone, un singur loc.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {zones.map((z, i) => (
              <div
                key={z.title}
                className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-700 ${
                  zonesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <span className="text-3xl">{z.icon}</span>
                <h3 className="mt-4 font-semibold text-navy">{z.title}</h3>
                <p className="mt-2 text-sm text-graphite-light leading-relaxed">{z.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Image */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image src={IMAGES.building.studyCafePeople} alt="Studenti in EduPoint Cafe" fill className="object-cover" sizes="100vw" />
      </section>

      {/* Events */}
      <section ref={eventsRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory-warm">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy text-center mb-14">
            Evenimente la cafenea
          </h2>
          <div className="space-y-4">
            {events.map((e, i) => (
              <div
                key={e.title}
                className={`bg-white rounded-xl p-6 border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-4 transition-all duration-700 ${
                  eventsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-navy">{e.title}</h3>
                  <p className="mt-1 text-sm text-graphite-light">{e.description}</p>
                </div>
                <span className="text-xs font-medium text-blue bg-blue/10 px-3 py-1 rounded-full self-start sm:self-center">
                  {e.frequency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-8">
            Viziteaza-ne
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Program</h3>
              <p className="mt-3 text-graphite-light text-sm leading-relaxed">
                Luni — Vineri: 08:00 — 21:00<br />
                Sambata: 09:00 — 18:00<br />
                Duminica: Inchis
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Plata</h3>
              <p className="mt-3 text-graphite-light text-sm leading-relaxed">
                Cash, card bancar sau EduCredit.<br />
                Membrii beneficiaza de reduceri la consumatie.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">Viziteaza-ne</Button>
            <Button href="/membership" variant="ghost">Devino Membru &rarr;</Button>
          </div>
        </div>
      </section>
    </>
  );
}
