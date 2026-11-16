---
name: MDX Linter
description: Lint MDX and React component files for the RedhatCSE guide. Use before declaring docs work complete.
metadata:
  opencode/autoinvoke: false
---

## Scope
- Allowed: docs/**.mdx, docs/**.md, src/components/**, src/theme/**, sidebars.js, docusaurus.config.js.
- Blocked: All other files.

## Conventions
- Every `.mdx` page must have frontmatter: `id`, `title`, `description`, `slug`.
- Frontmatter `slug` must match the file path relative to docs/ (without extension).
- React components in MDX must be imported from `@site/src/components/`.
- No external `<script>` tags in MDX.
- `sidebars.js` must contain an entry for every `.mdx` page in `docs/`.
- `docusaurus.config.js` must be checked before adding plugins/presets.

## Workflow
1. Run `npm run build` — must complete without errors.
2. Run `npm run lint:docs` — must complete without errors.
3. Start dev server `npm run start` and verify `/health` or `http://localhost:3000` is reachable.
4. Check that every page in `docs/` has a corresponding entry in `sidebars.js`.
5. Verify all React component imports resolve correctly.
6. Report any failures to the user before declaring done.
