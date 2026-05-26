"use client";

import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

const stats = [
  { value: 138, suffix: "+", label: "Elevi interesati din cercetare", icon: "📊" },
  { value: 85, suffix: "%", label: "Ar plati pentru orientare in cariera", icon: "🎯" },
  { value: 92, suffix: "%", label: "Vor un spatiu de studiu comunitar", icon: "📚" },
  { value: 7, suffix: "", label: "Spatii dedicate in ecosistem", icon: "🏠" },
];

const insights = [
  {
    title: "Nevoia de directie profesionala",
    description: "85% dintre respondenti au declarat ca ar plati pentru servicii de orientare in cariera — CV, portofoliu, simulare interviu.",
    percentage: 85,
    color: "bg-blue",
  },
  {
    title: "Lipsa unui spatiu de studiu adecvat",
    description: "92% isi doresc un spatiu modern de studiu cu Wi-Fi, cafea si o atmosfera productiva.",
    percentage: 92,
    color: "bg-success",
  },
  {
    title: "Interes pentru workshopuri practice",
    description: "78% vor workshopuri pe teme practice: public speaking, leadership, proiecte reale.",
    percentage: 78,
    color: "bg-oak",
  },
  {
    title: "Dorinta de comunitate",
    description: "70% cauta o comunitate de tineri cu aceleasi ambitii — networking, proiecte de echipa, evenimente.",
    percentage: 70,
    color: "bg-navy",
  },
];

const testimonials = [
  { quote: "Am nevoie de un loc unde pot lucra la proiecte reale, nu doar teorie.", author: "Elev, 16 ani, Cluj-Napoca" },
  { quote: "As vrea sa stiu cum sa-mi fac un CV si un portofoliu inainte de facultate.", author: "Elev, 17 ani, Cluj-Napoca" },
  { quote: "Un spatiu de studiu cu cafenea si workshop-uri saptamanale ar fi exact ce ne lipseste.", author: "Elev, 15 ani, Cluj-Napoca" },
  { quote: "Daca ar exista un card care sa imi dea acces la reduceri si la un studio, m-as inscrie imediat.", author: "Elev, 16 ani, Cluj-Napoca" },
  { quote: "Vreau sa fac un podcast si sa-mi construiesc un portofoliu digital.", author: "Elev, 17 ani, Cluj-Napoca" },
  { quote: "Nu stiu ce vreau sa fac dupa liceu. Am nevoie de ghidare, nu doar de note.", author: "Elev, 16 ani, Cluj-Napoca" },
];

const milestones = [
  { icon: "📋", title: "Cercetare de piata", description: "138 de chestionare completate care au validat conceptul.", status: "Finalizat" },
  { icon: "📐", title: "Design de spatiu", description: "Render-uri complete pentru toate cele 7 spatii ale cladirii.", status: "Finalizat" },
  { icon: "💳", title: "Sistem de membership", description: "3 tiere + Platinum, EduCredit, Smart Card — proiectate si validate.", status: "Finalizat" },
  { icon: "🌐", title: "Platforma web", description: "Website complet cu aplicare online, prezentare spatii si abonamente.", status: "Finalizat" },
  { icon: "🤝", title: "Parteneriate", description: "Discutii active cu librarii, sali de sport si centre de cursuri.", status: "In progres" },
  { icon: "🏗️", title: "Lansare", description: "Deschiderea primului flagship EduPoint.", status: "In curand" },
];

function AnimatedCounter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target]);

  return <span className="tabular-nums">{count}{suffix}</span>;
}

function ProgressBar({ percentage, color, active }: { percentage: number; color: string; active: boolean }) {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full ${color} transition-all duration-1000 ease-out`}
        style={{ width: active ? `${percentage}%` : "0%" }}
      />
    </div>
  );
}

export default function ResultsPage() {
  const { ref: statsRef, inView: statsInView } = useInView(0.2);
  const { ref: insightRef, inView: insightInView } = useInView(0.15);
  const { ref: testRef, inView: testInView } = useInView(0.15);
  const { ref: timeRef, inView: timeInView } = useInView(0.15);

  return (
    <>
      {/* Hero */}
      <section className="py-32 lg:py-44 px-6 lg:px-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative max-w-[800px] mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.1] tracking-tight">
            Rezultate care vorbesc.
          </h1>
          <p className="mt-5 text-white/60 text-lg max-w-lg mx-auto">
            Numere reale din cercetarea de piata EduPoint. 138 de raspunsuri care au validat viziunea.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-700 ${
                statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-3xl">{s.icon}</span>
              <div className="mt-3 text-4xl lg:text-5xl font-bold text-navy">
                <AnimatedCounter target={s.value} suffix={s.suffix} active={statsInView} />
              </div>
              <p className="mt-2 text-sm text-graphite-light">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Insights */}
      <section ref={insightRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory-warm">
        <div className="max-w-[900px] mx-auto">
          <h2
            className={`font-serif text-3xl sm:text-4xl text-navy text-center mb-4 transition-all duration-700 ${
              insightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Ce ne-a spus cercetarea
          </h2>
          <p
            className={`text-graphite-light text-center mb-14 max-w-lg mx-auto transition-all duration-700 delay-200 ${
              insightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Principalele concluzii din cele 138 de raspunsuri colectate.
          </p>

          <div className="space-y-8">
            {insights.map((insight, i) => (
              <div
                key={insight.title}
                className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm transition-all duration-700 ${
                  insightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-semibold text-navy">{insight.title}</h3>
                  <span className="text-2xl font-bold text-navy tabular-nums">{insight.percentage}%</span>
                </div>
                <ProgressBar percentage={insight.percentage} color={insight.color} active={insightInView} />
                <p className="mt-3 text-sm text-graphite-light leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-navy">
        <div className="max-w-[1100px] mx-auto">
          <h2
            className={`font-serif text-3xl sm:text-4xl text-white text-center mb-14 transition-all duration-700 ${
              testInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Vocile viitorilor membri
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-700 ${
                  testInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <svg className="w-8 h-8 text-blue/40 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="text-white/80 text-sm italic leading-relaxed">{t.quote}</p>
                <p className="mt-4 text-white/40 text-xs">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section ref={timeRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[800px] mx-auto">
          <h2
            className={`font-serif text-3xl sm:text-4xl text-navy text-center mb-14 transition-all duration-700 ${
              timeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Drumul EduPoint
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.title}
                  className={`flex items-start gap-5 sm:pl-16 relative transition-all duration-700 ${
                    timeInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-5 h-5 rounded-full border-2 border-blue bg-white hidden sm:flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${
                      m.status === "Finalizat" ? "bg-success" :
                      m.status === "In progres" ? "bg-blue animate-pulse" :
                      "bg-gray-300"
                    }`} />
                  </div>

                  <span className="text-2xl shrink-0 sm:hidden">{m.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xl hidden sm:block">{m.icon}</span>
                      <h3 className="font-semibold text-navy">{m.title}</h3>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        m.status === "Finalizat" ? "bg-success/10 text-success" :
                        m.status === "In progres" ? "bg-blue/10 text-blue" :
                        "bg-gray-100 text-graphite-light"
                      }`}>
                        {m.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-graphite-light">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 bg-navy text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white">Fii parte din poveste.</h2>
        <p className="mt-4 text-white/60 max-w-md mx-auto">
          Alatura-te primei generatii de membri EduPoint si construieste viitorul alaturi de noi.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/join" size="lg">Devino Membru</Button>
          <Button href="/contact" variant="secondary" size="lg">Programeaza o vizita</Button>
        </div>
      </section>
    </>
  );
}
