## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Semantic Landmarks and Navigation Visibility]
**Learning:** Redundant `<main>` landmarks occur when child pages and parent layouts both define the tag, confusing screen readers. Additionally, sidebars that are visually hidden but still in the DOM must be explicitly removed from the tab order using classes like `invisible` (Tailwind) or `aria-hidden` to ensure a consistent keyboard experience.
**Action:** Centralize the `<main>` landmark in the root layout and use utility classes to sync DOM visibility with visual state for navigation drawers.
