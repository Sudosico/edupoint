"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const { ref, inView } = useInView(0.2);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image src={IMAGES.building.exteriorClean} alt="EduPoint" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
            Contact
          </h1>
          <p className="mt-4 text-white/70 text-lg">Suntem aici sa te ajutam.</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="font-serif text-3xl text-navy">Viziteaza-ne</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Adresa</h3>
                <p className="mt-2 text-graphite-light">
                  EduPoint — Primul ecosistem educational premium
                  <br />
                  Strada Exemplu nr. 42, Cluj-Napoca
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Program</h3>
                <p className="mt-2 text-graphite-light">
                  Luni — Vineri: 08:00 — 21:00
                  <br />
                  Sambata: 09:00 — 18:00
                  <br />
                  Duminica: Inchis
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Email</h3>
                <p className="mt-2">
                  <a href="mailto:contact@edupoint.club" className="text-blue hover:underline">
                    contact@edupoint.club
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Telefon</h3>
                <p className="mt-2 text-graphite-light">+40 700 000 000</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="font-serif text-3xl text-navy">Trimite un mesaj</h2>
            <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Nume complet</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-navy text-sm focus:outline-none focus:border-navy transition-colors"
                  placeholder="Numele tau"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-navy text-sm focus:outline-none focus:border-navy transition-colors"
                  placeholder="email@exemplu.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Mesaj</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-navy text-sm focus:outline-none focus:border-navy transition-colors resize-none"
                  placeholder="Cum te putem ajuta?"
                />
              </div>
              <Button size="lg" className="w-full">Trimite mesajul</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
