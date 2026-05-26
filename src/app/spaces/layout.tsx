import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spatii",
  description: "Un campus educational complet intr-o singura cladire. Descopera Study Cafe, Career Lab, Project Studio si toate spatiile EduPoint.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
