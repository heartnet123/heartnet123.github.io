## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-15 - [Keyboard Accessibility for Sidebars]
**Learning:** Tooltips on icon-only sidebars must be accessible via keyboard focus to maintain a high-quality UX. Combining `group-focus-visible:opacity-100` with `aria-hidden="true"` (when a parent `aria-label` exists) provides a clear, non-redundant indicator for keyboard users. High-visibility focus rings (`focus-visible:ring-2`) are essential for orientation on dark backgrounds.
**Action:** Always include keyboard-triggered states for tooltips and use high-contrast focus indicators in global navigation components.
