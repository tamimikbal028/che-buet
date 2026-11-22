import { useEffect, useMemo, useRef } from "react";
import katex from "katex";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ChapterReader({
  chapter,
  topics,
  selectedTopics,
  searchQuery,
  onTopicsExtracted,
  onFocusTopic,
  onResetFilters,
}) {
  const bodyRef = useRef(null);

  const resolvedHtml = useMemo(
    () => chapter.html.replaceAll("{{SLIDES}}", chapter.slidesBase),
    [chapter.html, chapter.slidesBase]
  );

  // 1. Render KaTeX equations + extract topic/subtopic metadata once per chapter
  useEffect(() => {
    const root = bodyRef.current;
    if (!root) return;

    root.querySelectorAll(".katex-eq").forEach((el) => {
      const tex = el.textContent.trim();
      const displayMode = el.dataset.display !== "false";
      katex.render(tex, el, {
        displayMode,
        throwOnError: false,
        strict: false,
      });
    });

    const sectionEls = Array.from(root.querySelectorAll(".topic-section"));
    const extracted = sectionEls.map((sec) => {
      const id = sec.dataset.topic;
      const rawH2 =
        sec.querySelector("h2")?.textContent.replace(/\s+/g, " ").trim() || "";
      const fullTitle = rawH2.replace(/^\d+\.\s*/, "") || `Topic ${id}`;
      const shortTitle = sec.dataset.short || fullTitle;

      const subEls = Array.from(sec.querySelectorAll("h3.sub-title, .card > h4"));
      const subtopics = subEls.map((el, idx) => {
        const subId = `${chapter.slug}-topic-${id}-sub-${idx + 1}`;
        el.id = subId;
        const clone = el.cloneNode(true);
        clone.querySelectorAll(".slide-tag").forEach((t) => t.remove());
        const label = clone.textContent.replace(/\s+/g, " ").trim();
        return { id: subId, label };
      });

      return {
        id,
        shortTitle,
        fullTitle,
        subtopics,
        textLower: sec.textContent.toLowerCase(),
      };
    });

    onTopicsExtracted(extracted);
  }, [chapter.key, chapter.slug, resolvedHtml, onTopicsExtracted]);

  // 2. Apply topic-wise filter & keyword search to DOM sections without re-running KaTeX
  useEffect(() => {
    const root = bodyRef.current;
    if (!root) return;

    const queryLower = searchQuery.trim().toLowerCase();
    const hasTopicFilter = selectedTopics.size > 0;

    root.querySelectorAll(".topic-section").forEach((sec) => {
      const id = sec.dataset.topic;
      const matchesTopic = !hasTopicFilter || selectedTopics.has(id);
      const matchesQuery =
        !queryLower || sec.textContent.toLowerCase().includes(queryLower);
      sec.classList.toggle("hidden", !(matchesTopic && matchesQuery));
    });
  }, [selectedTopics, searchQuery, chapter.key]);

  const queryTrimmed = searchQuery.trim();
  const queryLower = queryTrimmed.toLowerCase();
  const hasTopicFilter = selectedTopics.size > 0;
  const isFiltered = hasTopicFilter || queryTrimmed.length > 0;

  const visibleCount = useMemo(() => {
    return topics.filter((t) => {
      const matchesTopic = !hasTopicFilter || selectedTopics.has(t.id);
      const matchesQuery = !queryLower || t.textLower.includes(queryLower);
      return matchesTopic && matchesQuery;
    }).length;
  }, [topics, selectedTopics, hasTopicFilter, queryLower]);

  // Build filter status text
  const filterStatus = useMemo(() => {
    if (!isFiltered) return "";
    const parts = [];
    if (hasTopicFilter) {
      const sorted = Array.from(selectedTopics).sort(
        (a, b) => Number(a) - Number(b)
      );
      if (sorted.length === 1) {
        const t = topics.find((item) => item.id === sorted[0]);
        parts.push(`Topic ${sorted[0]}: ${t?.shortTitle || ""}`);
      } else {
        parts.push(
          `Topics ${sorted.join(", ")} (${sorted.length} of ${topics.length})`
        );
      }
    }
    if (queryTrimmed) {
      parts.push(
        `Search: "${queryTrimmed}" (${visibleCount} match${
          visibleCount === 1 ? "" : "es"
        })`
      );
    }
    return `Showing ${parts.join(" · ")}`;
  }, [isFiltered, hasTopicFilter, selectedTopics, topics, queryTrimmed, visibleCount]);

  // Single-topic prev / next pager
  const singleTopicId =
    selectedTopics.size === 1 && !queryTrimmed
      ? Number(Array.from(selectedTopics)[0])
      : null;
  const prevTopic =
    singleTopicId !== null
      ? topics.find((t) => Number(t.id) === singleTopicId - 1)
      : null;
  const nextTopic =
    singleTopicId !== null
      ? topics.find((t) => Number(t.id) === singleTopicId + 1)
      : null;

  return (
    <div className="print-container mx-auto max-w-225 rounded-md bg-white px-6 py-7 shadow-md sm:px-12 sm:py-10">
      {/* Document Header */}
      <div className="mb-6 border-b-[3px] border-[#1a365d] pb-4">
        <h1 className="m-0 text-3xl font-bold tracking-tight text-[#1a365d]">
          {chapter.title}
        </h1>
        <div
          className="mt-1.5 text-[15px] font-semibold text-slate-600"
          dangerouslySetInnerHTML={{ __html: chapter.subtitle }}
        />
      </div>

      {/* Active Filter Status Banner */}
      {isFiltered && (
        <div className="no-print mb-4.5 flex flex-wrap items-center justify-between gap-3 rounded border border-sky-300 border-l-4 border-l-[#2b6cb0] bg-sky-50 px-3.5 py-2.5 text-sm text-[#1a365d]">
          <span className="font-medium">{filterStatus}</span>
          <button
            type="button"
            onClick={onResetFilters}
            className="rounded bg-[#1a365d] px-3 py-1 text-xs font-semibold text-white hover:bg-[#2b6cb0]"
          >
            Show All Topics
          </button>
        </div>
      )}

      {/* Contents Overview (TOC) */}
      {!isFiltered && topics.length > 0 && (
        <div className="mb-7 rounded border border-slate-300 border-l-4 border-l-[#2b6cb0] bg-slate-50 px-5 py-3.5 text-sm">
          <h3 className="mb-2 text-sm font-bold text-[#1a365d] uppercase">
            Contents Overview
          </h3>
          <ol className="m-0 list-decimal columns-1 gap-x-6 pl-5 md:columns-2">
            {topics.map((t) => (
              <li
                key={t.id}
                onClick={() => onFocusTopic(t.id)}
                className="mb-1 cursor-pointer text-slate-800 hover:text-[#2b6cb0] hover:underline"
              >
                {t.fullTitle}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Main Note HTML Content (keyed by chapter so KaTeX renders once per chapter) */}
      <div
        key={chapter.key}
        ref={bodyRef}
        className="note-body"
        dangerouslySetInnerHTML={{ __html: resolvedHtml }}
      />

      {/* Empty Search Result Message */}
      {isFiltered && visibleCount === 0 && (
        <div className="my-8 rounded border border-slate-200 bg-slate-50 px-4 py-6 text-center text-sm text-slate-600">
          No topics match your current filter.{" "}
          <button
            type="button"
            onClick={onResetFilters}
            className="font-semibold text-[#2b6cb0] underline"
          >
            Show all topics
          </button>
        </div>
      )}

      {/* Single-Topic Prev / Next Pager */}
      {singleTopicId !== null && (
        <div className="no-print mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-300 pt-4">
          <button
            type="button"
            disabled={!prevTopic}
            onClick={() => prevTopic && onFocusTopic(prevTopic.id)}
            className="inline-flex items-center gap-1.5 rounded border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-[#1a365d] hover:border-[#2b6cb0] hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="size-3.5" />
            <span>
              {prevTopic
                ? `${prevTopic.id}. ${prevTopic.shortTitle}`
                : "Previous Topic"}
            </span>
          </button>

          <button
            type="button"
            disabled={!nextTopic}
            onClick={() => nextTopic && onFocusTopic(nextTopic.id)}
            className="inline-flex items-center gap-1.5 rounded border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-[#1a365d] hover:border-[#2b6cb0] hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span>
              {nextTopic
                ? `${nextTopic.id}. ${nextTopic.shortTitle}`
                : "Next Topic"}
            </span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
