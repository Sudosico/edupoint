"use client";

import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const partnerCategories = [
  { icon: "📚", name: "Librarii" },
  { icon: "🏋️", name: "Sali de sport" },
  { icon: "🌍", name: "Limbi straine" },
  { icon: "🎭", name: "Evenimente" },
  { icon: "✏️", name: "Papetarii" },
  { icon: "💻", name: "Cursuri IT" },
  { icon: "🎓", name: "Universitati" },
  { icon: "☕", name: "Cafenele" },
];

const tierBenefits = [
  {
    tier: "Basic",
    color: "bg-ivory-warm border-oak/30",
    textColor: "text-navy",
    benefits: ["5% reducere la librarii partenere", "Acces la evenimente publice", "Newsletter oportunitati"],
  },
  {
    tier: "Pro",
    color: "bg-navy border-navy",
    textColor: "text-white",
    benefits: ["10% reducere la toti partenerii", "Acces prioritar la evenimente", "Workshopuri exclusive parteneri", "Reduceri sali de sport"],
  },
  {
    tier: "Premium",
    color: "bg-black border-black",
    textColor: "text-white",
    benefits: ["15-20% reducere la toti partenerii", "Invitatie la toate evenimentele", "Acces gratuit cursuri partenere", "Abonament sala de sport redus", "Networking cu parteneri"],
  },
];

export function PartnerSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section ref={ref} className="py-28 lg:py-36 px-6 lg:px-16 bg-ivory overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center">
          <span
            className={`inline-block text-xs font-medium tracking-[0.2em] uppercase text-graphite-light mb-6 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Ecosistem de parteneri
          </span>
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-[3.5rem] text-navy leading-[1.15] tracking-[-0.02em] transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Beneficii care te insotesc oriunde.
          </h2>

          <p
            className={`mt-5 text-graphite-light text-base max-w-lg mx-auto transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Librarii. Sali de sport. Cursuri de limbi straine. Evenimente.
            Reduceri si oportunitati la partenerii EduPoint.
          </p>
        </div>

        {/* Partner ticker — with fade edges */}
        <div
          className={`mt-14 transition-all duration-700 delay-300 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-ivory to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-ivory to-transparent z-10" />
            <div className="flex animate-[ticker_25s_linear_infinite] gap-4 w-max">
              {[...partnerCategories, ...partnerCategories, ...partnerCategories].map((cat, i) => (
                <div
                  key={`${cat.name}-${i}`}
                  className="flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-full shadow-sm ring-1 ring-black/[0.04] shrink-0 hover:ring-black/[0.08] transition-all"
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span className="text-sm font-medium text-navy whitespace-nowrap">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tier benefit cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {tierBenefits.map((item, i) => (
            <div
              key={item.tier}
              className={`rounded-2xl border p-6 ${item.color} transition-all duration-700 ${
                item.tier !== "Basic" ? "ring-1 ring-white/[0.06]" : "ring-1 ring-black/[0.04]"
              } ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${500 + i * 150}ms` }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div className={`w-2 h-2 rounded-full ${
                  item.tier === "Basic" ? "bg-oak" : item.tier === "Pro" ? "bg-blue" : "bg-white"
                }`} />
                <h3 className={`font-bold text-base tracking-[-0.01em] ${item.textColor}`}>
                  {item.tier}
                </h3>
              </div>
              <ul className="space-y-3">
                {item.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      item.tier === "Basic" ? "bg-oak/10" : "bg-white/10"
                    }`}>
                      <svg
                        className={`w-2.5 h-2.5 ${
                          item.tier === "Basic" ? "text-oak" : "text-blue-light"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span
                      className={`text-sm leading-snug ${
                        item.tier === "Basic"
                          ? "text-graphite"
                          : "text-white/70"
                      }`}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 text-center transition-all duration-700 delay-[1000ms] ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Button href="/partners" variant="ghost" className="text-navy">
            Vezi toti partenerii
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
