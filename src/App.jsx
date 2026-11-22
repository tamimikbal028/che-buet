import { useCallback, useEffect, useMemo, useState } from "react";
import { loadCourses } from "./lib/loadCourses";
import Sidebar from "./components/Sidebar";
import PrintBar from "./components/PrintBar";
import ChapterReader from "./components/ChapterReader";

function resolveInitialSelection(courses) {
  const hash = window.location.hash.replace(/^#/, "");
  const [cSlug, tSlug, chSlug] = hash.split("/");

  const course = courses.find((c) => c.slug === cSlug) || courses[0];
  const teacher =
    course?.teachers.find((t) => t.slug === tSlug) || course?.teachers[0];
  const chapter =
    teacher?.chapters.find((ch) => ch.slug === chSlug) || teacher?.chapters[0];

  return {
    courseSlug: course?.slug || "",
    teacherSlug: teacher?.slug || "",
    chapterSlug: chapter?.slug || "",
  };
}

export default function App() {
  const courses = useMemo(() => loadCourses(), []);
  const initial = useMemo(() => resolveInitialSelection(courses), [courses]);

  const [courseSlug, setCourseSlug] = useState(initial.courseSlug);
  const [teacherSlug, setTeacherSlug] = useState(initial.teacherSlug);
  const [chapterSlug, setChapterSlug] = useState(initial.chapterSlug);

  const [topics, setTopics] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState(() => new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const activeCourse =
    courses.find((c) => c.slug === courseSlug) || courses[0];
  const activeTeacher =
    activeCourse?.teachers.find((t) => t.slug === teacherSlug) ||
    activeCourse?.teachers[0];
  const activeChapter =
    activeTeacher?.chapters.find((ch) => ch.slug === chapterSlug) ||
    activeTeacher?.chapters[0];

  // Sync URL hash & document title
  useEffect(() => {
    if (!activeCourse || !activeTeacher || !activeChapter) return;
    document.title = `${activeChapter.title} — ${activeCourse.code}`;
    const nextHash = `#${activeCourse.slug}/${activeTeacher.slug}/${activeChapter.slug}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
  }, [activeCourse, activeTeacher, activeChapter]);

  const resetFilters = useCallback((scrollTop = true) => {
    setSelectedTopics(new Set());
    setSearchQuery("");
    if (scrollTop) window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSelectCourse = useCallback(
    (nextCourseSlug) => {
      const nextCourse = courses.find((c) => c.slug === nextCourseSlug);
      if (!nextCourse) return;
      const nextTeacher = nextCourse.teachers[0];
      const nextChapter = nextTeacher?.chapters[0];
      setCourseSlug(nextCourse.slug);
      setTeacherSlug(nextTeacher?.slug || "");
      setChapterSlug(nextChapter?.slug || "");
      resetFilters(true);
    },
    [courses, resetFilters]
  );

  const handleSelectTeacher = useCallback(
    (nextTeacherSlug) => {
      const nextTeacher = activeCourse?.teachers.find(
        (t) => t.slug === nextTeacherSlug
      );
      if (!nextTeacher) return;
      const nextChapter = nextTeacher.chapters[0];
      setTeacherSlug(nextTeacher.slug);
      setChapterSlug(nextChapter?.slug || "");
      resetFilters(true);
    },
    [activeCourse, resetFilters]
  );

  const handleSelectChapter = useCallback(
    (nextChapterSlug) => {
      if (nextChapterSlug === chapterSlug) return;
      setChapterSlug(nextChapterSlug);
      resetFilters(true);
    },
    [chapterSlug, resetFilters]
  );

  const handleToggleTopicCheckbox = useCallback((topicId) => {
    setSelectedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) {
        next.delete(topicId);
      } else {
        next.add(topicId);
      }
      return next;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleFocusTopic = useCallback((topicId) => {
    setSelectedTopics((prev) => {
      if (prev.size === 1 && prev.has(topicId)) {
        return new Set();
      }
      return new Set([topicId]);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleJumpSubtopic = useCallback((topicId, subId) => {
    setSelectedTopics((prev) => {
      if (prev.size > 0 && !prev.has(topicId)) {
        return new Set([topicId]);
      }
      return prev;
    });
    requestAnimationFrame(() => {
      document
        .getElementById(subId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const handleToggleSidebar = useCallback(() => {
    if (window.innerWidth < 1024) {
      setMobileSidebarOpen((prev) => !prev);
    } else {
      setSidebarCollapsed((prev) => !prev);
    }
  }, []);

  if (!activeCourse || !activeTeacher || !activeChapter) {
    return (
      <div className="flex min-h-screen items-center justify-center p-8 text-slate-600">
        No course notes found in <code>src/courses/</code>.
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-start bg-slate-100">
      <Sidebar
        courses={courses}
        activeCourse={activeCourse}
        activeTeacher={activeTeacher}
        activeChapter={activeChapter}
        topics={topics}
        selectedTopics={selectedTopics}
        searchQuery={searchQuery}
        collapsed={sidebarCollapsed}
        mobileOpen={mobileSidebarOpen}
        onSelectCourse={handleSelectCourse}
        onSelectTeacher={handleSelectTeacher}
        onSelectChapter={handleSelectChapter}
        onToggleTopicCheckbox={handleToggleTopicCheckbox}
        onFocusTopic={handleFocusTopic}
        onJumpSubtopic={handleJumpSubtopic}
        onSearchChange={setSearchQuery}
        onResetFilters={() => resetFilters(true)}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      <main className="min-w-0 flex-1 px-3.5 pt-4 pb-10 sm:px-6 sm:pt-5 print:p-0">
        <PrintBar
          course={activeCourse}
          teacher={activeTeacher}
          chapter={activeChapter}
          onToggleSidebar={handleToggleSidebar}
        />

        <ChapterReader
          chapter={activeChapter}
          topics={topics}
          selectedTopics={selectedTopics}
          searchQuery={searchQuery}
          onTopicsExtracted={setTopics}
          onFocusTopic={handleFocusTopic}
          onResetFilters={() => resetFilters(true)}
        />
      </main>
    </div>
  );
}
