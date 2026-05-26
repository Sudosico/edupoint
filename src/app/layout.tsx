import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edupoint.club"),
  title: {
    default: "EduPoint — Viitorul incepe aici",
    template: "%s | EduPoint",
  },
  description:
    "Primul ecosistem educational premium din Romania. Studiu, cariera, proiecte si oameni potriviti — intr-un singur loc.",
  keywords: [
    "EduPoint",
    "educatie",
    "studiu",
    "cariera",
    "workshopuri",
    "mentorat",
    "elevi",
    "studenti",
    "Cluj-Napoca",
    "membership",
    "career lab",
  ],
  authors: [{ name: "EduPoint" }],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "EduPoint",
    title: "EduPoint — Viitorul incepe aici",
    description: "Primul ecosistem educational premium din Romania. Studiu, cariera, proiecte si oameni potriviti.",
    images: [{ url: "/images/building/exterior-people.jpeg", width: 1200, height: 630, alt: "EduPoint Campus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduPoint — Viitorul incepe aici",
    description: "Primul ecosistem educational premium din Romania.",
    images: ["/images/building/exterior-people.jpeg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-ivory text-graphite font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
