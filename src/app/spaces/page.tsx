"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const floors = [
  {
    name: "Parter",
    rooms: [
      { name: "Receptie & Check-in", description: "Punct de acces cu tablete pentru check-in Smart Card.", tier: "Toti membrii", image: IMAGES.building.receptionPeople },
      { name: "EduPoint Cafe", description: "Cafenea cu zona publica si zona exclusiva pentru membri.", tier: "Public + Membri", image: IMAGES.building.studyCafePeople },
      { name: "Mini Library", description: "Carti de business, cariera, Erasmus, limbi straine.", tier: "Toti membrii", image: null },
      { name: "Panou Oportunitati", description: "Stagii, concursuri, burse, proiecte — actualizat saptamanal.", tier: "Toti membrii", image: null },
    ],
  },
  {
    name: "Etaj 1 — Career & Projects",
    rooms: [
      { name: "Career Lab", description: "CV, portofoliu, interviu, orientare facultate, Erasmus.", tier: "Pro / Premium", image: IMAGES.building.careerLabPeople },
      { name: "Sala Workshop-uri", description: "Workshopuri tematice cu mese modulare si ecran prezentare.", tier: "Pro / Premium", image: null },
      { name: "Team Project Room", description: "Spatiu colaborativ pentru proiecte de echipa.", tier: "Pro / Premium", image: null },
      { name: "Interview Room", description: "Simulari de interviu si pregatire profesionala.", tier: "Pro / Premium", image: null },
      { name: "Vestiare Focus", description: "Lockere pentru concentrare fara distractii.", tier: "Pro / Premium", image: null },
    ],
  },
  {
    name: "Etaj 2 — Premium Floor",
    rooms: [
      { name: "Project Studio", description: "Podcast, CV video, pitch deck, portofoliu digital.", tier: "Pro / Premium", image: IMAGES.building.studioPeople },
      { name: "Sala Prezentari", description: "Demo Day, prezentari proiecte, pitching.", tier: "Premium", image: null },
      { name: "Zona Studiu Linistita", description: "Spatiu dedicat studiului individual in liniste.", tier: "Premium", image: null },
      { name: "Mentorat Premium", description: "Sesiuni 1-la-1 cu mentor personal dedicat.", tier: "Premium", image: null },
      { name: "Lounge Premium", description: "Networking privat si relaxare pentru membrii Premium.", tier: "Premium", image: null },
    ],
  },
];

function TierBadge({ tier }: { tier: string }) {
  const color = tier.includes("Public")
    ? "bg-success/10 text-success"
    : tier.includes("Premium") && !tier.includes("Pro")
    ? "bg-black text-white"
    : tier.includes("Pro")
    ? "bg-navy/10 text-navy"
    : "bg-blue/10 text-blue";

  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${color}`}>
      {tier}
    </span>
  );
}

export default function SpacesPage() {
  const { ref: heroRef, inView: heroInView } = useInView(0.2);

  return (
    <>
      {/* Hero — Bird's Eye */}
      <section ref={heroRef} className="relative py-36 lg:py-48 px-6 lg:px-16 bg-ivory-warm overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <span
              className={`inline-block text-xs font-medium tracking-[0.2em] uppercase text-graphite-light mb-6 transition-all duration-700 ${
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Spatii dedicate
            </span>
            <h1
              className={`font-serif text-4xl sm:text-5xl lg:text-7xl text-navy leading-[1.08] tracking-[-0.02em] transition-all duration-700 delay-100 ${
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Un campus complet.
              <br />
              <span className="text-graphite-light">Intr-o singura cladire.</span>
            </h1>
          </div>

          <div
            className={`mt-16 relative w-full max-w-4xl mx-auto aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-navy/10 ring-1 ring-black/[0.04] transition-all duration-1000 delay-300 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Image src={IMAGES.building.birdsEye} alt="EduPoint — vedere de sus" fill className="object-cover" sizes="100vw" priority />
          </div>
        </div>
      </section>

      {/* Floor by Floor */}
      {floors.map((floor, fi) => (
        <FloorSection key={floor.name} floor={floor} index={fi} />
      ))}

      {/* CTA */}
      <section className="py-20 px-6 lg:px-16 bg-navy text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white">
          Vrei sa vezi totul in persoana?
        </h2>
        <p className="mt-4 text-white/60 max-w-md mx-auto">
          Programeaza un tur al cladirii sau devino membru direct.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg">Programeaza un tur</Button>
          <Button href="/membership" variant="secondary" size="lg">Devino Membru</Button>
        </div>
      </section>
    </>
  );
}

function FloorSection({ floor, index }: { floor: typeof floors[number]; index: number }) {
  const { ref, inView } = useInView(0.1);
  const bg = index % 2 === 0 ? "bg-ivory" : "bg-ivory-warm";

  return (
    <section ref={ref} className={`py-28 lg:py-36 px-6 lg:px-16 ${bg}`}>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] font-mono text-blue/50">0{index + 1}</span>
          <h2
            className={`font-serif text-2xl sm:text-3xl text-navy transition-all duration-700 tracking-[-0.01em] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {floor.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {floor.rooms.map((room, i) => (
            <div
              key={room.name}
              className={`bg-white rounded-2xl ring-1 ring-black/[0.04] shadow-sm overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-lg hover:ring-black/[0.08] ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              {room.image && (
                <div className="relative aspect-[16/10]">
                  <Image src={room.image} alt={room.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-bold text-navy text-[15px] tracking-[-0.01em]">{room.name}</h3>
                <p className="mt-2 text-sm text-graphite-light leading-relaxed">{room.description}</p>
                <div className="mt-3">
                  <TierBadge tier={room.tier} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
