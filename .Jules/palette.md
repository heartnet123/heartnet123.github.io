## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Astro Landmark Consolidation and Dynamic Sidebar ARIA]
**Learning:** In Astro projects, placing the `<main>` landmark in a global `Layout.astro` while also using it in individual page components leads to "Nested landmark" accessibility errors. A single, top-level `<main>` with a unique ID is required for reliable "Skip to Content" functionality. Additionally, mobile sidebars must dynamically manage `aria-expanded` and `aria-controls` via JavaScript to communicate state changes to assistive technologies.
**Action:** Consolidate landmarks into the base Layout and use JavaScript to sync ARIA states on interactive UI components like drawers and menus.
