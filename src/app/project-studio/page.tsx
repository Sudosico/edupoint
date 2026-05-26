"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const outputs = [
  { icon: "🎙️", title: "Podcast", description: "Inregistreaza episoade profesionale cu echipament de studio." },
  { icon: "🎬", title: "CV Video", description: "Creeaza un CV video care te diferentiaza de orice alt candidat." },
  { icon: "📊", title: "Pitch Deck", description: "Prezentari de impact pentru proiecte, concursuri sau admitere." },
  { icon: "🖥️", title: "Portofoliu Digital", description: "Construieste un portofoliu online cu proiectele tale." },
  { icon: "🌍", title: "Materiale Erasmus", description: "Video motivationale si prezentari pentru aplicatii internationale." },
  { icon: "📸", title: "Content Creator", description: "Filmeaza si editeaza continut pentru social media profesional." },
];

const equipment = [
  "Microfon profesional de studio",
  "Camera video 4K pe trepied",
  "Softbox-uri si iluminare profesionala",
  "Ecran prezentare + teleprompter",
  "Laptopuri cu software de editare",
  "Fundal verde (green screen)",
];

export default function ProjectStudioPage() {
  const { ref: heroRef, inView: heroInView } = useInView(0.2);
  const { ref: outRef, inView: outInView } = useInView(0.1);
  const { ref: eqRef, inView: eqInView } = useInView(0.2);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[450px] overflow-hidden">
        <Image src={IMAGES.building.studioClean} alt="Project Studio" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <div
            className={`flex items-center gap-2 mb-4 transition-all duration-700 ${
              heroInView ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-3 h-3 bg-error rounded-full animate-[pulse-glow_2s_ease-in-out_infinite]" />
            <span className="text-error text-sm font-semibold tracking-wider">REC</span>
          </div>
          <h1
            className={`font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.1] tracking-tight transition-all duration-700 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Ideile tale merita
            <br />sa fie vazute.
          </h1>
          <p
            className={`mt-5 text-white/70 text-lg max-w-lg transition-all duration-700 delay-200 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Podcast. CV video. Pitch deck. Portofoliu digital. Totul incepe in
            studio.
          </p>
        </div>
      </section>

      {/* Output Types */}
      <section ref={outRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy text-center mb-14">
            Ce poti crea in studio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {outputs.map((o, i) => (
              <div
                key={o.title}
                className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-md ${
                  outInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-3xl">{o.icon}</span>
                <h3 className="mt-4 font-semibold text-navy">{o.title}</h3>
                <p className="mt-2 text-sm text-graphite-light leading-relaxed">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image src={IMAGES.building.studioPeople} alt="Studenti in Project Studio" fill className="object-cover" sizes="100vw" />
      </section>

      {/* Equipment + Access */}
      <section ref={eqRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory-warm">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2
              className={`font-serif text-3xl text-navy mb-8 transition-all duration-700 ${
                eqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Echipament profesional
            </h2>
            <ul className="space-y-3">
              {equipment.map((e, i) => (
                <li
                  key={e}
                  className={`flex items-center gap-3 transition-all duration-700 ${
                    eqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <svg className="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-graphite">{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              className={`font-serif text-3xl text-navy mb-8 transition-all duration-700 delay-100 ${
                eqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Acces si rezervari
            </h2>
            <div className="space-y-4">
              <div className="bg-navy rounded-xl p-5 text-white">
                <h3 className="font-semibold">Pro</h3>
                <p className="mt-1 text-sm text-white/70">2 ore/luna incluse. Rezervare din platforma.</p>
              </div>
              <div className="bg-black rounded-xl p-5 text-white">
                <h3 className="font-semibold">Premium</h3>
                <p className="mt-1 text-sm text-white/70">5 ore/luna incluse. Acces prioritar + sesiuni extra.</p>
              </div>
            </div>
            <div className="mt-8">
              <Button href="/join" size="lg">Rezerva studioul</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
