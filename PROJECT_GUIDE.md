# MTS Lecture Notes Hub — Project Guide & Agent Handoff

This document records **every rule, design decision, architecture detail, and step-by-step workflow** for this project so any future chat/agent can add new PDFs or maintain the notes with **zero extra explanation**.

> **Living Document Rule (MANDATORY for Every Future Chat):**
> Whenever you add a new PDF/chapter, modify any styling/layout/library, or change any approach/preference requested by the user, **always update `PROJECT_GUIDE.md`** (rules, folder structure, playbook, and Section 4 inventory table) so this file stays 100% up to date as the single source of truth.

---

## 1. Current Folder Structure

```text
MTS/
├── index.html                        # Unified offline study hub (imports all chapters)
├── PROJECT_GUIDE.md                  # This handoff & conventions guide
├── assets/
│   ├── styles.css                    # Shared stylesheet (layout, typography, sidebar, print)
│   ├── app.js                        # Shared chapter switcher, sidebar, topic filter, search, KaTeX renderer
│   └── katex/                        # Local offline KaTeX v0.16.11 bundle
│       ├── katex.min.css
│       ├── katex.min.js
│       └── fonts/                    # 20 .woff2 fonts
├── notes/
│   ├── relief-systems/               # PDF 1: 1_Relief system.pdf (47 slides)
│   │   ├── index.html                # Standalone chapter page
│   │   ├── note.js                   # Chapter registry payload + verbatim HTML
│   │   └── slides/                   # ONLY diagram/graph/P&ID slide PNGs (17 files)
│   ├── relief-sizing/                # PDF 2: 2_Chapter 9 relief sizing.pdf (Slides 2–41)
│   │   ├── index.html                # Standalone chapter page
│   │   ├── note.js                   # Chapter registry payload + verbatim HTML
│   │   └── slides/                   # ONLY diagram/graph/chart slide PNGs (10 files)
│   └── ejectors/                     # PDF 3: 3_Ejector.pdf (34 slides, Chap-6 Ludwig)
│       ├── index.html                # Standalone chapter page
│       ├── note.js                   # Chapter registry payload + verbatim HTML
│       └── slides/                   # ONLY diagram/graph/chart/form slide PNGs (17 files)
└── pdfs/
    ├── 1_Relief system.pdf
    ├── 2_Chapter 9 relief sizing.pdf
    └── 3_Ejector.pdf
```

---

## 2. Strict Rules & User Preferences (MUST FOLLOW)

### A. Content Fidelity (Zero Extra Words!)

1. **Strictly verbatim from the PDF slides:** Do **NOT** invent, expand, or editorialize headings, subheadings, bullet points, or explanatory notes that are not on the slides.
   - Example of what NOT to do: turning `"Relief System Protection"` into `"Relief System Protection Philosophy"`, adding `"Objectives of a"`, `"Engineering Tasks"`, `"Selection Criteria"`, `"Concept"`, `"Limitation:"`, `"When to use:"`, invented `"Note:"` paragraphs, or unprinted acronyms like `(PSI)`.
2. **Handwritten annotations on slides:** Include legible handwritten symbols/notes that actually appear on the slide (e.g., `Ps`, `Pb`, `PRV/PSV`, `N₂, CO₂`, `α`, `ΔT`) faithfully, without adding outside explanations.
3. **100% Slide Coverage:** Every non-blank slide of the PDF must be accounted for with slide tags (`<span class="slide-tag">Slide X</span>`).
4. **No Double Numbering:**
   - `assets/app.js` builds `<ol>` Contents Overview by stripping leading `N.` from each `h2.section-title`.
   - If a slide heading already starts with a case number (like `1a -`, `2a -`, `3 -`, `4 –`, `5 -`, `6 –`), do **not** prefix another number in front of it (e.g., put `(1a)` at the end of `h2` and keep `1a - ...` clean on `h3`).

### B. Slide Image Policy (Diagrams/Graphs ONLY!)

- **NEVER embed screenshots of text-only or equation-only slides.** If a slide only contains text, tables, or equations, write them cleanly in HTML + KaTeX — do **not** paste the slide image underneath.
- **ONLY render & embed slides that contain actual visuals** that are hard to reproduce in HTML:
  - Graphs, plots, log-log charts, nomographs
  - Equipment cutaways, P&IDs, vessel schematics, photos, complex multi-branch diagrams
- **Keep `slides/` clean:** Delete any unused slide PNGs so each `notes/<slug>/slides/` folder contains **only** the images actually embedded in `note.js`.

### C. Typography, Upright Text & Styling

- **No Italics Anywhere:** All prose (`em`, `i`, `cite`, `var`) AND all KaTeX math variables must remain **straight / upright** (`font-style: normal`, KaTeX math overridden to `KaTeX_Main` in `assets/styles.css`).
- **Fonts:** `IBM Plex Sans` for body (`15.5px`, `line-height: 1.65`, fallback `"Segoe UI"`) + `tabular-nums` on tables + local `KaTeX_Main` for math.
- **Plain Shared CSS (`assets/styles.css`), NOT Tailwind:** This is a zero-build, offline `file://` static hub. Keep shared semantic classes (`.card`, `.grid-2`, `.fig-box`, `.eq-box`, `.example-box`, `.flow-wrap`, `.slide-tag`, `table`).

### D. Equations (Local KaTeX ONLY)

- **Always use KaTeX (`<span class="katex-eq">...</span>`)** inside `.eq-box > .eq-row`. Never use CSS `.frac`/`.sqrt` hacks or raw MathML.
- KaTeX v0.16.11 is bundled locally in `assets/katex/` (100% offline, no CDN required).
- In `note.js`, use **`html: String.raw\`...\``** for template literals so LaTeX backslashes (`\frac`,`\sqrt`,`\left`,`\right`,`\rho`,`\Delta`, etc.) stay literal and are never eaten as JS escape sequences.
- Use `\left[ ... \right]` and `\left( ... \right)` around tall fractions/roots so brackets stretch cleanly.

### E. Offline-First `file://` Architecture (Zero CORS)

- The user opens `index.html` directly via `file://` in the browser — **never use `fetch()`** to load chapter HTML (blocked by browser CORS on `file://`).
- Instead, each chapter is a plain JS script (`notes/<slug>/note.js`) that pushes an entry into `window.NOTES_REGISTRY`:

  ```js
  window.NOTES_REGISTRY = window.NOTES_REGISTRY || [];
  window.NOTES_REGISTRY.push({
    id: "<slug>",
    title: "<Exact Chapter Title>",
    shortTitle: "<Short Sidebar Tab Label>",
    subtitle: "<Lecturer / Chapter Info &nbsp;|&nbsp; Slides X–Y>",
    meta: "<N> Topics · <M> Slides",
    slideCount: "<M> Slides",
    defaultSlidesPath: "slides",
    html: String.raw`
      <!-- SECTION 1 -->
      <section class="topic-section" id="topic-1" data-topic="1" data-short="<Short Topic Name>">
        <h2 class="section-title">1. <Topic Heading></h2>
        ...
      </section>
    `,
  });
  ```

- Reference images inside `note.js` using **`{{SLIDES}}/slide_XX.png`**.
  - In root `index.html`: `window.NOTE_IMG_BASE["<slug>"] = "notes/<slug>/slides";`
  - In standalone `notes/<slug>/index.html`: `window.NOTE_IMG_BASE["<slug>"] = "slides";`
- `assets/app.js` automatically provides:
  - Left sticky collapsible sidebar (mobile drawer on `< 960px`)
  - **Lecture Notes** chapter switcher in the sidebar (auto-shown when `NOTES_REGISTRY.length > 1`, synced with `#<slug>` URL hash)
  - **Topic-wise filter:** click topic title for single-topic focus + subtopic jump links + Prev/Next topic pager; use checkboxes for multi-topic filter
  - **Live keyword search** across topics
  - **Print / Save as PDF** (`@media print` hides sidebar/banners and prints only the currently visible topic(s) cleanly on A4)

---

## 3. Step-by-Step Playbook: Adding a New PDF

When the user drops a new PDF (e.g., `pdfs/3_<Topic>.pdf`):

### Step 1: Read Every Page of the PDF

- Inspect every page visually/OCR (using the PDF reading tool) to capture:
  - Exact verbatim headings, bullets, tables, footnotes, and equations
  - Handwritten notes on slides
  - Exact list of slide numbers that contain **diagrams/graphs/charts/figures** needing PNG export

### Step 2: Create the Chapter Folder & Render ONLY Visual Slides

> Note: On this Windows machine, `python` is not installed globally, while **Node.js (v24+)** and **PowerShell 5.1 with WinRT `Windows.Data.Pdf.PdfDocument`** work natively out of the box!

Create `notes/<slug>/slides/` and render **only** the diagram/graph page numbers (note: WinRT `GetPage()` is **0-indexed**, so Slide `N` = index `N - 1`):

```powershell
$slug = "<slug>"
$pdfRelPath = "pdfs\<filename>.pdf"
$neededSlides = @(5, 10, 12) # 1-based slide numbers that contain diagrams/graphs ONLY

New-Item -ItemType Directory -Force -Path "notes\$slug\slides" | Out-Null

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
$outDirPath = (Resolve-Path "notes\$slug\slides").Path
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

### Step 3: Create `notes/<slug>/note.js` & `notes/<slug>/index.html`

- Write `notes/<slug>/note.js` using `html: String.raw\`...\`` with:
  - Logical `<section class="topic-section" id="topic-N" data-topic="N" data-short="...">` groupings
  - Exact verbatim slide headings, bullets, tables, footnotes
  - Pure LaTeX equations inside `<div class="eq-box"><div class="eq-row"><span class="katex-eq">...</span></div></div>`
  - Only diagram/graph images via `<img src="{{SLIDES}}/slide_XX.png" ... />`
- Copy `notes/relief-sizing/index.html` to `notes/<slug>/index.html` and update the `<title>`, sidebar header, and `window.NOTE_IMG_BASE = { "<slug>": "slides" };`.

### Step 4: Register in Root `index.html`

In `index.html`, add 2 lines:

1. In `window.NOTE_IMG_BASE`:

   ```js
   "<slug>": "notes/<slug>/slides",
   ```

2. Right before `<script src="assets/app.js"></script>`:

   ```html
   <script src="notes/<slug>/note.js"></script>
   ```

### Step 5: Mandatory Verification Script (Run via Node)

Pipe this script into `node` in PowerShell (`@' ... '@ | node`) to verify JS syntax, balanced tags, zero missing/unused images, and **100% strict KaTeX compilation** across all registered chapters:

```js
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const katex = require("./assets/katex/katex.min.js");

const indexHtml = fs.readFileSync("index.html", "utf8");
const noteScripts = [
  ...indexHtml.matchAll(/<script src="(notes\/[^"]+\/note\.js)"><\/script>/g),
].map((m) => m[1]);
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of noteScripts) vm.runInContext(fs.readFileSync(f, "utf8"), ctx);
new Function(fs.readFileSync("assets/app.js", "utf8"));

for (const note of ctx.window.NOTES_REGISTRY) {
  const dir = `notes/${note.id}/slides`;
  const used = new Set(
    [...note.html.matchAll(/\{\{SLIDES\}\}\/(slide_\d+\.png)/g)].map(
      (m) => m[1],
    ),
  );
  const onDisk = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
  const missing = [...used].filter((f) => !onDisk.includes(f));
  const unused = onDisk.filter((f) => !used.has(f));
  const eqs = [
    ...note.html.matchAll(/<span class="katex-eq">([\s\S]*?)<\/span>/g),
  ].map((m) => m[1].trim());
  eqs.forEach((tex) =>
    katex.renderToString(tex, {
      displayMode: true,
      throwOnError: true,
      strict: false,
    }),
  );
  const divO = (note.html.match(/<div\b/g) || []).length;
  const divC = (note.html.match(/<\/div>/g) || []).length;
  const secO = (note.html.match(/<section\b/g) || []).length;
  const secC = (note.html.match(/<\/section>/g) || []).length;
  console.log(
    `[${note.id}] sections=${secO}/${secC}, divs=${divO}/${divC}, eqs=${eqs.length} OK, imgs=${used.size}, missing=${missing.length}, unused=${unused.length}`,
  );
}
```

---

## 4. Completed Chapters Inventory

| #   | PDF Source                                                                              | Folder                  | Topics | Equations (KaTeX) | Visual Slide PNGs Kept                                                    |
| --- | --------------------------------------------------------------------------------------- | ----------------------- | ------ | ----------------- | ------------------------------------------------------------------------- |
| 1   | `pdfs/1_Relief system.pdf` (47 slides)                                                  | `notes/relief-systems/` | 8      | 4                 | 17 (`01, 02, 03, 07, 12, 13, 15, 16, 18, 30, 31, 32, 35, 36, 39, 40, 42`) |
| 2   | `pdfs/2_Chapter 9 relief sizing.pdf` (Slides 2–41; p.1 blank)                           | `notes/relief-sizing/`  | 8      | 25                | 10 (`05, 10, 12, 14, 17, 21, 23, 33, 37, 40`)                             |
| 3   | `pdfs/3_Ejector.pdf` (34 slides, Chap-6 Ludwig)                                         | `notes/ejectors/`       | 7      | 11                | 17 (`01, 02, 03, 05, 06, 07, 09, 11, 15, 16, 17, 18, 19, 28, 30, 31, 34`) |
