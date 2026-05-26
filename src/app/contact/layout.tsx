import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacteaza EduPoint. Programeaza o vizita, trimite un mesaj sau descopera cum sa te alaturi.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
