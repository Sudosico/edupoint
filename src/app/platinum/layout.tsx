import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platinum Status",
  description: "Platinum nu se cumpara. Se castiga. Statutul suprem in ecosistemul EduPoint, rezervat celor care demonstreaza excelenta.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
