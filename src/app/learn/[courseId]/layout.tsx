import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curs | EduPoint Learning",
  description: "Exploreaza capitolele si lectiile acestui curs EduPoint.",
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
