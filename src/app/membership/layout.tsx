import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abonamente",
  description: "Alege abonamentul EduPoint care ti se potriveste: Basic, Pro sau Premium. Smart Card, EduCredit si acces la intregul ecosistem educational.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
