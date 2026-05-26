"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const DARK_HERO_PAGES = ["/", "/membership", "/career-lab", "/project-studio", "/platinum", "/contact", "/join", "/learn"];

export function Navbar() {
  const pathname = usePathname();
  const hasDarkHero = DARK_HERO_PAGES.includes(pathname) || pathname.startsWith("/learn");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isLight = scrolled || !hasDarkHero;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isLight || mobileOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-16 h-[72px]">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={IMAGES.logo.transparent}
              alt="EduPoint"
              width={140}
              height={40}
              className={cn(
                "h-9 w-auto object-contain transition-all duration-300",
                isLight || mobileOpen ? "brightness-100" : "brightness-0 invert"
              )}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[14px] font-medium tracking-[0.01em] transition-all duration-200 relative py-1",
                  "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-blue after:transition-all after:duration-300 hover:after:w-full",
                  pathname === link.href && "after:w-full",
                  isLight
                    ? "text-navy/80 hover:text-navy"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-5 py-2 bg-blue text-white text-[13px] font-semibold rounded-lg tracking-[0.03em] transition-all duration-200 hover:brightness-110 hover:scale-[1.02] shadow-lg shadow-blue/20"
            >
              Devino Membru
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span
              className={cn(
                "block w-6 h-[2px] transition-all duration-300 origin-center",
                isLight || mobileOpen ? "bg-navy" : "bg-white",
                mobileOpen && "rotate-45 translate-y-[5px]"
              )}
            />
            <span
              className={cn(
                "block w-6 h-[2px] transition-all duration-300",
                isLight || mobileOpen ? "bg-navy" : "bg-white",
                mobileOpen && "opacity-0 scale-x-0"
              )}
            />
            <span
              className={cn(
                "block w-6 h-[2px] transition-all duration-300 origin-center",
                isLight || mobileOpen ? "bg-navy" : "bg-white",
                mobileOpen && "-rotate-45 -translate-y-[5px]"
              )}
            />
          </button>
        </div>

        {/* Mobile dropdown menu — compact, slides down from nav */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out bg-white/95 backdrop-blur-md border-t border-gray-100",
            mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center px-4 py-3 rounded-xl text-[15px] font-medium transition-colors",
                  pathname === link.href
                    ? "bg-blue/5 text-blue"
                    : "text-navy hover:bg-gray-50"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue" />
                )}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                href="/join"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3 bg-blue text-white text-[15px] font-semibold rounded-xl transition-all hover:brightness-110"
              >
                Devino Membru
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
