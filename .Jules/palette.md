## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Keyboard Accessibility and ARIA Synchronization in Nav Drawers]
**Learning:** Icon-only navigation requires a three-tier reinforcement for accessibility: 1) explicit `aria-label`, 2) high-contrast `focus-visible` indicators, and 3) `group-focus-visible` tooltips for sighted keyboard users. For mobile drawers, `aria-expanded` must be synchronized across all triggering elements (open and close buttons) to maintain a consistent state for screen readers.
**Action:** Use `focus-visible:ring-2` for custom focus states and ensure any client-side state toggles update all relevant ARIA attributes immediately.
