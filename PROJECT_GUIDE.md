# Study Hub — Project Guide & Agent Handoff (React + Vite)

This document records **every rule, design decision, folder convention, and step-by-step workflow** for this multi-course, multi-teacher **React + Vite + Tailwind CSS v4 + KaTeX** study hub so any future chat/agent can add new courses, teachers, or PDFs with **zero extra explanation**.

> **Living Document Rule (MANDATORY for Every Future Chat):**
> Whenever you add a new course, teacher, or PDF chapter, modify any styling/layout/library, or change any approach/preference requested by the user, **always update `PROJECT_GUIDE.md`** (rules, folder structure, playbook, and Section 4 inventory table) so this file stays 100% up to date as the single source of truth.

---

## 1. Current Folder Structure (Auto-Discovery)

Vite automatically discovers every Course → Instructor → Chapter via `import.meta.glob()` in `src/lib/loadCourses.js` — **no manual imports or sidebar edits are needed** when adding a new course, teacher, or chapter!

```text
MTS/
├── index.html                        # Vite entry (IBM Plex Sans font + #root)
├── package.json                      # React 19, Vite 6, Tailwind CSS v4, KaTeX, lucide-react
├── vite.config.js                    # @vitejs/plugin-react + @tailwindcss/vite + base: "./"
├── PROJECT_GUIDE.md                  # This handoff & conventions guide
├── pdfs/                             # Source PDFs organized by Course -> Teacher
│   └── ChE-311-Unit-Operations/
│       └── Dr-Md-Tanvir-Sowgath/
│           ├── 1_Relief system.pdf
│           ├── 2_Chapter 9 relief sizing.pdf
│           ├── 3_Ejector.pdf
│           ├── 4_2025_Evaporator.pdf
│           ├── 5_Dryer.pdf
│           └── 6_Mixing Agitation  2026.pdf
├── public/
│   └── slides/                       # ONLY diagram/graph/chart/form PNGs (mirrors Course/Teacher/Chapter)
│       └── ChE-311-Unit-Operations/
│           └── Dr-Md-Tanvir-Sowgath/
│               ├── 01-relief-systems/       # 17 PNGs
│               ├── 02-relief-sizing/        # 10 PNGs
│               ├── 03-ejectors/             # 17 PNGs
│               ├── 04-evaporator/           # 28 PNGs
│               ├── 05-dryer/                # 33 PNGs
│               └── 06-mixing-agitation/     # 24 PNGs
└── src/
    ├── main.jsx
    ├── App.jsx                       # State, URL hash (#course/teacher/chapter), layout shell
    ├── lib/
    │   └── loadCourses.js            # Auto-discovers courses, teachers, chapters & computes {{SLIDES}}
    ├── components/
    │   ├── Sidebar.jsx               # Course switcher -> Instructor/Part -> Chapters -> Topic filter + Search
    │   ├── PrintBar.jsx              # Sidebar toggle, Course/Teacher/Chapter breadcrumb, Print/PDF button
    │   └── ChapterReader.jsx         # KaTeX renderer, TOC, Filter Banner, Prev/Next Topic Pager
    ├── styles/
    │   ├── index.css                 # @import "tailwindcss"; + KaTeX CSS + notes.css
    │   └── notes.css                 # Note body typography, upright KaTeX (0 italics), @media print
    └── courses/
        └── ChE-311-Unit-Operations/
            ├── course.json           # { "code": "ChE 311", "name": "Unit Operations", "order": 1 }
            └── Dr-Md-Tanvir-Sowgath/
                ├── teacher.json      # { "name": "Dr. Md Tanvir Sowgath", "short": "MTS", "part": "Part A", "order": 1 }
                ├── 01-relief-systems.js
                ├── 02-relief-sizing.js
                ├── 03-ejectors.js
                ├── 04-evaporator.js
                ├── 05-dryer.js
                └── 06-mixing-agitation.js
```

### Running Locally & Building

```bash
npm run dev      # Start local dev server (http://localhost:5173)
npm run build    # Production build into dist/ (ready for Vercel / GitHub Pages / Netlify)
npm run preview  # Preview production build locally
```

---

## 2. Strict Rules & User Preferences (MUST FOLLOW)

### A. Content Fidelity (Zero Extra Words!)

1. **Strictly verbatim from the PDF slides:** Do **NOT** invent, expand, or editorialize headings, subheadings, bullet points, or explanatory notes that are not on the slides.
   - Example of what NOT to do: turning `"Relief System Protection"` into `"Relief System Protection Philosophy"`, adding `"Objectives of a"`, `"Engineering Tasks"`, `"Selection Criteria"`, `"Concept"`, `"Limitation:"`, `"When to use:"`, invented `"Note:"` paragraphs, or unprinted acronyms like `(PSI)`.
2. **Handwritten annotations on slides:** Include legible handwritten symbols/notes and typo fixes that actually appear on the slide (e.g., `Ps`, `Pb`, `PRV/PSV`, `N₂, CO₂`, `α`, `ΔT`, `1/U² vs θ is linear`) faithfully, without adding outside explanations.
3. **100% Slide Coverage:** Every non-blank slide of the PDF must be accounted for with slide tags (`<span class="slide-tag">Slide X</span>`).
4. **No Double Numbering:**
   - `ChapterReader.jsx` builds `<ol>` Contents Overview by stripping leading `N.` from each `h2.section-title`.
   - If a slide heading already starts with a case number (like `1a -`, `2a -`, `3 -`, `4 –`, `5 -`, `6 –`), do **not** prefix another number in front of it (e.g., put `(1a)` at the end of `h2` and keep `1a - ...` clean on `h3`).

### B. Slide Image Policy (Diagrams/Graphs ONLY!)

- **NEVER embed screenshots of text-only or equation-only slides.** If a slide only contains text, tables, or equations, write them cleanly in HTML + KaTeX — do **not** paste the slide image underneath.
- **ONLY render & embed slides that contain actual visuals** that are hard to reproduce in HTML:
  - Graphs, plots, log-log charts, psychrometric charts, nomographs
  - Equipment cutaways, P&IDs, vessel schematics, photos, complex multi-branch diagrams, dense industrial spec forms
- **Keep `public/slides/.../` clean:** Delete any unused slide PNGs so each chapter's slide folder contains **only** the images actually embedded in its `.js` module.

### C. Typography, Upright Text & Styling

- **No Italics Anywhere:** All prose (`em`, `i`, `cite`, `var`) AND all KaTeX math variables must remain **straight / upright** (`font-style: normal`, KaTeX math overridden to `KaTeX_Main` in `src/styles/notes.css`).
- **Fonts:** `IBM Plex Sans` for body (`15.5px`, `line-height: 1.65`, fallback `"Segoe UI"`) + `tabular-nums` on tables + `KaTeX_Main` for math.
- **Hybrid Styling (Tailwind CSS v4 + Semantic Note CSS):**
  - Use **Tailwind CSS v4** (preferring canonical utilities over arbitrary values whenever available) for React UI chrome (`Sidebar.jsx`, `PrintBar.jsx`, `ChapterReader.jsx` controls).
  - Use **`src/styles/notes.css`** for all note content inside `.note-body` (`.card`, `.grid-2`, `.fig-box`, `.eq-box`, `.example-box`, `.flow-wrap`, `.slide-tag`, `table`, `@media print`) so chapter `.js` files stay clean, readable, and consistent.

### D. Equations (KaTeX ONLY)

- **Always use KaTeX (`<span class="katex-eq">...</span>`)** inside `.eq-box > .eq-row`. Never use CSS `.frac`/`.sqrt` hacks or raw MathML.
- `katex` is installed via npm and imported in `ChapterReader.jsx` + `src/styles/index.css`.
- In chapter `.js` files, use **`html: String.raw\`...\``** (or`JSON.stringify`) so LaTeX backslashes (`\frac`,`\sqrt`,`\left`,`\right`,`\rho`,`\Delta`, etc.) stay literal and are never eaten as JS escape sequences.
- Use `\left[ ... \right]` and `\left( ... \right)` around tall fractions/roots so brackets stretch cleanly.

### E. Chapter Module Format (`src/courses/<Course>/<Teacher>/<NN-chapter>.js`)

Every chapter is a clean ES module:

```js
export default {
  order: 1,
  id: "01-chapter-slug",
  title: "Exact Chapter Title",
  shortTitle: "Short Sidebar Label",
  subtitle: "Instructor Name &nbsp;|&nbsp; All N Slides",
  meta: "8 Topics · N Slides",
  slideCount: "N Slides",
  html: String.raw`
    <!-- SECTION 1 -->
    <section class="topic-section" id="topic-1" data-topic="1" data-short="Short Sidebar Label">
      <h2 class="section-title">1. Verbatim Section Title</h2>
      ...
    </section>
  `,
};
```

- Reference images inside `html` using **`{{SLIDES}}/slide_XX.png`**. `loadCourses.js` automatically maps `{{SLIDES}}` to `${BASE_URL}slides/<Course>/<Teacher>/<NN-chapter>`.

---

## 3. Step-by-Step Playbook: Adding a New Course, Teacher, or PDF

### Step 0: PDF Triage (When Multiple PDFs Are Provided)

- If the user uploads multiple files for the same topic (e.g., full lecture slides vs. condensed/summary slides, or lecture slides vs. a full textbook chapter), **compare them first and report your recommendation to the user before converting**:
  - Prefer the **full lecture slide deck** over condensed/AI-summary versions (condensed decks often drop worked examples, equations, and class annotations).
  - Do **not** convert massive reference textbook chapters unless explicitly requested — convert the lecturer's slide deck instead.
- Deduplicate pure repeated slides (cite all slide numbers in `<span class="slide-tag">Slides X, Y</span>`), skip blank slides and unlabeled filler photos, and for dense spec sheets with zoomed legible halves, keep the legible halves rather than tiny unreadable full-page scans.

### Step 1: Ensure Course & Teacher Metadata Exist

Place the source PDF under `pdfs/<Course-Slug>/<Teacher-Slug>/`.

1. If it is a **new course**, create `src/courses/<Course-Slug>/course.json`:

   ```json
   { "code": "ChE 311", "name": "Unit Operations", "order": 1 }
   ```

2. If it is a **new teacher/part**, create `src/courses/<Course-Slug>/<Teacher-Slug>/teacher.json`:

   ```json
   { "name": "Dr. Teacher Name", "short": "ABC", "part": "Part B", "order": 2 }
   ```

   _(No changes to `App.jsx` or `Sidebar.jsx` needed — Vite auto-discovers everything!)_

### Step 2: Read Every Page & Render ONLY Visual Slides

> Note: On this Windows machine, `python` is not installed globally, while **Node.js (v24+)** and **PowerShell 5.1 with WinRT `Windows.Data.Pdf.PdfDocument`** work natively out of the box!

Render **only** the diagram/graph page numbers into `public\slides\<Course-Slug>\<Teacher-Slug>\<NN-chapter>\` (WinRT `GetPage()` is **0-indexed**, so Slide `N` = index `N - 1`):

```powershell
$courseSlug = "ChE-311-Unit-Operations"
$teacherSlug = "Dr-Md-Tanvir-Sowgath"
$chapterSlug = "07-new-chapter"
$pdfRelPath = "pdfs\$courseSlug\$teacherSlug\<filename>.pdf"
$neededSlides = @(5, 10, 12) # 1-based slide numbers that contain diagrams/graphs ONLY

$outRel = "public\slides\$courseSlug\$teacherSlug\$chapterSlug"
New-Item -ItemType Directory -Force -Path $outRel | Out-Null

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]
$asTaskAction = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction' })[0]
function Await($WinRtTask, $ResultType) {
  $netTask = $asTaskGeneric.MakeGenericMethod($ResultType).Invoke($null, @($WinRtTask))
  $netTask.Wait(-1) | Out-Null
  $netTask.Result
}
function AwaitAction($WinRtTask) {
  $netTask = $asTaskAction.Invoke($null, @($WinRtTask))
  $netTask.Wait(-1) | Out-Null
}
[void][Windows.Storage.StorageFile,Windows.Storage,ContentType=WindowsRuntime]
[void][Windows.Data.Pdf.PdfDocument,Windows.Data.Pdf,ContentType=WindowsRuntime]
[void][Windows.Data.Pdf.PdfPageRenderOptions,Windows.Data.Pdf,ContentType=WindowsRuntime]
[void][Windows.Storage.StorageFolder,Windows.Storage,ContentType=WindowsRuntime]
[void][Windows.Storage.CreationCollisionOption,Windows.Storage,ContentType=WindowsRuntime]
[void][Windows.Storage.FileAccessMode,Windows.Storage,ContentType=WindowsRuntime]

$pdfPath = (Resolve-Path $pdfRelPath).Path
$outDirPath = (Resolve-Path $outRel).Path
$file = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath)) ([Windows.Storage.StorageFile])
$pdf = Await ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)) ([Windows.Data.Pdf.PdfDocument])
$outFolder = Await ([Windows.Storage.StorageFolder]::GetFolderFromPathAsync($outDirPath)) ([Windows.Storage.StorageFolder])

foreach ($slideNum in $neededSlides) {
  $page = $pdf.GetPage([uint32]($slideNum - 1))
  $opts = New-Object Windows.Data.Pdf.PdfPageRenderOptions
  $opts.DestinationWidth = [uint32]1600
  $outName = ("slide_{0:D2}.png" -f $slideNum)
  $outFile = Await ($outFolder.CreateFileAsync($outName, [Windows.Storage.CreationCollisionOption]::ReplaceExisting)) ([Windows.Storage.StorageFile])
  $stream = Await ($outFile.OpenAsync([Windows.Storage.FileAccessMode]::ReadWrite)) ([Windows.Storage.Streams.IRandomAccessStream])
  AwaitAction ($page.RenderToStreamAsync($stream, $opts))
  $stream.Dispose()
  $page.Dispose()
}
```

### Step 3: Write `src/courses/<Course-Slug>/<Teacher-Slug>/<NN-chapter>.js`

Use these exact HTML component patterns inside `html: String.raw\`...\``:

```html
<section
  class="topic-section"
  id="topic-1"
  data-topic="1"
  data-short="Short Sidebar Label"
>
  <h2 class="section-title">1. Verbatim Section Title</h2>

  <h3 class="sub-title">
    1.1 Verbatim Subtopic Heading <span class="slide-tag">Slides 3, 4</span>
  </h3>

  <div class="grid-2">
    <div class="card">
      <h4>1.2 Card Heading <span class="slide-tag">Slide 5</span></h4>
      <ul style="margin-bottom: 0">
        <li>...</li>
      </ul>
    </div>
  </div>

  <div class="eq-box">
    <div class="eq-row">
      <span class="katex-eq">Q = U A \Delta T</span>
      <span class="eq-ref">Eq. 16-1</span>
    </div>
  </div>

  <div class="example-box">
    <h4>Example 16.1 <span class="slide-tag">Slides 53–62</span></h4>
    <p>...</p>
  </div>

  <div class="fig-box">
    <strong>Slide 10: Exact Figure Caption</strong><br />
    <img
      src="{{SLIDES}}/slide_10.png"
      alt="Slide 10 - Caption"
      style="width:85%; margin:6px auto 0 auto;"
    />
  </div>
</section>
```

### Step 4: Mandatory Verification (Node + KaTeX + Vite Build)

Run both checks after every chapter addition:

1. **Verify all chapters, tags, images & strict KaTeX compilation:**

   ```powershell
   @'
   import fs from "node:fs";
   import path from "node:path";
   import { pathToFileURL } from "node:url";
   import katex from "katex";

   const coursesRoot = "src/courses";
   let totalCh = 0, totalTopics = 0, totalEqs = 0, totalImgs = 0;

   for (const courseSlug of fs.readdirSync(coursesRoot)) {
     const coursePath = path.join(coursesRoot, courseSlug);
     if (!fs.statSync(coursePath).isDirectory()) continue;
     for (const teacherSlug of fs.readdirSync(coursePath)) {
       const teacherPath = path.join(coursePath, teacherSlug);
       if (!fs.statSync(teacherPath).isDirectory()) continue;
       const files = fs.readdirSync(teacherPath).filter((f) => f.endsWith(".js")).sort();
       for (const file of files) {
         const chSlug = file.replace(/\.js$/, "");
         const mod = await import(pathToFileURL(path.resolve(teacherPath, file)).href);
         const note = mod.default;
         const dir = path.join("public", "slides", courseSlug, teacherSlug, chSlug);
         const used = new Set([...note.html.matchAll(/\{\{SLIDES\}\}\/(slide_\d+\.png)/g)].map((m) => m[1]));
         const onDisk = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
         const missing = [...used].filter((f) => !onDisk.includes(f));
         const unused = onDisk.filter((f) => !used.has(f));
         const eqs = [...note.html.matchAll(/<span class="katex-eq">([\s\S]*?)<\/span>/g)].map((m) => m[1].trim());
         eqs.forEach((tex) => katex.renderToString(tex, { displayMode: true, throwOnError: true, strict: false }));
         const divO = (note.html.match(/<div\b/g) || []).length;
         const divC = (note.html.match(/<\/div>/g) || []).length;
         const secO = (note.html.match(/<section\b/g) || []).length;
         const secC = (note.html.match(/<\/section>/g) || []).length;
         if (divO !== divC || secO !== secC || missing.length || unused.length) {
           throw new Error(`Validation failed for ${courseSlug}/${teacherSlug}/${chSlug}`);
         }
         totalCh++; totalTopics += secO; totalEqs += eqs.length; totalImgs += used.size;
         console.log(`[${courseSlug}/${teacherSlug}/${chSlug}] sections=${secO}/${secC}, divs=${divO}/${divC}, eqs=${eqs.length} OK, imgs=${used.size} (0 missing, 0 unused)`);
       }
     }
   }
   console.log(`\nALL OK: ${totalCh} chapters · ${totalTopics} topics · ${totalEqs} KaTeX eqs · ${totalImgs} visual PNGs`);
   '@ | node --input-type=module
   ```

2. **Verify production bundle:** `npm run build`

### Step 5: Update `PROJECT_GUIDE.md`

- Add the new course/teacher/chapter to **Section 1 (Current Folder Structure)** and **Section 4 (Completed Chapters Inventory)**.
- If any rule or UI behavior changed, update **Section 2** or **Section 3**.

---

## 4. Completed Chapters Inventory

### ChE 311 — Unit Operations (`ChE-311-Unit-Operations`)

#### Part A: Dr. Md Tanvir Sowgath (`Dr-Md-Tanvir-Sowgath`)

| #   | PDF Source                                                                                                 | Chapter Module           | Topics | KaTeX Eqs | Visual Slide PNGs Kept                                                                                                                    |
| --- | ---------------------------------------------------------------------------------------------------------- | ------------------------ | ------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `pdfs/ChE-311-Unit-Operations/Dr-Md-Tanvir-Sowgath/1_Relief system.pdf` (47 slides)                        | `01-relief-systems.js`   | 8      | 4         | 17 (`01, 02, 03, 07, 12, 13, 15, 16, 18, 30, 31, 32, 35, 36, 39, 40, 42`)                                                                 |
| 2   | `pdfs/ChE-311-Unit-Operations/Dr-Md-Tanvir-Sowgath/2_Chapter 9 relief sizing.pdf` (Slides 2–41; p.1 blank) | `02-relief-sizing.js`    | 8      | 25        | 10 (`05, 10, 12, 14, 17, 21, 23, 33, 37, 40`)                                                                                             |
| 3   | `pdfs/ChE-311-Unit-Operations/Dr-Md-Tanvir-Sowgath/3_Ejector.pdf` (34 slides, Chap-6 Ludwig)               | `03-ejectors.js`         | 7      | 11        | 17 (`01, 02, 03, 05, 06, 07, 09, 11, 15, 16, 17, 18, 19, 28, 30, 31, 34`)                                                                 |
| 4   | `pdfs/ChE-311-Unit-Operations/Dr-Md-Tanvir-Sowgath/4_2025_Evaporator.pdf` (101 slides, CHE 311)            | `04-evaporator.js`       | 11     | 67        | 28 (`10, 14, 16, 17, 19, 20, 21, 30, 32, 33, 35, 37, 38, 39, 42, 43, 44, 45, 58, 59, 70, 77, 80, 91, 92, 97, 99, 101`)                    |
| 5   | `pdfs/ChE-311-Unit-Operations/Dr-Md-Tanvir-Sowgath/5_Dryer.pdf` (99 slides)                                | `05-dryer.js`            | 10     | 54        | 33 (`04, 06, 07, 08, 09, 11, 12, 14, 15, 16, 19, 20, 21, 22, 23, 24, 25, 27, 28, 33, 35, 37, 39, 40, 42, 44, 48, 52, 60, 67, 69, 79, 82`) |
| 6   | `pdfs/ChE-311-Unit-Operations/Dr-Md-Tanvir-Sowgath/6_Mixing Agitation  2026.pdf` (48 slides)               | `06-mixing-agitation.js` | 8      | 16        | 24 (`01, 08, 09, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 26, 27, 28, 29, 34, 37, 42, 43, 47, 48`)                                     |
