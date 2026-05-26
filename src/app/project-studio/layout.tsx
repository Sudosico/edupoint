import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Studio",
  description: "Podcast, CV video, pitch deck, portofoliu digital. Ideile tale merita sa fie vazute — in Project Studio EduPoint.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
