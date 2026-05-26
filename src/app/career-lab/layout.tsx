import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Lab",
  description: "CV, portofoliu, simulare interviu, orientare facultate si ghidare Erasmus. Career Lab-ul EduPoint iti da directie.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
