## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2026-04-26 - [Consolidating Semantic Landmarks and Accessible Drawers]
**Learning:** In Astro or similar component frameworks, nesting `<main>` tags often happens when both Layouts and Pages try to define landmarks. Consolidating the `<main>` tag into a single Layout ensures HTML validity and a reliable target for "Skip to content" links. Additionally, mobile navigation drawers must have their state (aria-expanded) and relationship (aria-controls) explicitly managed in sync with their visual visibility to remain accessible to screen readers.
**Action:** Centralize the `<main>` landmark in the root Layout and use JavaScript to dynamically update ARIA attributes when toggling interactive UI elements like sidebars.
