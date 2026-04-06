## 2026-04-06 - [Keyboard-Accessible Tooltips for Icon-Only Navigation]
**Learning:** Icon-only navigation menus often fail keyboard accessibility by only showing labels on hover. Using Tailwind's `group-focus-visible` allows tooltips to appear when a link receives keyboard focus, providing essential context to screen reader and keyboard users alike. Combining this with `aria-label` on the anchor and `aria-hidden="true"` on the tooltip text prevents redundant announcements.
**Action:** Implement `group-focus-visible:opacity-100` on navigation tooltips and ensure high-visibility focus rings are present on all interactive elements in dark-themed sidebars.

## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.
