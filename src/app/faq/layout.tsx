import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Intrebari frecvente despre abonamente, acces, Career Lab, Project Studio, EduCredit si tot ce trebuie sa stii despre EduPoint.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
