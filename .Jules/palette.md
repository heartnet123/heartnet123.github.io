## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-15 - [Skip-to-Content and Main Landmark Best Practices]
**Learning:** For a truly accessible navigation experience, a "Skip to Content" link must be the first focusable element in the DOM. Centrally managing the `<main>` landmark in the primary layout ensures a single, valid landmark across all pages and allows for consistent flex-based footer positioning. Using `tabindex="-1"` and `outline-none` on the `#main-content` target ensures it can receive programmatic focus without an unsightly focus ring on the entire content block.
**Action:** Always implement a "Skip to Content" link as the first child of `<body>` and centrally manage the `<main id="main-content">` landmark in the root `Layout` component.
