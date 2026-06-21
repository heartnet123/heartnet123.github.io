## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-22 - [Centralized Accessibility Landmarks]
**Learning:** Implementing a "Skip to Content" link is most effective when the `<main>` landmark is centrally managed in the base layout. This avoids the risk of multiple `<main>` landmarks on a page (which confuses screen readers) and ensures a consistent focus target (`#main-content`) across the entire application without needing to redefine it in every page component.
**Action:** Move the `<main>` landmark to the global layout and refactor page components to provide content within standard containers, ensuring semantic HTML validity and reliable keyboard navigation targets.

## 2025-05-22 - [Keyboard-Accessible Tooltips]
**Learning:** Many "modern" tooltips are implemented solely via CSS `hover` or JS `mouseenter`, which makes them invisible to keyboard users. Using Tailwind's `group-focus-visible` pattern allows tooltips to appear when an interactive element receives keyboard focus, bridging the gap for sighted keyboard users while keeping the UI clean.
**Action:** Reinforce icon-only buttons with a three-tier accessibility strategy: `aria-label` for screen readers, `focus-visible` rings for orientation, and `group-focus-visible` tooltips for visual context.
