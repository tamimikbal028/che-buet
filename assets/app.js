(function () {
  const notes = window.NOTES_REGISTRY || [];
  if (notes.length === 0) return;

  const sidebarTitle = document.getElementById("sidebarTitle");
  const sidebarSubtitle = document.getElementById("sidebarSubtitle");
  const chapterSwitcher = document.getElementById("chapterSwitcher");
  const chapterTabs = document.getElementById("chapterTabs");
  const topicNav = document.getElementById("topicNav");
  const topicSearch = document.getElementById("topicSearch");
  const showAllBtn = document.getElementById("showAllBtn");
  const clearChecksBtn = document.getElementById("clearChecksBtn");
  const docRoot = document.getElementById("docRoot");
  const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
  const sidebarCloseBtn = document.getElementById("sidebarCloseBtn");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");

  const imgBaseMap = window.NOTE_IMG_BASE || {};
  let activeNote = null;
  let sections = [];
  const selectedTopics = new Set();

  function closeMobileSidebar() {
    document.body.classList.remove("sidebar-open");
  }

  // Render chapter switcher if more than 1 note is imported
  if (notes.length > 1 && chapterSwitcher && chapterTabs) {
    chapterSwitcher.classList.add("visible");
    notes.forEach((note, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chapter-tab";
      btn.dataset.noteId = note.id;
      btn.innerHTML = `<span>${index + 1}. ${note.shortTitle || note.title}</span><span class="chapter-tab-meta">${note.slideCount}</span>`;
      btn.addEventListener("click", () => {
        if (activeNote && activeNote.id === note.id) return;
        loadNote(note.id, true);
        closeMobileSidebar();
      });
      chapterTabs.appendChild(btn);
    });
  }

  function loadNote(noteId, updateHash) {
    const note = notes.find((n) => n.id === noteId) || notes[0];
    activeNote = note;
    selectedTopics.clear();
    topicSearch.value = "";

    if (updateHash && notes.length > 1) {
      history.replaceState(null, "", `#${note.id}`);
    }

    document.title = `${note.title} — Lecture Notes`;
    if (sidebarTitle) sidebarTitle.textContent = note.title;
    if (sidebarSubtitle) sidebarSubtitle.textContent = note.meta;

    if (chapterTabs) {
      chapterTabs.querySelectorAll(".chapter-tab").forEach((tab) => {
        tab.classList.toggle("active", tab.dataset.noteId === note.id);
      });
    }

    const slidesPath = imgBaseMap[note.id] || note.defaultSlidesPath || "slides";
    const resolvedHtml = note.html.replaceAll("{{SLIDES}}", slidesPath);

    docRoot.innerHTML = `
      <div class="doc-header">
        <h1>${note.title}</h1>
        <div class="subtitle">${note.subtitle}</div>
      </div>

      <div class="filter-banner no-print" id="filterBanner">
        <span id="filterStatusText">Showing selected topic</span>
        <button type="button" class="filter-reset-btn" id="bannerResetBtn">
          Show All Topics
        </button>
      </div>

      <div class="toc" id="docToc">
        <h3>Contents Overview</h3>
        <ol id="tocList"></ol>
      </div>

      ${resolvedHtml}

      <div class="topic-pager no-print" id="topicPager">
        <button type="button" class="pager-btn" id="prevTopicBtn">&larr; Previous Topic</button>
        <button type="button" class="pager-btn" id="nextTopicBtn">Next Topic &rarr;</button>
      </div>
    `;

    sections = Array.from(docRoot.querySelectorAll(".topic-section"));
    showAllBtn.textContent = `All Topics (${sections.length})`;

    // Render all KaTeX equations
    if (window.katex) {
      docRoot.querySelectorAll(".katex-eq").forEach((el) => {
        const tex = el.textContent.trim();
        const displayMode = el.dataset.display !== "false";
        window.katex.render(tex, el, {
          displayMode,
          throwOnError: false,
          strict: false,
        });
      });
    }

    buildTocAndSidebar();
    document.getElementById("bannerResetBtn").addEventListener("click", resetAll);
    applyFilter(true);
  }

  function buildTocAndSidebar() {
    topicNav.innerHTML = "";
    const tocList = document.getElementById("tocList");
    tocList.innerHTML = "";

    sections.forEach((sec) => {
      const id = sec.dataset.topic;
      const rawH2 = sec.querySelector("h2")?.textContent.replace(/\s+/g, " ").trim() || "";
      const fullTitle = rawH2.replace(/^\d+\.\s*/, "") || `Topic ${id}`;
      const shortTitle = sec.dataset.short || fullTitle;

      // TOC entry
      const tocLi = document.createElement("li");
      tocLi.textContent = fullTitle;
      tocLi.addEventListener("click", () => {
        selectedTopics.clear();
        selectedTopics.add(id);
        applyFilter(true);
      });
      tocList.appendChild(tocLi);

      // Sidebar topic item
      const subHeadings = Array.from(
        sec.querySelectorAll("h3.sub-title, .card > h4")
      );

      const group = document.createElement("div");
      group.className = "topic-group";
      group.dataset.topic = id;

      const item = document.createElement("div");
      item.className = "topic-item";
      item.dataset.topic = id;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "topic-check";
      checkbox.title = "Include/exclude topic in multi-topic filter";
      checkbox.setAttribute("aria-label", `Filter topic ${id}: ${shortTitle}`);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "topic-btn";
      btn.innerHTML = `<span class="topic-num">${id}</span><span class="topic-label">${shortTitle}</span>`;

      item.appendChild(checkbox);
      item.appendChild(btn);
      group.appendChild(item);

      if (subHeadings.length > 0) {
        const ul = document.createElement("ul");
        ul.className = "subtopic-list";
        subHeadings.forEach((el, idx) => {
          const subId = `${activeNote.id}-topic-${id}-sub-${idx + 1}`;
          el.id = subId;
          const clone = el.cloneNode(true);
          clone.querySelectorAll(".slide-tag").forEach((t) => t.remove());
          const label = clone.textContent.replace(/\s+/g, " ").trim();

          const li = document.createElement("li");
          const a = document.createElement("a");
          a.className = "subtopic-link";
          a.href = `#${subId}`;
          a.textContent = label;
          a.addEventListener("click", (e) => {
            e.preventDefault();
            if (selectedTopics.size > 0 && !selectedTopics.has(id)) {
              selectedTopics.clear();
              selectedTopics.add(id);
              applyFilter(false);
            }
            closeMobileSidebar();
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          });
          li.appendChild(a);
          ul.appendChild(li);
        });
        group.appendChild(ul);
      }

      checkbox.addEventListener("change", (e) => {
        e.stopPropagation();
        if (checkbox.checked) {
          selectedTopics.add(id);
        } else {
          selectedTopics.delete(id);
        }
        applyFilter(true);
      });

      btn.addEventListener("click", () => {
        if (selectedTopics.size === 1 && selectedTopics.has(id)) {
          selectedTopics.clear();
        } else {
          selectedTopics.clear();
          selectedTopics.add(id);
        }
        applyFilter(true);
        closeMobileSidebar();
      });

      topicNav.appendChild(group);
    });
  }

  function applyFilter(scrollTop) {
    const query = topicSearch.value.trim().toLowerCase();
    const hasTopicFilter = selectedTopics.size > 0;
    const filterBanner = document.getElementById("filterBanner");
    const filterStatusText = document.getElementById("filterStatusText");
    const docToc = document.getElementById("docToc");
    const topicPager = document.getElementById("topicPager");
    const prevTopicBtn = document.getElementById("prevTopicBtn");
    const nextTopicBtn = document.getElementById("nextTopicBtn");
    let visibleCount = 0;

    sections.forEach((sec) => {
      const id = sec.dataset.topic;
      const matchesTopic = !hasTopicFilter || selectedTopics.has(id);
      const matchesQuery =
        !query || sec.textContent.toLowerCase().includes(query);
      const isVisible = matchesTopic && matchesQuery;

      sec.classList.toggle("hidden", !isVisible);
      if (isVisible) visibleCount++;

      const group = topicNav.querySelector(`.topic-group[data-topic="${id}"]`);
      if (!group) return;
      const item = group.querySelector(".topic-item");
      const checkbox = group.querySelector(".topic-check");
      const isSelected = selectedTopics.has(id);

      checkbox.checked = isSelected;
      item.classList.toggle("active", isSelected);
      group.classList.toggle("expanded", isSelected);
      item.classList.toggle("search-hidden", Boolean(query && !matchesQuery));
    });

    showAllBtn.classList.toggle("active", !hasTopicFilter && !query);
    if (docToc) {
      docToc.style.display = hasTopicFilter || query ? "none" : "";
    }

    if (hasTopicFilter || query) {
      const parts = [];
      if (hasTopicFilter) {
        const sorted = Array.from(selectedTopics).sort(
          (a, b) => Number(a) - Number(b)
        );
        parts.push(
          sorted.length === 1
            ? `Topic ${sorted[0]}: ${
                sections.find((s) => s.dataset.topic === sorted[0])?.dataset
                  .short
              }`
            : `Topics ${sorted.join(", ")} (${sorted.length} of ${
                sections.length
              })`
        );
      }
      if (query) {
        parts.push(
          `Search: "${topicSearch.value.trim()}" (${visibleCount} match${
            visibleCount === 1 ? "" : "es"
          })`
        );
      }
      filterStatusText.textContent = `Showing ${parts.join(" · ")}`;
      filterBanner.classList.add("visible");
    } else {
      filterBanner.classList.remove("visible");
    }

    if (selectedTopics.size === 1 && !query) {
      const current = Number(Array.from(selectedTopics)[0]);
      const prevSec = sections.find(
        (s) => Number(s.dataset.topic) === current - 1
      );
      const nextSec = sections.find(
        (s) => Number(s.dataset.topic) === current + 1
      );

      prevTopicBtn.disabled = !prevSec;
      prevTopicBtn.textContent = prevSec
        ? `← ${prevSec.dataset.topic}. ${prevSec.dataset.short}`
        : "← Previous Topic";
      prevTopicBtn.onclick = prevSec
        ? () => {
            selectedTopics.clear();
            selectedTopics.add(prevSec.dataset.topic);
            applyFilter(true);
          }
        : null;

      nextTopicBtn.disabled = !nextSec;
      nextTopicBtn.textContent = nextSec
        ? `${nextSec.dataset.topic}. ${nextSec.dataset.short} →`
        : "Next Topic →";
      nextTopicBtn.onclick = nextSec
        ? () => {
            selectedTopics.clear();
            selectedTopics.add(nextSec.dataset.topic);
            applyFilter(true);
          }
        : null;

      topicPager.classList.add("visible");
    } else {
      topicPager.classList.remove("visible");
    }

    if (scrollTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function resetAll() {
    selectedTopics.clear();
    topicSearch.value = "";
    applyFilter(true);
  }

  showAllBtn.addEventListener("click", resetAll);
  clearChecksBtn.addEventListener("click", resetAll);
  topicSearch.addEventListener("input", () => applyFilter(false));

  sidebarToggleBtn.addEventListener("click", () => {
    if (window.innerWidth <= 960) {
      document.body.classList.toggle("sidebar-open");
    } else {
      document.body.classList.toggle("sidebar-collapsed");
    }
  });
  sidebarCloseBtn.addEventListener("click", closeMobileSidebar);
  sidebarBackdrop.addEventListener("click", closeMobileSidebar);

  // Initial chapter load (supports #relief-sizing hash)
  const hashId = window.location.hash.replace(/^#/, "");
  const initial = notes.some((n) => n.id === hashId) ? hashId : notes[0].id;
  loadNote(initial, false);
})();
