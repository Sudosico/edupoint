import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";

const footerLinks = {
  Spatii: [
    { label: "Study Cafe", href: "/spaces#study-cafe" },
    { label: "Career Lab", href: "/career-lab" },
    { label: "Project Studio", href: "/project-studio" },
    { label: "EduPoint Cafe", href: "/cafe" },
    { label: "Toate spatiile", href: "/spaces" },
  ],
  Servicii: [
    { label: "Abonamente", href: "/membership" },
    { label: "Workshopuri", href: "/workshops" },
    { label: "Mentorat", href: "/membership#premium" },
    { label: "Platforma digitala", href: "/platform" },
    { label: "Platinum Status", href: "/platinum" },
  ],
  Companie: [
    { label: "Despre noi", href: "/results" },
    { label: "Parteneri", href: "/partners" },
    { label: "FAQ", href: "/faq" },
    { label: "Devino partener", href: "/partners#become" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white relative">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Image
              src={IMAGES.logo.transparent}
              alt="EduPoint"
              width={160}
              height={45}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mt-5">
              Primul ecosistem educational premium din Romania. Studiu, cariera,
              proiecte si oameni potriviti.
            </p>
            <p className="text-white/30 text-[11px] mt-6 font-medium tracking-[0.15em] uppercase">
              Viitorul incepe aici.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar — Stripe-inspired */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/30 tracking-wide">
            &copy; {new Date().getFullYear()} EduPoint. Toate drepturile
            rezervate.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-[11px] text-white/30 hover:text-white/60 transition-colors duration-200 tracking-wide"
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="text-[11px] text-white/30 hover:text-white/60 transition-colors duration-200 tracking-wide"
            >
              FAQ
            </Link>
            <Link
              href="/learn"
              className="text-[11px] text-white/30 hover:text-white/60 transition-colors duration-200 tracking-wide"
            >
              Learning
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
