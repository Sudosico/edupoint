"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const categories = [
  {
    name: "Abonamente",
    faqs: [
      { q: "Ce abonamente sunt disponibile?", a: "EduPoint ofera 3 abonamente: Basic (149 lei/luna), Pro (499 lei/luna) si Premium (998 lei/luna). Platinum este un statut castigat prin merit, nu un abonament." },
      { q: "Pot schimba abonamentul?", a: "Da. Upgrade-ul se aplica imediat. Downgrade-ul se aplica la finalul perioadei curente de facturare." },
      { q: "Exista contract pe termen lung?", a: "Nu. Abonamentele sunt lunare si poti anula oricand, fara penalizari sau taxe ascunse." },
      { q: "Pot anula in timpul lunii?", a: "Da. Daca anulezi, ai acces pana la finalul perioadei platite. Nu exista taxe de anulare." },
      { q: "Cum se face plata?", a: "Plata se face online, lunar, prin card bancar. Primesti factura electronica automat." },
      { q: "Exista discount pentru plata anuala?", a: "Momentan oferim doar abonamente lunare. Planuri anuale vor fi disponibile in curand." },
      { q: "Ce include Welcome Kit-ul Premium?", a: "Cutie premium branduita, Smart Card Premium, pix EduPoint, si un card cu mesaj personalizat." },
      { q: "Ce se intampla daca nu imi reactivez abonamentul?", a: "Smart Card-ul se dezactiveaza automat. Poti reactiva oricand si primesti acces imediat." },
    ],
  },
  {
    name: "Acces & Card",
    faqs: [
      { q: "Cum primesc Smart Card-ul?", a: "Dupa activarea abonamentului, cardul ajunge in 48 de ore. Il ridici de la receptie sau il primesti prin curier." },
      { q: "Ce fac daca pierd cardul?", a: "Contacteaza-ne la receptie sau prin email. Emitem un card inlocuitor in 48 de ore." },
      { q: "Pot intra fara card?", a: "Da, temporar. La receptie te poti identifica si primi acces cu un card visitor. Recomandam sa ai cardul mereu." },
      { q: "Cardul functioneaza la parteneri din prima zi?", a: "Da. Din momentul in care primesti cardul, ai acces la toate beneficiile si reducerile partenere." },
      { q: "Pot avea acces si digital?", a: "Da. Platforma online iti ofera acces la rezervari, EduCredit, calendar si progres — de pe orice dispozitiv." },
      { q: "Exista limita de vizite pe luna?", a: "Nu. Membrii au acces nelimitat la spatiile incluse in abonamentul lor." },
    ],
  },
  {
    name: "Career Lab & Workshopuri",
    faqs: [
      { q: "Cum rezerv o sesiune Career Lab?", a: "Din platforma online sau de la receptie. Alegi data si ora disponibila." },
      { q: "Cine sunt mentorii?", a: "Profesionisti cu experienta in HR, antreprenoriat, admitere universitara si programe internationale." },
      { q: "Ce teme acopera workshopurile?", a: "CV, public speaking, branding personal, Erasmus, portofoliu digital, planificare financiara si multe altele." },
      { q: "Pot participa la workshopuri extra?", a: "Da. Workshopurile extra se platesc cu EduCredit sau lei, la preturi accesibile." },
      { q: "Sesiunile Career Lab sunt individuale?", a: "Da. Fiecare sesiune este 1-la-1 cu un mentor, personalizata pe obiectivele tale." },
      { q: "Ce primesc dupa o sesiune Career Lab?", a: "Rezultate concrete: CV finalizat, scrisoare de intentie, plan de actiune sau portofoliu actualizat." },
    ],
  },
  {
    name: "Project Studio",
    faqs: [
      { q: "Ce echipamente are studioul?", a: "Microfon profesional, camera 4K, softbox-uri, ecran prezentare, laptopuri cu software de editare si green screen." },
      { q: "Pot folosi studioul singur?", a: "Da, dupa o scurta instruire la prima vizita. Pentru proiecte complexe, un mentor te poate asista." },
      { q: "Cum rezerv studioul?", a: "Din platforma online. Alegi data, ora si durata sesiunii." },
      { q: "Pot salva proiectele pe echipamentele EduPoint?", a: "Da, temporar. Recomandam sa descarci proiectele pe propriul dispozitiv dupa fiecare sesiune." },
    ],
  },
  {
    name: "EduCredit",
    faqs: [
      { q: "Ce este EduCredit?", a: "Moneda interna EduPoint. Primesti credite lunar cu abonamentul si le folosesti in tot ecosistemul." },
      { q: "Unde pot folosi EduCredit?", a: "La EduPoint Cafe, workshopuri extra, sesiuni Career Lab suplimentare, materiale si resurse." },
      { q: "Ce se intampla cu creditele nefolosite?", a: "EduCredit-urile se reseteaza la inceputul fiecarei luni. Recomandam sa le folosesti pe toate." },
      { q: "Pot cumpara EduCredit suplimentar?", a: "Da. Poti reincarca oricand din contul tau online." },
      { q: "Cate EduCredit-uri primesc?", a: "Basic: 50/luna. Pro: 150/luna. Premium: 300/luna. Platinum: 500/luna." },
    ],
  },
  {
    name: "Parinti",
    faqs: [
      { q: "Este sigur pentru copilul meu?", a: "Da. EduPoint este un spatiu supravegheat, cu acces controlat prin Smart Card. Copilul tau este intr-un mediu educational profesional." },
      { q: "Pot vizita spatiul inainte de inscriere?", a: "Da. Programeaza un tur gratuit prin pagina de contact sau suna-ne direct." },
      { q: "Primesc rapoarte despre progresul copilului?", a: "Da, pentru membrii Premium. Raportul lunar de progres include prezenta, sesiuni, proiecte si recomandari." },
      { q: "Cine ii supravegheaza pe elevi?", a: "Echipa EduPoint este prezenta permanent. Mentorii sunt profesionisti verificati cu experienta in lucrul cu adolescenti." },
      { q: "De ce nu e gratuit?", a: "EduPoint ofera servicii premium: mentorat individual, echipamente profesionale, spatii dedicate. Investitia in directia copilului tau se reflecta in rezultate concrete." },
    ],
  },
];

export default function FaqPage() {
  const { ref, inView } = useInView(0.2);
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const filteredCategories = categories.map((cat) => ({
    ...cat,
    faqs: cat.faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(search.toLowerCase()) ||
        f.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.faqs.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="py-32 lg:py-40 px-6 lg:px-16 bg-ivory-warm">
        <div className="max-w-[700px] mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1] tracking-tight">
            Intrebari frecvente
          </h1>
          <p className="mt-4 text-graphite-light text-lg">
            Tot ce trebuie sa stii despre EduPoint, intr-un singur loc.
          </p>

          <div className="mt-10">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cauta o intrebare..."
              className="w-full max-w-md px-5 py-3.5 border border-gray-200 rounded-xl bg-white text-navy text-sm focus:outline-none focus:border-navy transition-colors"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section ref={ref} className="py-20 lg:py-28 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[800px] mx-auto">
          {filteredCategories.map((cat, ci) => (
            <div
              key={cat.name}
              className={`mb-12 last:mb-0 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${ci * 100}ms` }}
            >
              <h2 className="font-serif text-2xl text-navy mb-5">{cat.name}</h2>
              <div className="space-y-3">
                {cat.faqs.map((faq) => {
                  const key = `${cat.name}-${faq.q}`;
                  const isOpen = openFaq === key;
                  return (
                    <div key={key} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : key)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left"
                      >
                        <span className="text-sm font-medium text-navy pr-4">{faq.q}</span>
                        <svg
                          className={`w-5 h-5 text-graphite-light shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-4" : "max-h-0"}`}>
                        <p className="px-6 text-sm text-graphite-light leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <p className="text-center text-graphite-light py-12">
              Nu am gasit rezultate pentru &ldquo;{search}&rdquo;. Incearca alte cuvinte cheie.
            </p>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 lg:px-16 bg-ivory-warm text-center">
        <p className="text-graphite-light">
          Nu ai gasit raspunsul?{" "}
          <a href="/contact" className="text-blue font-medium hover:underline">
            Contacteaza-ne
          </a>
        </p>
      </section>
    </>
  );
}
