"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const services = [
  { icon: "📄", title: "CV Profesional", description: "Construieste un CV care te diferentiaza, adaptat obiectivelor tale." },
  { icon: "📝", title: "Scrisoare de Intentie", description: "Invata sa comunici motivatia si potentialul tau cu claritate." },
  { icon: "💼", title: "Portofoliu", description: "Creaza un portofoliu digital care iti prezinta proiectele si competentele." },
  { icon: "🎤", title: "Simulare Interviu", description: "Practica interviuri reale cu feedback detaliat de la mentori." },
  { icon: "🎓", title: "Orientare Facultate", description: "Descopera programele universitare potrivite profilului si aspiratiilor tale." },
  { icon: "🌍", title: "Ghidare Erasmus", description: "Pregatire completa pentru aplicatii Erasmus+ si burse internationale." },
];

const steps = [
  { num: "01", title: "Programeaza", description: "Alege o data disponibila din calendarul online sau de la receptie." },
  { num: "02", title: "Lucreaza cu mentorul", description: "Sesiune 1-la-1 focusata pe obiectivele tale specifice." },
  { num: "03", title: "Pleaca cu rezultate", description: "CV finalizat, portofoliu actualizat sau plan de actiune clar." },
];

const tierAccess = [
  { tier: "Basic", access: "Sesiuni contra cost (EduCredit sau lei)", color: "bg-ivory-warm border-oak/30" },
  { tier: "Pro", access: "1 sesiune/luna inclusa", color: "bg-navy text-white border-navy" },
  { tier: "Premium", access: "2 sesiuni/luna incluse + prioritate", color: "bg-black text-white border-black" },
];

export default function CareerLabPage() {
  const { ref: heroRef, inView: heroInView } = useInView(0.2);
  const { ref: servRef, inView: servInView } = useInView(0.1);
  const { ref: stepsRef, inView: stepsInView } = useInView(0.2);
  const { ref: immRef, inView: immInView } = useInView(0.2);
  const { ref: parentRef, inView: parentInView } = useInView(0.2);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[450px] overflow-hidden">
        <Image src={IMAGES.building.careerLabClean} alt="Career Lab" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <span
            className={`inline-block text-[10px] font-medium tracking-[0.25em] uppercase text-white/40 mb-5 transition-all duration-700 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Career Lab
          </span>
          <h1
            className={`font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.08] tracking-[-0.02em] transition-all duration-700 delay-100 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Directia bate confuzia.
          </h1>
          <p
            className={`mt-5 text-white/60 text-base lg:text-lg max-w-lg transition-all duration-700 delay-200 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            CV. Portofoliu. Interviu. Facultate. Erasmus. Totul intr-un singur
            loc.
          </p>
        </div>
      </section>

      {/* Service Grid */}
      <section ref={servRef} className="py-28 lg:py-36 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[1100px] mx-auto">
          <span className="block text-xs font-medium tracking-[0.2em] uppercase text-graphite-light text-center mb-5">Servicii</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3rem] text-navy text-center mb-16 tracking-[-0.02em]">
            Ce poti face in Career Lab
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`bg-white rounded-2xl p-6 ring-1 ring-black/[0.04] shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-lg hover:ring-black/[0.08] ${
                  servInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-[10px] font-mono text-blue/50">0{i + 1}</span>
                <h3 className="mt-3 font-bold text-navy text-[15px] tracking-[-0.01em]">{s.title}</h3>
                <p className="mt-2 text-sm text-graphite-light leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={stepsRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory-warm">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy text-center mb-14">
            Cum functioneaza
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`text-center transition-all duration-700 ${
                  stepsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <span className="text-5xl font-bold text-blue/20">{s.num}</span>
                <h3 className="mt-3 font-semibold text-navy text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-graphite-light">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Visual */}
      <section ref={immRef} className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image src={IMAGES.building.careerLabPeople} alt="Career Lab in actiune" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-end pb-12 px-6 lg:px-16">
          <p
            className={`font-serif text-2xl sm:text-3xl text-white max-w-lg transition-all duration-700 ${
              immInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            &ldquo;Nu trebuie sa stii totul. Trebuie sa stii unde sa incepi.&rdquo;
          </p>
        </div>
      </section>

      {/* Tier Access */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy text-center mb-12">
            Acces pe nivel de abonament
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {tierAccess.map((t) => (
              <div key={t.tier} className={`rounded-2xl border p-6 text-center ${t.color}`}>
                <h3 className="font-semibold text-lg">{t.tier}</h3>
                <p className={`mt-2 text-sm ${t.tier === "Basic" ? "text-graphite-light" : "text-white/70"}`}>
                  {t.access}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Trust */}
      <section ref={parentRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory-warm">
        <div className="max-w-[700px] mx-auto text-center">
          <h2
            className={`font-serif text-3xl sm:text-4xl text-navy transition-all duration-700 ${
              parentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            De ce conteaza Career Lab
          </h2>
          <p
            className={`mt-6 text-graphite-light leading-relaxed transition-all duration-700 delay-200 ${
              parentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Scoala pregateste pentru examene. Career Lab pregateste pentru viata
            reala. Copilul tau invata sa se prezinte profesional, sa isi
            construiasca un portofoliu si sa ia decizii informate despre
            facultate si cariera — cu sprijinul unor mentori cu experienta.
          </p>
          <div className={`mt-10 transition-all duration-700 delay-400 ${parentInView ? "opacity-100" : "opacity-0"}`}>
            <Button href="/join" size="lg">Programeaza prima sesiune</Button>
          </div>
        </div>
      </section>
    </>
  );
}
