import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invata | EduPoint",
  description: "Cursuri practice create pentru generatia care vrea mai mult decat teorie. Progreseaza in ritmul tau si construieste competente reale.",
  openGraph: {
    title: "EduPoint Learning — Invata. Aplica. Creste.",
    description: "Cursuri interactive de CV, public speaking, orientare in cariera si lucru in echipa.",
  },
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
