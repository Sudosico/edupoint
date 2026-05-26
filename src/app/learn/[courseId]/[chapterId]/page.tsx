import { Suspense } from "react";
import { notFound } from "next/navigation";
import { COURSES } from "@/lib/courses";
import LessonClient from "./LessonClient";

export function generateStaticParams() {
  return COURSES.flatMap((course) =>
    course.chapters.map((chapter) => ({
      courseId: course.id,
      chapterId: chapter.id,
    }))
  );
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string; chapterId: string }>;
}) {
  const { courseId, chapterId } = await params;
  const course = COURSES.find((c) => c.id === courseId);
  const chapter = course?.chapters.find((ch) => ch.id === chapterId);

  if (!course || !chapter) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ivory flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <LessonClient courseId={courseId} chapterId={chapterId} />
    </Suspense>
  );
}
