## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2026-04-27 - [Keyboard-Accessible Navigation Tooltips and ARIA State Sync]
**Learning:** For icon-only navigation bars, tooltips must be visible on keyboard focus, not just hover. Using Tailwind's `group-focus-visible` on the tooltip container provides a clean CSS-only solution. Additionally, ensuring ARIA state (like `aria-expanded` on mobile toggles) is synchronized via JavaScript is crucial for screen reader accuracy in dynamic drawers.
**Action:** Always implement `group-focus-visible` for tooltips in icon-based UIs and ensure mobile navigation buttons have synced `aria-expanded` and `aria-controls` attributes.
