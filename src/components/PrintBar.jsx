import { Menu, Printer } from "lucide-react";

export default function PrintBar({
  course,
  teacher,
  chapter,
  onToggleSidebar,
}) {
  return (
    <div className="no-print mx-auto mb-3.5 flex max-w-225 flex-wrap items-center justify-between gap-3 rounded-md bg-[#1a365d] px-4 py-2.5 text-sm text-white shadow-xs">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
          className="inline-flex items-center gap-1.5 rounded border border-white/25 bg-white/15 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-white/25"
        >
          <Menu className="size-4" />
          <span>Topics</span>
        </button>
        <div className="truncate text-xs text-slate-200 sm:text-sm">
          <span className="font-semibold text-white">{course.code}</span>
          <span className="mx-1.5 text-slate-400">/</span>
          <span>{teacher.short || teacher.name}</span>
          <span className="mx-1.5 text-slate-400">/</span>
          <span className="font-medium text-sky-200">{chapter.title}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex shrink-0 items-center gap-1.5 rounded bg-amber-300 px-3.5 py-1.5 text-xs font-bold text-slate-900 hover:bg-amber-200"
      >
        <Printer className="size-3.5" />
        <span>Print / Save as PDF</span>
      </button>
    </div>
  );
}
