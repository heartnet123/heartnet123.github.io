## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-22 - [Centralized Landmarks and Accessible Mobile Navigation States]
**Learning:** Nested `<main>` landmarks are a common accessibility violation when using layout-slot patterns. Centralizing the landmark in the base layout while refactoring page-level components prevents screen reader confusion. Additionally, mobile navigation drawers require synced `aria-expanded` and `aria-hidden` attributes across multiple trigger buttons and the container to accurately reflect visibility state.
**Action:** Define the primary `<main>` landmark exclusively in the top-level layout. Use a single JavaScript controller to sync ARIA states across all mobile navigation triggers (e.g., open and close buttons) and the navigation container itself.
