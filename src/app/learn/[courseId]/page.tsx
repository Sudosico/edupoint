"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES, getTotalLessons } from "@/lib/courses";
import { useInView } from "@/hooks/useInView";
import { useCourseProgress } from "@/hooks/useCourseProgress";

function ChapterCard({
  chapter,
  chapterIndex,
  courseId,
  isLessonComplete,
  isLessonUnlocked,
  chapters,
}: {
  chapter: (typeof COURSES)[number]["chapters"][number];
  chapterIndex: number;
  courseId: string;
  isLessonComplete: (chapterId: string, lessonId: string) => boolean;
  isLessonUnlocked: (
    chapters: { id: string; lessons: { id: string }[] }[],
    chapterId: string,
    lessonId: string
  ) => boolean;
  chapters: (typeof COURSES)[number]["chapters"];
}) {
  const { ref, inView } = useInView(0.1);
  const completedInChapter = chapter.lessons.filter((l) =>
    isLessonComplete(chapter.id, l.id)
  ).length;
  const allComplete = completedInChapter === chapter.lessons.length;

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${chapterIndex * 80}ms`,
      }}
    >
      {/* Chapter header */}
      <div className="px-6 lg:px-8 py-5 border-b border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${
              allComplete
                ? "bg-success/10 text-success"
                : "bg-blue/10 text-blue"
            }`}
          >
            {allComplete ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              chapterIndex + 1
            )}
          </div>
          <div>
            <h3 className="font-bold text-navy text-[15px]">{chapter.title}</h3>
            <p className="text-xs text-graphite-light mt-0.5">{chapter.description}</p>
          </div>
        </div>
        <span className="text-xs text-graphite-light font-medium shrink-0 ml-4">
          {completedInChapter}/{chapter.lessons.length}
        </span>
      </div>

      {/* Lessons list */}
      <div className="divide-y divide-gray-50">
        {chapter.lessons.map((lesson, lessonIndex) => {
          const completed = isLessonComplete(chapter.id, lesson.id);
          const unlocked = isLessonUnlocked(chapters, chapter.id, lesson.id);

          return (
            <div key={lesson.id} className="relative">
              {unlocked ? (
                <Link
                  href={`/learn/${courseId}/${chapter.id}?lesson=${lesson.id}`}
                  className="flex items-center gap-4 px-6 lg:px-8 py-4 hover:bg-blue/[0.02] transition-colors group"
                >
                  {/* Status icon */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      completed
                        ? "bg-success text-white"
                        : "border-2 border-gray-200 text-transparent group-hover:border-blue/40"
                    }`}
                  >
                    {completed ? (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-xs font-medium text-graphite-light group-hover:text-blue">
                        {lessonIndex + 1}
                      </span>
                    )}
                  </div>

                  {/* Lesson info */}
                  <div className="flex-1 min-w-0">
                    <span className={`text-sm font-medium block ${completed ? "text-graphite-light line-through decoration-1" : "text-navy group-hover:text-blue transition-colors"}`}>
                      {lesson.title}
                    </span>
                  </div>

                  {/* Duration */}
                  <span className="text-xs text-graphite-light shrink-0">{lesson.duration}</span>

                  {/* Arrow */}
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-blue transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <div className="flex items-center gap-4 px-6 lg:px-8 py-4 opacity-50 cursor-not-allowed">
                  {/* Lock icon */}
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-gray-100">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-graphite-light block">{lesson.title}</span>
                  </div>

                  <span className="text-xs text-graphite-light shrink-0">{lesson.duration}</span>

                  <svg className="w-4 h-4 text-gray-200 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function CourseOverviewPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = use(params);
  const course = COURSES.find((c) => c.id === courseId);
  const { ref: heroRef, inView: heroInView } = useInView(0.15);

  if (!course) {
    notFound();
  }

  const totalLessons = getTotalLessons(course);

  return <CourseOverviewContent course={course} totalLessons={totalLessons} heroRef={heroRef} heroInView={heroInView} />;
}

function CourseOverviewContent({
  course,
  totalLessons,
  heroRef,
  heroInView,
}: {
  course: (typeof COURSES)[number];
  totalLessons: number;
  heroRef: React.RefObject<HTMLDivElement | null>;
  heroInView: boolean;
}) {
  const { isLessonComplete, isLessonUnlocked, getCompletedCount, loaded } = useCourseProgress(course.id);
  const completed = loaded ? getCompletedCount() : 0;
  const percentage = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

  // Find the next unlocked, uncompleted lesson for "Continue" CTA
  let nextLesson: { chapterId: string; lessonId: string } | null = null;
  for (const ch of course.chapters) {
    for (const lesson of ch.lessons) {
      if (
        !isLessonComplete(ch.id, lesson.id) &&
        isLessonUnlocked(course.chapters, ch.id, lesson.id)
      ) {
        nextLesson = { chapterId: ch.id, lessonId: lesson.id };
        break;
      }
    }
    if (nextLesson) break;
  }

  const tierColors: Record<string, string> = {
    Basic: "bg-blue/15 text-blue",
    Pro: "bg-white/15 text-white",
    Premium: "bg-gold-subtle/20 text-gold-subtle",
  };

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />

        <div
          ref={heroRef}
          className="relative max-w-[1280px] mx-auto px-6 lg:px-16 transition-all duration-700"
          style={{
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/learn" className="hover:text-white transition-colors">
              Cursuri
            </Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-300 truncate">{course.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{course.icon}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tierColors[course.tier] || "bg-white/10 text-white"}`}>
                  {course.tier}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
                {course.title}
              </h1>
              <p className="text-gray-300 leading-relaxed max-w-2xl">
                {course.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-5 mt-6 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                  </svg>
                  {course.totalDuration}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  {course.chapters.length} capitole
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {totalLessons} lectii
                </span>
              </div>
            </div>

            {/* Progress card */}
            <div className="lg:w-72 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-300">Progresul tau</span>
                <span className="text-2xl font-bold text-white">{percentage}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-blue rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mb-5">
                {completed} din {totalLessons} lectii completate
              </p>

              {nextLesson && (
                <Link
                  href={`/learn/${course.id}/${nextLesson.chapterId}?lesson=${nextLesson.lessonId}`}
                  className="flex items-center justify-center w-full py-3 bg-blue text-white text-sm font-semibold rounded-xl transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {completed > 0 ? "Continua" : "Incepe cursul"}
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              )}

              {!nextLesson && completed > 0 && (
                <div className="flex items-center justify-center w-full py-3 bg-success/10 text-success text-sm font-semibold rounded-xl">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Curs completat!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-16 py-12 lg:py-20">
        <h2 className="text-xl lg:text-2xl font-bold text-navy mb-8">Continutul cursului</h2>

        <div className="space-y-4">
          {course.chapters.map((chapter, i) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              chapterIndex={i}
              courseId={course.id}
              isLessonComplete={isLessonComplete}
              isLessonUnlocked={isLessonUnlocked}
              chapters={course.chapters}
            />
          ))}
        </div>

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="/learn"
            className="inline-flex items-center text-sm font-medium text-graphite-light hover:text-navy transition-colors"
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Inapoi la cursuri
          </Link>
        </div>
      </section>
    </div>
  );
}
