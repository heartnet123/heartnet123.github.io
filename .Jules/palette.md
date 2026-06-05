## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Centralized Semantic Landmarks and Sidebar Accessibility]
**Learning:** Redundant `<main>` landmarks across multiple pages can confuse screen reader users. Centralizing the `<main id="main-content">` landmark in a global `Layout.astro` and ensuring individual pages use generic containers (like `<div>`) prevents landmark nesting errors. Additionally, mobile sidebars require synchronized `aria-expanded` and `aria-hidden` states, along with an `invisible` class or `display: none` when closed to prevent "ghost focus" on hidden interactive elements.
**Action:** Manage the primary `<main>` landmark in the base layout and implement a robust synchronization script for all mobile navigation drawers that manages both ARIA attributes and focusability.
