# Project rules — RedhatCSE Docusaurus study guide

## Build & dev
- Install: `npm install` (Node per `engines` in package.json).
- Dev server: `npm run start` (runs at http://localhost:3000).
- Static build: `npm run build`.
- Deploy: `npm run deploy` (GitHub Pages).
- Lint docs: `npm run lint:docs` after every docs change.
- Do not commit without a successful `npm run build`.

## Content conventions
- All pages live in `docs/` as `.mdx` (or `.md` for simple pages).
- Required frontmatter on every page: `id`, `title`, `description`, `slug`.
- Navigation source of truth: `sidebars.js` — update it whenever you add/remove a page.
- Prefer Docusaurus admonitions (`:::note`, `:::warning`, `:::tip`) over raw HTML callouts.
- Internal links relative to `docs/` root, e.g. `[overview](./overview.mdx)`.
- Use `.mdx` extension for any page containing React components (`<Quiz />`, `<TerminalLab />`, etc.).

## Per-module layout (every RHCSA/RHCE module)
1. Theory — concept + why it's on the exam
2. Try It — copy-paste commands + expected output
3. Guided Lab — numbered steps with verification commands after each step
4. Challenge Trial — scenario without steps + `<ChallengeChecklist />`
5. Quiz — `<Quiz />` React component with scoring
6. Exam Tip — `<ExamTip />` callout with proctor-focused advice

## React / MDX
- UI components live in `src/components/`.
- Do not bundle external `<script>` tags inside MDX.
- Do not edit `src/theme/` unless the user explicitly approves a theme change.
- xterm.js terminal component connects to ttyd backend on WSL2/Linux VM.

## Diagrams & media
- draw.io desktop (.drawio source files) → export SVG → `static/svg/`
- asciinema terminal recordings (.cast) → `static/cast/`
- Mermaid diagrams can be embedded inline in MDX

## Agent constraints
- Run `npm run lint:docs` and `npm run build` after any docs change before declaring done.
- Verify the local dev server (`http://localhost:3000`) is reachable before declaring a page complete.
- Check `docusaurus.config.js` before adding a new docs plugin or preset.
- ttyd backend for live shell must run on WSL2/Linux — cannot run natively on Windows.

## OpenCode skills
- `.opencode/skills/docusaurus-writer/` — writing and editing MDX pages
- `.opencode/skills/mdx-linter/` — linting MDX and React components
