import { notFound } from "next/navigation";
import { COURSES } from "@/lib/courses";
import CourseOverviewClient from "./CourseOverviewClient";

export function generateStaticParams() {
  return COURSES.map((course) => ({
    courseId: course.id,
  }));
}

export default async function CourseOverviewPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = COURSES.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  return <CourseOverviewClient courseId={courseId} />;
}
