## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-15 - [Landmark Management and Keyboard Tooltips]
**Learning:** Redundant `<main>` landmarks can accumulate when using page-level wrappers alongside a global Layout component, which confuses screen readers. Additionally, hover-only tooltips for icon navigation are inaccessible to keyboard users unless explicitly triggered by focus.
**Action:** Centralize the `<main id="main-content">` landmark in the global Layout and remove it from individual pages. Use Tailwind's `group-focus-visible` classes to ensure tooltips appear on keyboard focus.
