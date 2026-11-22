import { BookOpen, GraduationCap, RotateCcw, Search, X } from "lucide-react";

export default function Sidebar({
  courses,
  activeCourse,
  activeTeacher,
  activeChapter,
  topics,
  selectedTopics,
  searchQuery,
  collapsed,
  mobileOpen,
  onSelectCourse,
  onSelectTeacher,
  onSelectChapter,
  onToggleTopicCheckbox,
  onFocusTopic,
  onJumpSubtopic,
  onSearchChange,
  onResetFilters,
  onCloseMobile,
}) {
  const hasFilter = selectedTopics.size > 0 || searchQuery.trim().length > 0;
  const queryLower = searchQuery.trim().toLowerCase();

  return (
    <>
      {mobileOpen && (
        <div
          className="no-print fixed inset-0 z-30 bg-slate-900/45 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        aria-label="Course, teacher, chapter, and topic navigation"
        className={[
          "no-print fixed inset-y-0 left-0 z-40 flex h-screen w-80 shrink-0 flex-col overflow-y-auto border-r border-slate-300 bg-white shadow-sm transition-all duration-200 lg:sticky lg:top-0 lg:left-auto",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          collapsed
            ? "lg:-ml-80 lg:pointer-events-none lg:opacity-0"
            : "lg:ml-0 lg:opacity-100",
        ].join(" ")}
      >
        {/* Top Course Header */}
        <div className="bg-[#1a365d] px-4 py-3.5 text-white">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-sky-200 uppercase">
                <GraduationCap className="size-3.5 shrink-0" />
                <span>{activeCourse.code}</span>
              </div>
              <h2 className="mt-0.5 truncate text-base font-bold leading-snug">
                {activeCourse.name}
              </h2>
            </div>
            <button
              type="button"
              onClick={onCloseMobile}
              aria-label="Close sidebar"
              className="inline-flex size-7 items-center justify-center rounded bg-white/15 text-white hover:bg-white/25 lg:hidden"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Course Switcher (auto-appears when 2+ courses exist) */}
          {courses.length > 1 && (
            <div className="mt-2.5">
              <label htmlFor="courseSelect" className="sr-only">
                Select Course
              </label>
              <select
                id="courseSelect"
                value={activeCourse.slug}
                onChange={(e) => onSelectCourse(e.target.value)}
                className="w-full rounded border border-white/25 bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-white outline-none focus:border-sky-300"
              >
                {courses.map((c) => (
                  <option key={c.slug} value={c.slug} className="text-slate-900">
                    {c.code} — {c.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Teacher / Part Switcher */}
        <div className="border-b border-slate-200 bg-slate-100 px-3 py-2.5">
          <div className="mb-1.5 text-[11px] font-bold tracking-wider text-slate-500 uppercase">
            Instructor / Part
          </div>
          <div className="flex flex-col gap-1">
            {activeCourse.teachers.map((t) => {
              const isActive = t.slug === activeTeacher.slug;
              return (
                <button
                  key={t.slug}
                  type="button"
                  onClick={() => onSelectTeacher(t.slug)}
                  className={[
                    "flex w-full items-center justify-between gap-2 rounded border px-2.5 py-1.5 text-left text-xs font-semibold transition-colors",
                    isActive
                      ? "border-[#1a365d] bg-[#1a365d] text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-sky-600 hover:bg-sky-50",
                  ].join(" ")}
                >
                  <span className="truncate">
                    {t.name}
                    {t.short ? ` (${t.short})` : ""}
                  </span>
                  {t.part && (
                    <span
                      className={[
                        "shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold",
                        isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600",
                      ].join(" ")}
                    >
                      {t.part}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chapters List */}
        <div className="border-b border-slate-200 bg-slate-50 px-3 py-2.5">
          <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-slate-500 uppercase">
            <BookOpen className="size-3.5" />
            <span>Chapters ({activeTeacher.chapters.length})</span>
          </div>
          <div className="flex flex-col gap-1">
            {activeTeacher.chapters.map((ch, idx) => {
              const isActive = ch.slug === activeChapter.slug;
              return (
                <button
                  key={ch.slug}
                  type="button"
                  onClick={() => {
                    onSelectChapter(ch.slug);
                    onCloseMobile();
                  }}
                  className={[
                    "flex w-full items-center justify-between gap-2 rounded border px-2.5 py-1.5 text-left text-xs font-semibold transition-colors",
                    isActive
                      ? "border-[#2b6cb0] bg-sky-50 text-[#1a365d]"
                      : "border-slate-200 bg-white text-slate-700 hover:border-sky-500 hover:bg-sky-50/60",
                  ].join(" ")}
                >
                  <span className="truncate">
                    {idx + 1}. {ch.shortTitle || ch.title}
                  </span>
                  <span className="shrink-0 text-[11px] font-medium text-slate-500">
                    {ch.slideCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Topic Filter & Search Controls */}
        <div className="border-b border-slate-200 bg-slate-50/80 px-3 py-2.5">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search topics or keywords..."
              aria-label="Search topics or keywords"
              className="w-full rounded border border-slate-300 bg-white py-1.5 pr-2.5 pl-8 text-xs text-slate-900 outline-none focus:border-[#2b6cb0] focus:ring-2 focus:ring-sky-600/15"
            />
          </div>

          <div className="mt-2 flex gap-1.5">
            <button
              type="button"
              onClick={onResetFilters}
              className={[
                "flex-1 rounded border px-2 py-1 text-xs font-semibold transition-colors",
                !hasFilter
                  ? "border-[#1a365d] bg-[#1a365d] text-white"
                  : "border-slate-300 bg-white text-[#1a365d] hover:border-[#2b6cb0] hover:bg-sky-50",
              ].join(" ")}
            >
              All Topics ({topics.length})
            </button>
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1 rounded border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:border-[#2b6cb0] hover:bg-sky-50"
            >
              <RotateCcw className="size-3" />
              <span>Reset</span>
            </button>
          </div>
          <p className="mt-1.5 text-[11px] leading-snug text-slate-500">
            Click a topic to focus, or use checkboxes to filter multiple topics.
          </p>
        </div>

        {/* Topics & Subtopics List */}
        <nav className="flex-1 px-2.5 pt-2 pb-6">
          {topics.map((topic) => {
            const isSelected = selectedTopics.has(topic.id);
            const searchHidden = Boolean(
              queryLower && !topic.textLower.includes(queryLower)
            );
            if (searchHidden) return null;

            return (
              <div key={topic.id} className="mb-1">
                <div
                  className={[
                    "flex items-start gap-2 rounded border px-2 py-1.5 transition-colors",
                    isSelected
                      ? "border-sky-300 bg-sky-50"
                      : "border-transparent hover:bg-slate-100",
                  ].join(" ")}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onToggleTopicCheckbox(topic.id)}
                    aria-label={`Filter topic ${topic.id}: ${topic.shortTitle}`}
                    title="Include/exclude topic in multi-topic filter"
                    className="mt-0.5 size-3.5 shrink-0 cursor-pointer accent-[#2b6cb0]"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      onFocusTopic(topic.id);
                      onCloseMobile();
                    }}
                    className="flex flex-1 items-start gap-2 text-left"
                  >
                    <span
                      className={[
                        "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded text-[11px] font-bold",
                        isSelected
                          ? "bg-[#1a365d] text-white"
                          : "bg-slate-200 text-[#1a365d]",
                      ].join(" ")}
                    >
                      {topic.id}
                    </span>
                    <span
                      className={[
                        "text-xs leading-snug",
                        isSelected
                          ? "font-semibold text-[#1a365d]"
                          : "font-medium text-slate-800",
                      ].join(" ")}
                    >
                      {topic.shortTitle}
                    </span>
                  </button>
                </div>

                {isSelected && topic.subtopics.length > 0 && (
                  <ul className="mt-1 mb-1.5 ml-8 border-l-2 border-slate-300 pl-2.5">
                    {topic.subtopics.map((sub) => (
                      <li key={sub.id} className="my-0.5">
                        <a
                          href={`#${sub.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            onJumpSubtopic(topic.id, sub.id);
                            onCloseMobile();
                          }}
                          className="block rounded px-1.5 py-0.5 text-[11.5px] leading-snug text-slate-600 hover:bg-slate-100 hover:text-[#1a365d]"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
