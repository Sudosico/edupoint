"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { MEMBERSHIP_TIERS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function AnimatedPrice({ price, inView }: { price: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * price);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [inView, price]);

  return (
    <span className="tabular-nums">
      {count}
    </span>
  );
}

export function MembershipTiers() {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="bg-ivory py-28 lg:py-36 px-6 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <span
            className={`inline-block text-xs font-medium tracking-[0.2em] uppercase text-graphite-light mb-6 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Abonamente
          </span>
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-[3.5rem] text-navy leading-[1.15] tracking-[-0.02em] transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Alege nivelul care ti se potriveste.
          </h2>
          <p
            className={`mt-4 text-graphite-light text-base max-w-lg mx-auto transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Fara contract. Poti anula oricand. Acces din prima zi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start">
          {MEMBERSHIP_TIERS.map((tier, i) => (
            <div
              key={tier.id}
              className={cn(
                "relative rounded-2xl transition-all duration-700 group/card",
                tier.recommended
                  ? "bg-white shadow-xl shadow-blue/10 ring-2 ring-blue lg:scale-[1.03] lg:-my-4 p-8"
                  : "bg-white shadow-lg ring-1 ring-black/[0.04] p-8 hover:shadow-xl hover:ring-black/[0.08]",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              {tier.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-blue text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.15em] shadow-lg shadow-blue/25">
                    Recomandat
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div
                  className={cn(
                    "w-2.5 h-2.5 rounded-full",
                    tier.id === "basic" && "bg-oak",
                    tier.id === "pro" && "bg-navy",
                    tier.id === "premium" && "bg-black"
                  )}
                />
                <h3 className="text-lg font-bold text-navy tracking-[-0.01em]">{tier.name}</h3>
              </div>

              <p className="text-sm text-graphite-light">{tier.tagline}</p>

              <div className="mt-6 pb-6 border-b border-navy/[0.06]">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-navy tabular-nums tracking-tight">
                    <AnimatedPrice price={tier.price} inView={inView} />
                  </span>
                  <span className="text-graphite-light text-sm font-medium">lei/luna</span>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                {tier.features.map((feature, fi) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div className="w-4 h-4 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-2.5 h-2.5 text-success"
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
                    <span className="text-graphite leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href="/join"
                  variant={tier.recommended ? "primary" : "ghost"}
                  className="w-full justify-center"
                >
                  Incepe acum
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Platinum teaser — subtle, aspirational */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a href="/platinum" className="group/plat inline-flex items-center gap-3 px-6 py-3 rounded-full bg-platinum-light/50 border border-platinum/30 hover:border-platinum/50 transition-all duration-300">
            <span className="w-2 h-2 bg-platinum rounded-full" />
            <span className="text-sm text-graphite">
              <strong className="text-navy font-semibold">Platinum Status</strong> — obtinut prin merit si impact
            </span>
            <svg className="w-3.5 h-3.5 text-graphite-light group-hover/plat:text-blue group-hover/plat:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
