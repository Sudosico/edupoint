import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alatura-te EduPoint",
  description: "Devino membru EduPoint. Inscrie-te ca elev, parinte sau partener si incepe sa construiesti viitorul.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
