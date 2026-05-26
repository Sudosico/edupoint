"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "edupoint-course-progress";

interface ProgressData {
  [courseId: string]: {
    [lessonKey: string]: boolean; // "chapterId/lessonId" => completed
  };
}

function getStoredProgress(): ProgressData {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(data: ProgressData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useCourseProgress(courseId: string) {
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const all = getStoredProgress();
    setProgress(all[courseId] || {});
    setLoaded(true);
  }, [courseId]);

  const markComplete = useCallback(
    (chapterId: string, lessonId: string) => {
      const key = `${chapterId}/${lessonId}`;
      setProgress((prev) => {
        const next = { ...prev, [key]: true };
        const all = getStoredProgress();
        all[courseId] = next;
        saveProgress(all);
        return next;
      });
    },
    [courseId]
  );

  const isLessonComplete = useCallback(
    (chapterId: string, lessonId: string): boolean => {
      return !!progress[`${chapterId}/${lessonId}`];
    },
    [progress]
  );

  const isLessonUnlocked = useCallback(
    (
      chapters: { id: string; lessons: { id: string }[] }[],
      chapterId: string,
      lessonId: string
    ): boolean => {
      // First lesson of first chapter is always unlocked
      if (
        chapters[0]?.id === chapterId &&
        chapters[0]?.lessons[0]?.id === lessonId
      ) {
        return true;
      }

      // Find the previous lesson
      let prevChapterId: string | null = null;
      let prevLessonId: string | null = null;

      for (const ch of chapters) {
        for (const lesson of ch.lessons) {
          if (ch.id === chapterId && lesson.id === lessonId) {
            // Return whether the previous lesson is complete
            if (prevChapterId && prevLessonId) {
              return !!progress[`${prevChapterId}/${prevLessonId}`];
            }
            return true;
          }
          prevChapterId = ch.id;
          prevLessonId = lesson.id;
        }
      }

      return false;
    },
    [progress]
  );

  const getCompletedCount = useCallback((): number => {
    return Object.values(progress).filter(Boolean).length;
  }, [progress]);

  return {
    loaded,
    progress,
    markComplete,
    isLessonComplete,
    isLessonUnlocked,
    getCompletedCount,
  };
}
