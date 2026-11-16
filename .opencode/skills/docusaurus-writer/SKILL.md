---
name: Docusaurus Guide Writer
description: Draft, edit, and lint Docusaurus + MDX pages for the RedhatCSE guide. Use when touching docs/, sidebars.js, or docusaurus.config.js.
metadata:
  opencode/autoinvoke: false
---

## Scope
- Allowed: docs/**.mdx, docs/**.md, sidebars.js, docusaurus.config.js, src/components/**, src/theme/**.
- Blocked: package.json (dependency changes require user approval), static/svg/** (draw.io exports).

## Conventions
- Required frontmatter on every page: `id`, `title`, `description`, `slug`.
- MDX admonitions: use `:::note` / `:::warning` / `:::tip` from Docusaurus.
- Internal links: relative to docs/ root, e.g. `[overview](./overview.mdx)`.
- Keep heading hierarchy strict (one H1 per page).
- Every RHCSA/RHCE module must include: Theory, Try It, Guided Lab, Challenge Trial, Quiz, Exam Tip.
- Use `.mdx` extension for any page containing React components (`<Quiz />`, `<TerminalLab />`, `<ChallengeChecklist />`, `<ExamTip />`).
- Use `.md` for simple informational pages without React components.

## Workflow
1. Read `docusaurus.config.js` and `sidebars.js` to confirm placement.
2. Draft/edit the `.mdx` page under `docs/`.
3. Add/update the entry in `sidebars.js`.
4. Run `npm run lint:docs` and `npm run build` to verify no MDX/React errors.
5. Verify local dev server (`http://localhost:3000`) is reachable.
6. Request user approval before committing.

## Component usage
- `<Quiz id="" question="" options={[]} correctAnswer={0} explanation="" />` — interactive scored quiz
- `<TerminalLab wsUrl="" label="" height="" />` — xterm.js live shell to ttyd backend
- `<ChallengeChecklist items={[]} title="" />` — verification checklist for challenge trials
- `<ExamTip tip="" title="" />` — proctor-focused exam tip callout
