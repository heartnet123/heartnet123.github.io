## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Global Accessibility & Landmark Standardization]
**Learning:** Screen readers rely on a single `<main>` landmark per page to identify primary content. In Astro projects with global layouts, nesting `<main>` tags in individual pages causes landmark errors. A centralized `<main>` in `Layout.astro` combined with a "Skip to content" link significantly improves navigation efficiency for keyboard and assistive technology users.
**Action:** Move `<main>` to the base layout wrapping the `<slot />`, refactor page components to use `<div>` instead of `<main>`, and always include a focusable "Skip to content" link as the first child of `<body>`.
