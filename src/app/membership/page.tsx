"use client";

import Image from "next/image";
import { useState } from "react";
import { IMAGES, MEMBERSHIP_TIERS } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const comparisonFeatures = [
  { name: "Acces Study Cafe", basic: true, pro: true, premium: true },
  { name: "Mini Library", basic: true, pro: true, premium: true },
  { name: "Panou Oportunitati", basic: true, pro: true, premium: true },
  { name: "Evenimente comunitare", basic: true, pro: true, premium: true },
  { name: "Wi-Fi premium", basic: true, pro: true, premium: true },
  { name: "Smart Card", basic: "Basic", pro: "Pro", premium: "Premium" },
  { name: "EduCredit lunar inclus", basic: "25 lei", pro: "150 lei", premium: "350 lei" },
  { name: "Workshopuri/luna", basic: false, pro: "2", premium: "4" },
  { name: "Career Lab sesiuni/luna", basic: false, pro: "1", premium: "2" },
  { name: "Team Project Room", basic: false, pro: true, premium: true },
  { name: "Project Studio", basic: false, pro: "2h/luna", premium: "5h/luna" },
  { name: "Interview Room", basic: false, pro: true, premium: true },
  { name: "Mentor personal dedicat", basic: false, pro: false, premium: true },
  { name: "Plan dezvoltare personalizat", basic: false, pro: false, premium: true },
  { name: "Raport lunar de progres", basic: false, pro: false, premium: true },
  { name: "Zona Studiu Linistita", basic: false, pro: false, premium: true },
  { name: "Lounge Premium", basic: false, pro: false, premium: true },
  { name: "Reduceri parteneri", basic: "5%", pro: "10%", premium: "15-20%" },
  { name: "Acces prioritar evenimente", basic: false, pro: true, premium: true },
  { name: "Welcome Kit", basic: false, pro: false, premium: true },
];

const cardShowcases = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Primul pas intr-un ecosistem complet.",
    description: "Acces la Study Cafe, Mini Library si evenimente comunitare. Tot ce ai nevoie ca sa incepi sa construiesti.",
    cardImage: IMAGES.cards.basic,
    visualImage: IMAGES.cards.basicVisualWater,
    bgClass: "bg-ivory-warm",
    textClass: "text-navy",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Dezvoltare practica. Rezultate concrete.",
    description: "Workshopuri, Career Lab, Project Studio si Interview Room. Totul pentru a-ti construi CV-ul, portofoliul si increderea.",
    cardImage: IMAGES.cards.pro,
    visualImage: IMAGES.cards.proVisualSmoke,
    bgClass: "bg-navy",
    textClass: "text-white",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Mentorat personal. Strategie. Excelenta.",
    description: "Mentor dedicat, plan de dezvoltare personalizat, acces complet la toate spatiile si un Welcome Kit premium.",
    cardImage: IMAGES.cards.premium,
    visualImage: IMAGES.cards.premiumVisualUnboxing,
    bgClass: "bg-black",
    textClass: "text-white",
  },
];

const eduCreditSteps = [
  { icon: "💳", title: "Primesti", description: "EduCredit lunar inclus in abonament — de la 25 lei (Basic) la 350 lei (Premium)." },
  { icon: "☕", title: "Cheltuiesti", description: "La EduPoint Cafe, workshopuri extra, resurse sau sesiuni suplimentare." },
  { icon: "🔄", title: "Reincarci", description: "Poti adauga oricand credite extra din contul tau online." },
];

const faqs = [
  { q: "Pot schimba abonamentul ulterior?", a: "Da. Poti face upgrade oricand. Downgrade-ul se aplica la finalul perioadei curente de facturare." },
  { q: "Exista contract pe termen lung?", a: "Nu. Abonamentele sunt lunare si poti anula oricand, fara penalizari." },
  { q: "Cum primesc Smart Card-ul?", a: "Dupa activarea abonamentului, cardul ajunge in 48 de ore. Il poti ridica de la receptie sau il primesti prin curier." },
  { q: "Ce se intampla cu EduCredit-urile nefolosite?", a: "EduCredit-urile neutilizate se reseteaza la inceputul fiecarei luni. Iti recomandam sa le folosesti pe toate!" },
  { q: "Pot folosi cardul la parteneri din prima zi?", a: "Da. Din momentul in care primesti cardul, ai acces la toate reducerile si beneficiile partenere aferente tier-ului tau." },
  { q: "Ce inseamna Platinum?", a: "Platinum nu este un abonament — este un statut castigat prin excelenta, dedicare si impact in comunitate. Nu se poate cumpara." },
  { q: "Pot anula in timpul lunii?", a: "Da. Daca anulezi, ai acces pana la finalul perioadei platite. Nu exista taxe de anulare." },
  { q: "Abonamentul include acces la cafe?", a: "Da. Toti membrii au acces la zona de studiu a EduPoint Cafe. Consumatiile se platesc separat sau cu EduCredit." },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return (
    <svg className="w-5 h-5 text-success mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
  if (value === false) return <span className="text-graphite-light">—</span>;
  return <span className="text-sm font-medium">{value}</span>;
}

export default function MembershipPage() {
  const { ref: heroRef, inView: heroInView } = useInView(0.2);
  const { ref: tableRef, inView: tableInView } = useInView(0.1);
  const { ref: creditRef, inView: creditInView } = useInView(0.2);
  const { ref: platRef, inView: platInView } = useInView(0.2);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative py-36 lg:py-48 px-6 lg:px-16 bg-navy overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,127,255,0.08)_0%,transparent_60%)]" />
        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <span
            className={`inline-block text-[10px] font-medium tracking-[0.25em] uppercase text-blue-light/50 mb-6 transition-all duration-700 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Membership
          </span>
          <h1
            className={`font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.08] tracking-[-0.02em] transition-all duration-700 delay-100 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Cardul tau. Lumea ta.
          </h1>
          <p
            className={`mt-5 text-white/50 text-base lg:text-lg max-w-lg mx-auto transition-all duration-700 delay-200 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Alege abonamentul care ti se potriveste si primesti acces la
            intregul ecosistem EduPoint.
          </p>

          <div
            className={`mt-16 flex justify-center gap-4 sm:gap-8 lg:gap-10 transition-all duration-700 delay-400 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[IMAGES.cards.basic, IMAGES.cards.pro, IMAGES.cards.premium, IMAGES.cards.platinum].map((src, i) => (
              <div
                key={src}
                className="relative w-20 sm:w-28 lg:w-36 aspect-[85.6/53.98] transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                style={{ transitionDelay: `${500 + i * 100}ms` }}
              >
                <Image src={src} alt="" fill className="object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.3)]" sizes="150px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-28 lg:py-36 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {MEMBERSHIP_TIERS.map((tier, i) => {
              const isRec = "recommended" in tier && tier.recommended;
              const isDark = tier.color === "navy" || tier.color === "black";
              return (
                <div
                  key={tier.id}
                  className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isDark
                      ? tier.color === "navy"
                        ? "bg-navy text-white ring-1 ring-white/[0.06]"
                        : "bg-black text-white ring-1 ring-white/[0.06]"
                      : "bg-white text-navy ring-1 ring-black/[0.04]"
                  } ${isRec ? "md:scale-[1.03] md:z-10 shadow-xl ring-2 ring-blue" : "shadow-md"}`}
                >
                  {isRec && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-[0.15em] uppercase shadow-lg shadow-blue/25">
                      Recomandat
                    </span>
                  )}
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className={`w-2 h-2 rounded-full ${
                      tier.color === "ivory" ? "bg-oak" : tier.color === "navy" ? "bg-blue" : "bg-white"
                    }`} />
                    <h3 className="text-lg font-bold tracking-[-0.01em]">{tier.name}</h3>
                  </div>
                  <p className={`text-sm ${isDark ? "text-white/50" : "text-graphite-light"}`}>
                    {tier.tagline}
                  </p>
                  <div className="mt-6 pb-6 border-b ${isDark ? 'border-white/[0.06]' : 'border-navy/[0.06]'} flex items-baseline gap-1.5">
                    <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                    <span className={`text-sm font-medium ${isDark ? "text-white/40" : "text-graphite-light"}`}>
                      lei/luna
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isDark ? "bg-white/10" : "bg-success/10"}`}>
                          <svg className={`w-2.5 h-2.5 ${isDark ? "text-blue-light" : "text-success"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className={`text-sm leading-snug ${isDark ? "text-white/70" : "text-graphite"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href="/join"
                      variant={isRec ? "primary" : "ghost"}
                      size="md"
                      className={`w-full ${!isRec && !isDark ? "text-navy" : ""} ${!isRec && isDark ? "text-white border border-white/30 hover:bg-white/10" : ""}`}
                    >
                      Incepe acum
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section ref={tableRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory-warm">
        <div className="max-w-[1100px] mx-auto">
          <h2
            className={`font-serif text-3xl sm:text-4xl text-navy text-center mb-12 transition-all duration-700 ${
              tableInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Compara abonamentele
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-navy w-[40%]">Beneficiu</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-navy">Basic</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-blue">Pro ⭐</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-navy">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((f, i) => (
                  <tr key={f.name} className={i % 2 === 0 ? "bg-gray-50/50" : ""}>
                    <td className="py-3 px-6 text-sm text-graphite">{f.name}</td>
                    <td className="py-3 px-4 text-center"><CellValue value={f.basic} /></td>
                    <td className="py-3 px-4 text-center bg-blue/[0.03]"><CellValue value={f.pro} /></td>
                    <td className="py-3 px-4 text-center"><CellValue value={f.premium} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Card Deep-Dives */}
      {cardShowcases.map((card, i) => (
        <CardShowcase key={card.id} card={card} index={i} />
      ))}

      {/* EduCredit Explainer */}
      <section ref={creditRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[900px] mx-auto text-center">
          <h2
            className={`font-serif text-3xl sm:text-4xl text-navy transition-all duration-700 ${
              creditInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            EduCredit — moneda ta in ecosistem.
          </h2>
          <p
            className={`mt-4 text-graphite-light text-lg max-w-lg mx-auto transition-all duration-700 delay-200 ${
              creditInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Fiecare abonament include EduCredit lunar pe care il folosesti in
            tot ecosistemul EduPoint.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {eduCreditSteps.map((step, i) => (
              <div
                key={step.title}
                className={`transition-all duration-700 ${
                  creditInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${400 + i * 150}ms` }}
              >
                <span className="text-4xl">{step.icon}</span>
                <h3 className="mt-4 font-semibold text-navy text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-graphite-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platinum Teaser */}
      <section
        ref={platRef}
        className="py-24 lg:py-32 px-6 lg:px-16"
        style={{ background: "linear-gradient(135deg, #E8E8E8 0%, #F5F5F5 30%, #E0E0E0 70%, #D0D0D0 100%)" }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <h2
            className={`font-serif text-3xl sm:text-4xl text-navy transition-all duration-700 ${
              platInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Platinum nu se cumpara. Se castiga.
          </h2>
          <p
            className={`mt-4 text-graphite-light max-w-md mx-auto transition-all duration-700 delay-200 ${
              platInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Statutul suprem, rezervat membrilor care demonstreaza excelenta
            constanta, dedicare si impact real in comunitate.
          </p>
          <div
            className={`mt-10 relative w-48 sm:w-64 mx-auto aspect-[85.6/53.98] transition-all duration-1000 delay-400 ${
              platInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="animate-[float_4s_ease-in-out_infinite]">
              <Image src={IMAGES.cards.platinum} alt="EduPoint Platinum Card" fill className="object-contain drop-shadow-2xl" sizes="256px" />
            </div>
          </div>
          <div className={`mt-10 transition-all duration-700 delay-600 ${platInView ? "opacity-100" : "opacity-0"}`}>
            <Button href="/platinum" variant="ghost" className="text-navy">
              Descopera Platinum &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy text-center mb-12">
            Intrebari frecvente
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-sm font-medium text-navy pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-graphite-light shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-sm text-graphite-light leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 lg:px-16 bg-navy text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white">
          Alege abonamentul tau.
        </h2>
        <p className="mt-4 text-white/60 max-w-md mx-auto">
          Fara contract. Poti anula oricand. Acces din prima zi.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/join" size="lg">Devino Membru</Button>
          <Button href="/contact" variant="secondary" size="lg">Programeaza o vizita</Button>
        </div>
      </section>
    </>
  );
}

function CardShowcase({ card, index }: { card: typeof cardShowcases[number]; index: number }) {
  const { ref, inView } = useInView(0.2);
  const reversed = index % 2 === 1;

  return (
    <section ref={ref} className={`py-20 lg:py-28 px-6 lg:px-16 ${card.bgClass}`}>
      <div className={`max-w-[1100px] mx-auto flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}>
        <div className="w-full lg:w-1/2">
          <div
            className={`relative aspect-[16/10] rounded-2xl overflow-hidden transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Image src={card.visualImage} alt={card.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div
            className={`relative w-32 aspect-[85.6/53.98] mb-6 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Image src={card.cardImage} alt={`${card.name} Card`} fill className="object-contain drop-shadow-lg" sizes="128px" />
          </div>
          <h3
            className={`font-serif text-2xl sm:text-3xl ${card.textClass} transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {card.tagline}
          </h3>
          <p
            className={`mt-4 text-base leading-relaxed ${
              card.id === "basic" ? "text-graphite-light" : "text-white/70"
            } transition-all duration-700 delay-400 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {card.description}
          </p>
          <div className={`mt-8 transition-all duration-700 delay-500 ${inView ? "opacity-100" : "opacity-0"}`}>
            <Button
              href="/join"
              variant={card.id === "basic" ? "ghost" : "primary"}
              className={card.id === "basic" ? "text-navy" : ""}
            >
              Alege {card.name} &rarr;
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
