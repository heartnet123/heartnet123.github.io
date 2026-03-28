## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Keyboard Focus Visibility and Accessible Tooltips]
**Learning:** High-visibility focus indicators (e.g., `focus-visible:ring-2`) are essential for keyboard-only users, especially on dark backgrounds where default browser rings might be hard to see. Furthermore, icon-only tooltips must be triggered by keyboard focus (`group-focus-visible`), not just mouse hover, to ensure parity of information across all input methods.
**Action:** Implement `focus-visible` ring offsets and ensure all interactive elements with tooltips reveal their labels on focus. Use `aria-label` for screen reader parity and `aria-hidden="true"` on visual tooltip elements to avoid duplicate announcements.
