## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Keyboard-Accessible Tooltips and Consistent Navigation Labels]
**Learning:** Tooltips that only appear on `:hover` are inaccessible to keyboard users. Using `group-focus-visible:opacity-100` (or equivalent) ensures parity. Furthermore, terminology must remain consistent across viewports; a "Work" tooltip on desktop should match a "Work" label on mobile to avoid cognitive load.
**Action:** Always pair hover-based tooltips with focus-visible states and audit mobile navigation menus for terminology alignment with desktop counterparts.
