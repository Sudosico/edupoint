"use client";

import Link from "next/link";
import { COURSES, getTotalLessons } from "@/lib/courses";
import { useInView } from "@/hooks/useInView";
import { useCourseProgress } from "@/hooks/useCourseProgress";

function CourseCard({ course, index }: { course: (typeof COURSES)[number]; index: number }) {
  const { ref, inView } = useInView(0.15);
  const { getCompletedCount, loaded } = useCourseProgress(course.id);
  const totalLessons = getTotalLessons(course);
  const completed = loaded ? getCompletedCount() : 0;
  const percentage = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

  const tierColors: Record<string, string> = {
    Basic: "bg-blue/10 text-blue",
    Pro: "bg-navy/10 text-navy",
    Premium: "bg-gold-subtle/20 text-oak-dark",
  };

  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Color accent bar */}
      <div className={`h-1.5 ${course.color}`} />

      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{course.icon}</span>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tierColors[course.tier] || "bg-gray-100 text-graphite"}`}>
            {course.tier}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-blue transition-colors line-clamp-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-graphite-light leading-relaxed mb-5 line-clamp-3">
          {course.description}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-4 text-xs text-graphite-light mb-5">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
            </svg>
            {course.totalDuration}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {course.chapters.length} capitole
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {totalLessons} lectii
          </span>
        </div>

        {/* Progress bar */}
        {loaded && completed > 0 && (
          <div className="mb-5">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-graphite-light font-medium">Progres</span>
              <span className="font-semibold text-blue">{percentage}%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue rounded-full transition-all duration-700 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        )}

        {/* CTA */}
        <Link
          href={`/learn/${course.id}`}
          className="flex items-center justify-center w-full py-3 px-4 bg-navy text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:bg-navy-light hover:scale-[1.02] active:scale-[0.98]"
        >
          {completed > 0 ? "Continua cursul" : "Incepe cursul"}
          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function LearnPage() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />

        <div
          ref={headerRef}
          className="relative max-w-[1280px] mx-auto px-6 lg:px-16 text-center transition-all duration-700"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-blue-light text-sm font-medium mb-6 backdrop-blur-sm border border-white/5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            EduPoint Learning
          </div>

          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            Invata. Aplica. Creste.
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Cursuri practice create pentru generatia care vrea mai mult decat teorie.
            Progreseaza in ritmul tau, deblocheaza lectii noi si construieste competente reale.
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
        {/* Section header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy">Cursuri disponibile</h2>
            <p className="text-graphite-light mt-1">{COURSES.length} cursuri cu {COURSES.reduce((s, c) => s + getTotalLessons(c), 0)} lectii</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {COURSES.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        {/* Coming soon callout */}
        <div className="mt-12 p-8 rounded-2xl border-2 border-dashed border-gray-200 text-center">
          <div className="text-4xl mb-3">🚀</div>
          <h3 className="text-lg font-bold text-navy mb-2">Mai multe cursuri in curand</h3>
          <p className="text-sm text-graphite-light max-w-md mx-auto">
            Lucram la cursuri noi despre Digital Skills, Erasmus, Personal Branding si multe altele. Devino membru pentru acces prioritar.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center mt-5 px-6 py-2.5 bg-blue text-white text-sm font-semibold rounded-lg transition-all hover:brightness-110 hover:scale-[1.02]"
          >
            Devino Membru
          </Link>
        </div>
      </section>
    </div>
  );
}
