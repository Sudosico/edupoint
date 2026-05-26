import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parteneri",
  description: "Beneficii dincolo de cladire. Reduceri la librarii, sali de sport, cursuri si evenimente prin Smart Card-ul EduPoint.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
