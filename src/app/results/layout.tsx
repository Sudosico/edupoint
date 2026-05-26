import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rezultate",
  description: "Rezultate care vorbesc. Numere, povesti si impact real din comunitatea EduPoint.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
