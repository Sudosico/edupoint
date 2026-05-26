import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lectie | EduPoint Learning",
  description: "Invata la EduPoint — cursuri interactive cu progresie pas cu pas.",
};

export default function LessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
