## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2026-05-14 - Accessible Navigation & Focus Indicators
**Learning:** Icon-only navigation links need explicit aria-labels, and hover-tooltips should be synchronized with keyboard focus using `group-focus-visible`. Decorative tooltips should be marked `aria-hidden="true"` when the parent has a label to avoid screen reader redundancy. High-contrast focus rings (`focus-visible:ring-2`) are essential for navigation clarity in dark themes.
**Action:** Apply `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50 outline-none` to interactive elements. Use `group-focus-visible:opacity-100` for tooltips and manage `aria-expanded` on all toggle triggers.
