## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-15 - [Keyboard-Accessible Tooltips and Consistent Focus Indicators]
**Learning:** Icon-only navigation links are unusable for screen reader and keyboard users if they lack labels and tooltips that trigger on focus. In dark-themed applications, default focus indicators can be invisible; high-visibility rings with offsets are necessary for clear demarcation. Inconsistent labeling between mobile and desktop navigation (e.g., "Experience" vs "Work") causes cognitive friction.
**Action:** Ensure icon-only buttons have `aria-label` and tooltips that trigger on `group-focus-visible`. Always provide `focus-visible:ring-2` for interactive elements and synchronize navigation labels across all viewports.
