"use client";

import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const partnerCategories = [
  { icon: "📚", name: "Librarii", description: "Reduceri la carti, materiale scolare si resurse educationale." },
  { icon: "🏋️", name: "Sali de sport", description: "Abonamente reduse si acces la programe fitness." },
  { icon: "🌍", name: "Cursuri limbi straine", description: "Reduceri la cursuri de engleza, franceza, germana si altele." },
  { icon: "🎭", name: "Evenimente", description: "Acces prioritar sau redus la conferinte, TEDx, hackathoane." },
  { icon: "✏️", name: "Papetarii", description: "Reduceri la rechizite, printare si materiale creative." },
  { icon: "💻", name: "Cursuri IT", description: "Reduceri la cursuri de programare, design si marketing digital." },
];

const tierBenefits = [
  {
    tier: "Basic",
    discount: "5%",
    perks: ["Reduceri de baza la librarii", "Acces la evenimente publice", "Newsletter oportunitati"],
    color: "bg-ivory-warm border-oak/30",
    textColor: "text-graphite",
  },
  {
    tier: "Pro",
    discount: "10%",
    perks: ["Reduceri la toti partenerii", "Acces prioritar la evenimente", "Workshopuri exclusive parteneri", "Reduceri sali de sport"],
    color: "bg-navy text-white border-navy",
    textColor: "text-white/70",
  },
  {
    tier: "Premium",
    discount: "15-20%",
    perks: ["Reduceri maxime la toti partenerii", "Invitatie la toate evenimentele", "Acces gratuit cursuri partenere", "Abonament sala de sport redus", "Networking cu parteneri"],
    color: "bg-black text-white border-black",
    textColor: "text-white/70",
  },
];

export default function PartnersPage() {
  const { ref: catRef, inView: catInView } = useInView(0.1);
  const { ref: tierRef, inView: tierInView } = useInView(0.2);
  const { ref: becomeRef, inView: becomeInView } = useInView(0.2);

  return (
    <>
      {/* Hero */}
      <section className="py-32 lg:py-44 px-6 lg:px-16 bg-ivory-warm">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-navy leading-[1.1] tracking-tight">
            Beneficii dincolo de cladire.
          </h1>
          <p className="mt-5 text-graphite-light text-lg max-w-lg mx-auto">
            Smart Card-ul tau EduPoint iti deschide usi la parteneri din tot
            orasul.
          </p>
        </div>
      </section>

      {/* Partner Categories */}
      <section ref={catRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy text-center mb-14">
            Categorii de parteneri
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCategories.map((p, i) => (
              <div
                key={p.name}
                className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-md ${
                  catInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-3xl">{p.icon}</span>
                <h3 className="mt-4 font-semibold text-navy">{p.name}</h3>
                <p className="mt-2 text-sm text-graphite-light leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier Benefits */}
      <section ref={tierRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory-warm">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy text-center mb-14">
            Beneficii pe nivel de abonament
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {tierBenefits.map((t, i) => (
              <div
                key={t.tier}
                className={`rounded-2xl border p-6 ${t.color} transition-all duration-700 ${
                  tierInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-lg">{t.tier}</h3>
                  <span className="text-2xl font-bold">{t.discount}</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${t.tier === "Basic" ? "text-oak" : "text-blue-light"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${t.textColor}`}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Partner */}
      <section ref={becomeRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[700px] mx-auto text-center">
          <h2
            className={`font-serif text-3xl sm:text-4xl text-navy transition-all duration-700 ${
              becomeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Vrei sa devii partener?
          </h2>
          <p
            className={`mt-4 text-graphite-light max-w-md mx-auto transition-all duration-700 delay-200 ${
              becomeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Ofera reduceri membrilor EduPoint si conecteaza-te cu o comunitate
            de tineri ambitiosi din orasul tau.
          </p>
          <div className={`mt-8 transition-all duration-700 delay-400 ${becomeInView ? "opacity-100" : "opacity-0"}`}>
            <Button href="/join" size="lg">Devino Partener</Button>
          </div>
        </div>
      </section>
    </>
  );
}
