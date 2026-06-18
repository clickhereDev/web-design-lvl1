# web-design-lvl1

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/favicon.svg">
    <img alt="web-design-lvl1" src="public/favicon.svg" width="72" height="72">
  </picture>
</p>

<p align="center">
  <strong>Bilingual (AR/EN) Interactive HTML &amp; CSS Reference &amp; Bootcamp Planner</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white" alt="React 18">
  <img src="https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white" alt="Vite 6">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3">
  <img src="https://img.shields.io/badge/React_Router-7.18-CA4245?logo=reactrouter&logoColor=white" alt="React Router 7">
  <img src="https://img.shields.io/badge/Architecture-SPA-FF6600" alt="SPA Architecture">
  <img src="https://img.shields.io/badge/i18n-AR%20%7C%20EN-22C55E" alt="AR/EN i18n">
</p>

---

## Executive Summary

**web-design-lvl1** is a production-grade, dual-track interactive reference platform that serves as both a **comprehensive HTML & CSS documentation hub** and a **university-level bootcamp instructor dashboard**. Built for an Egyptian university curriculum, the platform delivers **74 structured topics** (43 HTML, 31 CSS) with live code sandboxing, bi-directional RTL/LTR localization, and a full 4-week lecture-planning system — all within a zero-lag client-side architecture.

The engineering emphasis is on **developer ergonomics**: a static data-driven curriculum model, context-scoped state management, and utility-first styling that keeps the bundle lean and the DX fast.

---

## Architectural Core Features

### Client-Side Routing Isolation

```
/           → LandingPage         (hero, course identity, outcomes)
/docs       → DocumentationHub    (dual-track topic browser + sandbox)
/instructor → InstructorPage      (4-week schedule, evaluation KPIs)
/*          → Navigate to /       (catch-all)
```

Each route is an **independent view** with its own data scope, enabling code-split readiness. The `DocumentationHub` route houses the most architecturally significant state machine — the `NavigationContext` — which governs active track (HTML/CSS), active topic ID, and drives the sidebar-tree + content panel synchronously.

### Dynamic Auto-Expanding Sandbox Engine

The `LiveSandbox` component (`src/components/LiveSandbox.jsx`) implements a **synchronized textarea–gutter–iframe** triad:

| Layer | Mechanism |
|---|---|
| **Textarea** | Auto-growing via `scrollHeight` recalculation on every `onInput` event; `overflow: hidden` prevents scrollbar flickering |
| **Line-Number Gutter** | Vertically 1:1 aligned with the textarea via identical `font-size`, `line-height`, `padding`, and `font-family`; re-renders on every keystroke via `value.split('\n').length` |
| **Iframe Preview** | Real-time `srcdoc` injection wrapped by `wrapInDocument()` → valid HTML document; `onLoad` handler auto-heights the iframe and forces external links to `target="_blank"`; `sandbox="allow-same-origin"` preserves styling scope |

The editor also features a **dirty-state detector**: a "Modified" badge appears when `editorCode !== boilerplateCode`, providing visual feedback on user edits.

### Bi-Directional Localization (i18n)

The `LanguageContext` (`src/context/LanguageContext.jsx`) implements:

- **Two mutations on `<html>`**: `lang` (`en`/`ar`) and `dir` (`ltr`/`rtl`) — enabling CSS logical properties and browser-native bidi layout.
- **`t(strings)` helper**: accepts `{ en, ar }` objects and returns the correct language string; used by every UI component.
- **`localStorage` persistence** under key `wd-lang`.
- **74 topic explanations** paired in English and Arabic, with Arabic typography driven by `Noto Sans Arabic` via a `font-arabic` utility class.

---

## Repository Directory Blueprint

```
web-design-lvl1/
├── index.html                           # Vite entry — root DOM mount
├── vite.config.js                       # Vite 6 + @vitejs/plugin-react
├── tailwind.config.js                   # Custom design tokens (brand/cta/surface)
├── postcss.config.js                    # Tailwind + Autoprefixer
├── vercel.json                          # SPA rewrites for Vercel deployment
├── public/
│   └── favicon.svg                      # SVG code-bracket favicon
├── src/
│   ├── index.jsx                        # React 18 createRoot entry
│   ├── index.css                        # Tailwind layers + global resets
│   ├── App.jsx                          # BrowserRouter + route definitions
│   ├── App.css                          # Component-level transitions
│   │
│   ├── context/                         # State management layer
│   │   ├── ThemeContext.jsx             # Dark/light/system with OS-preference listener
│   │   ├── LanguageContext.jsx          # RTL/LTR i18n with t() helper
│   │   └── NavigationContext.jsx        # Active track/topic state
│   │
│   ├── data/                            # Static curriculum data model
│   │   ├── translations.js             # 50+ UI string pairs (en/ar)
│   │   ├── topics.js                   # 43 HTML topics (7 chapters)
│   │   ├── cssTopics.js                # 31 CSS topics (5 chapters)
│   │   └── instructor.js              # 8 lectures + 4 soft skills + evaluation KPIs
│   │
│   └── components/
│       ├── layout/                     # Global chrome
│       │   ├── Header.jsx              # Sticky glassmorphism nav with theme/lang toggles
│       │   └── Footer.jsx             # Bilingual copyright + tech badges
│       │
│       ├── LandingPage.jsx             # / route — hero, course identity, CTAs
│       ├── DocumentationHub.jsx        # /docs route — dual-track browser + sandbox
│       ├── InstructorPage.jsx          # /instructor route — lecture schedule + KPIs
│       │
│       ├── Sidebar.jsx                 # Collapsible chapter-tree accordion
│       ├── TopicContent.jsx            # 5-tier topic renderer (explain → code → preview → sandbox → breakdown)
│       │
│       ├── RichExplanation.jsx         # Markdown-to-HTML converter for topic explanations
│       ├── CodeBlock.jsx               # Mac-styled code viewer with filename badge
│       ├── LivePreview.jsx             # Read-only iframe preview
│       ├── LiveSandbox.jsx             # Full interactive code editor + live preview
│       ├── InteractiveZone.jsx         # Topic-specific interactive demos
│       ├── VisualDiagram.jsx           # 18+ mockup renderers for visual topics
│       ├── BreakdownSection.jsx        # Line-by-line code analysis cards
│       │
│       ├── ThemeToggle.jsx             # Light / Dark / System cycle
│       └── LanguageToggle.jsx          # EN / AR toggle
```

---

## Quick Start

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/web-design-lvl1.git
cd web-design-lvl1

# Install dependencies
npm install

# Start the development server (Vite HMR on port 5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

### Script Reference

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR at `localhost:5173` |
| `npm run build` | Bundle with Vite → `dist/` (hashed assets, tree-shaken CSS) |
| `npm run preview` | Serve the `dist/` build locally |

---

## Developer Guide: Scaling the Curriculum Schema

The curriculum is entirely **data-driven**. To add a new topic, you only touch one file. No component changes are needed.

### Adding an HTML Topic

Edit **`src/data/topics.js`** and append a new entry to the `topics` array using the `H()` factory:

```js
H({
  id: 'html-my-new-topic',
  category: 'html',
  chapter: 3,                              // Must match a chapter index in `chapters` array
  order: 5,                                // Position within the chapter (1-based)
  title: 'My New Topic',                    // Display name in sidebar + breadcrumbs
  explanation: {
    en: 'This topic covers the `<my-element>` tag and its semantic usage in HTML5.',
    ar: 'يشرح هذا الموضوع وسم `<my-element>` واستخدامه الدلالي في HTML5.'
  },
  mockupType: null,                         // null, or one of 18+ mockup keys (see VisualDiagram.jsx)
  mockup: null,                             // Data object consumed by the mockup renderer
  codeSample: `<my-element attr="value">Content</my-element>`,
  codeBreakdown: [
    {
      code: '<my-element attr="value">',
      explanationEn: 'Opening tag with an attribute.',
      explanationAr: 'وسم البداية مع خاصية.'
    },
    {
      code: 'Content',
      explanationEn: 'Text content of the element.',
      explanationAr: 'محتوى نصي للعنصر.'
    },
    {
      code: '</my-element>',
      explanationEn: 'Closing tag.',
      explanationAr: 'وسم الإغلاق.'
    }
  ],
  boilerplateCode: DEFAULT_BOILERPLATE      // Use the standard HTML5 template
})
```

### Adding a CSS Topic

Edit **`src/data/cssTopics.js`** and use the `C()` factory:

```js
C({
  id: 'css-my-new-topic',
  category: 'css',
  chapter: 2,
  order: 4,
  title: 'My New CSS Topic',
  explanation: {
    en: 'Explanation in English.',
    ar: 'الشرح باللغة العربية.'
  },
  mockupType: null,
  mockup: null,
  codeSample: `.selector { property: value; }`,
  codeBreakdown: [
    {
      code: '.selector { property: value; }',
      explanationEn: 'CSS rule with selector and declaration.',
      explanationAr: 'قاعدة CSS مع المحدد والإعلان.'
    }
  ],
  boilerplateCode: DEFAULT_CSS_BOILERPLATE
})
```

### Mandatory Topic Schema

| Key | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | Unique kebab-case identifier; CSS topics must use `css-` prefix for auto-track detection |
| `category` | `'html' \| 'css'` | Yes | Determines sidebar grouping |
| `chapter` | `number` | Yes | 1-based — must exist in the `chapters` / `cssChapters` array |
| `order` | `number` | Yes | 1-based sort order within chapter |
| `title` | `string` | Yes | Display name |
| `explanation` | `{ en: string, ar: string }` | Yes | Bilingual concept text; supports `\n\n` for paragraphs and `- ` / `1. ` for lists |
| `mockupType` | `string \| null` | Yes | Visual diagram variant — see `VisualDiagram.jsx` for valid types |
| `mockup` | `object \| null` | Yes | Data payload for the mockup renderer |
| `codeSample` | `string` | Yes | Example code shown in the CodeBlock |
| `codeBreakdown` | `array` | Yes | Line-by-line analysis — each item must have `code`, `explanationEn`, `explanationAr` |
| `boilerplateCode` | `string` | Yes | Full HTML document served to the sandbox iframe |

### Adding a Lecture (Instructor Track)

Edit **`src/data/instructor.js`**:

```js
{
  lectureId: 9,
  week: 5,
  session: 17,
  phase: 'html',              // html | css | capstone | review
  title: { en: 'Advanced Semantics', ar: 'الدلالات المتقدمة' },
  inClassTopics: [
    { en: 'Semantic HTML5 elements', ar: 'عناصر HTML5 الدلالية' }
  ],
  selfLearningTopics: [
    { en: 'ARIA roles deep dive', ar: 'غوص في أدوار ARIA' }
  ],
  assignedTask: {
    title: { en: 'Build a semantic page', ar: 'بناء صفحة دلالية' },
    objectives: [
      { en: 'Use 5 semantic tags', ar: 'استخدم 5 وسوم دلالية' }
    ],
    requirements: [
      { en: 'Valid HTML5', ar: 'HTML5 صالح' }
    ],
    deliverables: [
      { en: 'index.html file', ar: 'ملف index.html' }
    ]
  },
  taskSolutionCode: '<!-- solution code -->'
}
```

---

## Code Quality & Contribution Standards

### Branch Strategy

```
main        ─── Production-ready (deployed to Vercel)
feature/*   ─── New topics, components, or pages
bugfix/*    ─── Defect resolution
chore/*     ─── Dependencies, tooling, config
```

### Commit Convention

Use **conventional commits** (`scope` is optional):

```
feat(topic): add HTML Forms chapter
fix(sandbox): correct iframe height on first render
refactor(sidebar): extract ChapterSection sub-component
chore(deps): upgrade react-router-dom to 7.18
docs(readme): update deployment section
```

### Code-Splitting Rules

1. **Pages are code-split at the route level** — `LandingPage`, `DocumentationHub`, and `InstructorPage` are naturally isolated by route.
2. **Data files are static** — `topics.js`, `cssTopics.js`, `instructor.js` are tree-shaken by Vite; only the active track's data is referenced at runtime.
3. **No lazy imports needed yet** — current bundle is < 200 KB gzipped. Add `React.lazy()` when topic count exceeds 150.

### Tailwind Atomicity & Performance

- **Never write custom CSS** for layout — use Tailwind utility classes exclusively.
- **The `@apply` directive is banned** in this codebase — it defeats Tailwind's purging and produces non-standard CSS.
- **Design tokens** (brand, cta, surface) are defined in `tailwind.config.js` — reference as `bg-brand-500`, `text-cta-600`, etc.
- **Color scheme** replaces `dark:` variants with the project's custom surface/color tokens.

### Static Data Constraints

- Topic IDs are **immutable** once published — they may be referenced from bookmarks or deep links.
- `explanation` strings must always be a **paired object** (`{ en, ar }`); single-language entries crash the `t()` helper.
- `boilerplateCode` must be a **valid, self-contained HTML document** — the sandbox iframe receives it verbatim.

---

## Deployment

The project is configured for **Vercel** with zero-config deployment:

```
vercel.json
└── rewrites: [ { source: "/(.*)", destination: "/index.html" } ]
```

This catch-all rewrite ensures that client-side routes (`/docs`, `/instructor`) resolve correctly on direct navigation or page refresh.

### Deploy Steps

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Deploy from project root
vercel --prod
```

Alternatively, connect the Git repository to Vercel's dashboard for automatic CI/CD on `main` branch pushes.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | React 18.3 |
| Bundler | Vite 6 |
| Routing | React Router DOM 7.18 |
| Styling | Tailwind CSS 3.4 |
| State | React Context (3 providers) |
| Icons | Lucide React |
| Design Tokens | Custom brand/cta/surface palette |
| Fonts | Inter, Noto Sans Arabic, JetBrains Mono |
| Linting | Standard ESLint + Prettier (via Vite defaults) |
| Deployment | Vercel (SPA rewrites) |

---

## License

MIT — see `LICENSE` for details.
