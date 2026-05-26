"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { COURSES } from "@/lib/courses";
import { useCourseProgress } from "@/hooks/useCourseProgress";

export default function LessonClient({
  courseId,
  chapterId,
}: {
  courseId: string;
  chapterId: string;
}) {
  const course = COURSES.find((c) => c.id === courseId);
  const chapter = course?.chapters.find((ch) => ch.id === chapterId);

  if (!course || !chapter) {
    return null;
  }

  return <LessonViewer course={course} chapter={chapter} />;
}

function LessonViewer({
  course,
  chapter,
}: {
  course: (typeof COURSES)[number];
  chapter: (typeof COURSES)[number]["chapters"][number];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const lessonId = searchParams.get("lesson") || chapter.lessons[0]?.id;
  const lesson = chapter.lessons.find((l) => l.id === lessonId) || chapter.lessons[0];

  const { isLessonComplete, isLessonUnlocked, markComplete, loaded } = useCourseProgress(course.id);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isComplete = loaded && isLessonComplete(chapter.id, lesson.id);
  const isUnlocked = loaded && isLessonUnlocked(course.chapters, chapter.id, lesson.id);

  const currentLessonIndex = chapter.lessons.findIndex((l) => l.id === lesson.id);
  const currentChapterIndex = course.chapters.findIndex((ch) => ch.id === chapter.id);

  let nextLessonLink: string | null = null;
  let nextLessonLabel: string | null = null;

  if (currentLessonIndex < chapter.lessons.length - 1) {
    const next = chapter.lessons[currentLessonIndex + 1];
    nextLessonLink = `/learn/${course.id}/${chapter.id}?lesson=${next.id}`;
    nextLessonLabel = next.title;
  } else if (currentChapterIndex < course.chapters.length - 1) {
    const nextCh = course.chapters[currentChapterIndex + 1];
    nextLessonLink = `/learn/${course.id}/${nextCh.id}?lesson=${nextCh.lessons[0].id}`;
    nextLessonLabel = `${nextCh.title}: ${nextCh.lessons[0].title}`;
  }

  let prevLessonLink: string | null = null;
  if (currentLessonIndex > 0) {
    const prev = chapter.lessons[currentLessonIndex - 1];
    prevLessonLink = `/learn/${course.id}/${chapter.id}?lesson=${prev.id}`;
  } else if (currentChapterIndex > 0) {
    const prevCh = course.chapters[currentChapterIndex - 1];
    const lastLesson = prevCh.lessons[prevCh.lessons.length - 1];
    prevLessonLink = `/learn/${course.id}/${prevCh.id}?lesson=${lastLesson.id}`;
  }

  const handleMarkComplete = () => {
    markComplete(chapter.id, lesson.id);
    if (nextLessonLink) {
      router.push(nextLessonLink);
    }
  };

  const completedInChapter = chapter.lessons.filter((l) =>
    isLessonComplete(chapter.id, l.id)
  ).length;

  if (!loaded) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-ivory pt-28 lg:pt-36">
        <div className="max-w-lg mx-auto px-6 text-center py-20">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gray-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-navy mb-3">Lectie blocata</h2>
          <p className="text-graphite-light mb-6">
            Completeaza lectia anterioara pentru a debloca aceasta lectie.
          </p>
          <Link
            href={`/learn/${course.id}`}
            className="inline-flex items-center px-6 py-2.5 bg-blue text-white text-sm font-semibold rounded-xl transition-all hover:brightness-110"
          >
            Inapoi la curs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory pt-[72px]">
      {/* Top bar */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 lg:px-8 h-14">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 -ml-2 hover:bg-gray-50 rounded-lg"
              aria-label="Toggle sidebar"
            >
              <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link
              href={`/learn/${course.id}`}
              className="text-graphite-light hover:text-navy transition-colors shrink-0"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div className="min-w-0">
              <p className="text-xs text-graphite-light truncate hidden sm:block">{course.title}</p>
              <p className="text-sm font-semibold text-navy truncate">{chapter.title}</p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xs text-graphite-light">
              {completedInChapter}/{chapter.lessons.length}
            </span>
            <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue rounded-full transition-all duration-500"
                style={{
                  width: `${(completedInChapter / chapter.lessons.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-w-[1400px] mx-auto relative">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-[72px] left-0 z-40 lg:z-10 h-[calc(100vh-72px)] w-72 bg-white border-r border-gray-100 overflow-y-auto transition-transform duration-300 lg:translate-x-0 lg:block shrink-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ top: "calc(72px + 56px)", height: "calc(100vh - 72px - 56px)" }}
        >
          <div className="py-4">
            {chapter.lessons.map((l, i) => {
              const complete = isLessonComplete(chapter.id, l.id);
              const unlocked = isLessonUnlocked(course.chapters, chapter.id, l.id);
              const active = l.id === lesson.id;

              return (
                <div key={l.id}>
                  {unlocked ? (
                    <Link
                      href={`/learn/${course.id}/${chapter.id}?lesson=${l.id}`}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 px-5 py-3 text-sm transition-colors ${
                        active
                          ? "bg-blue/5 text-blue border-r-2 border-blue font-medium"
                          : "text-graphite hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs ${
                          complete
                            ? "bg-success text-white"
                            : active
                            ? "bg-blue text-white"
                            : "border border-gray-200 text-graphite-light"
                        }`}
                      >
                        {complete ? (
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          i + 1
                        )}
                      </div>
                      <span className={`truncate ${complete && !active ? "line-through decoration-1 text-graphite-light" : ""}`}>
                        {l.title}
                      </span>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 px-5 py-3 text-sm text-graphite-light/50 cursor-not-allowed">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-gray-50">
                        <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <span className="truncate">{l.title}</span>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-4 pt-4 border-t border-gray-100 px-5">
              <p className="text-[11px] font-semibold text-graphite-light uppercase tracking-wider mb-2">
                Alte capitole
              </p>
              {course.chapters
                .filter((ch) => ch.id !== chapter.id)
                .map((ch) => (
                  <Link
                    key={ch.id}
                    href={`/learn/${course.id}/${ch.id}?lesson=${ch.lessons[0].id}`}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-2 py-2 text-xs text-graphite-light hover:text-navy transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="truncate">{ch.title}</span>
                  </Link>
                ))}
            </div>
          </div>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-[2px] lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Content area */}
        <div className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
            <div className="mb-8">
              <div className="flex items-center gap-3 text-xs text-graphite-light mb-3">
                <span>{lesson.duration}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>
                  Lectia {currentLessonIndex + 1} din {chapter.lessons.length}
                </span>
                {isComplete && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1 text-success font-medium">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Completata
                    </span>
                  </>
                )}
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
                {lesson.title}
              </h1>
            </div>

            <article
              className="prose prose-navy max-w-none
                prose-headings:text-navy prose-headings:font-bold prose-headings:tracking-tight
                prose-h3:text-xl prose-h3:mt-0 prose-h3:mb-4
                prose-h4:text-base prose-h4:mt-8 prose-h4:mb-3
                prose-p:text-graphite prose-p:leading-relaxed prose-p:text-[15px]
                prose-li:text-graphite prose-li:text-[15px] prose-li:leading-relaxed
                prose-strong:text-navy prose-strong:font-semibold
                prose-blockquote:border-l-blue prose-blockquote:bg-blue/5 prose-blockquote:rounded-r-xl
                prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:not-italic
                prose-blockquote:text-navy prose-blockquote:font-medium prose-blockquote:text-sm
                prose-ol:space-y-2 prose-ul:space-y-1.5
                prose-em:text-graphite-light"
              dangerouslySetInnerHTML={{ __html: lesson.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-100">
              {!isComplete && (
                <button
                  onClick={handleMarkComplete}
                  className="w-full py-4 bg-blue text-white font-semibold rounded-xl transition-all hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 text-sm"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Marcheaza ca finalizata si continua
                </button>
              )}

              {isComplete && (
                <div className="flex items-center justify-center gap-2 py-3 text-success text-sm font-medium bg-success/5 rounded-xl mb-6">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Lectie completata
                </div>
              )}

              <div className="flex items-center justify-between gap-4 mt-6">
                {prevLessonLink ? (
                  <Link
                    href={prevLessonLink}
                    className="flex items-center gap-2 text-sm text-graphite-light hover:text-navy transition-colors py-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Lectia anterioara
                  </Link>
                ) : (
                  <div />
                )}

                {nextLessonLink && isComplete ? (
                  <Link
                    href={nextLessonLink}
                    className="flex items-center gap-2 text-sm font-medium text-blue hover:text-navy transition-colors py-2"
                  >
                    Lectia urmatoare
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : nextLessonLink ? (
                  <span className="flex items-center gap-2 text-sm text-gray-300 py-2 cursor-not-allowed">
                    Lectia urmatoare
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                ) : (
                  <Link
                    href={`/learn/${course.id}`}
                    className="flex items-center gap-2 text-sm font-medium text-blue hover:text-navy transition-colors py-2"
                  >
                    Inapoi la curs
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
