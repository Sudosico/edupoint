import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduPoint Cafe",
  description: "Cafea cu scop. Un loc unde ideile se nasc, conversatiile conteaza si viitorul se planuieste la o cafea.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
