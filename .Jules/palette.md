## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-15 - [Semantic Landmark Consistency in Astro Layouts]
**Learning:** In Astro projects using global layouts, individual page components should not contain their own `<main>` tags if the layout already provides one. This avoids nested landmarks which can confuse screen reader users. Centralizing the `<main id="main-content">` in the layout and providing a "Skip to content" link ensures a consistent and accessible structure across all routes.
**Action:** Ensure only one `<main>` landmark exists in the layout and refactor page-level components to use generic containers like `<div>`.
