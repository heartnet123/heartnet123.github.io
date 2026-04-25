## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Keyboard Accessibility for Off-Canvas Navigation]
**Learning:** Off-canvas elements (like mobile sidebars) that are visually hidden using only transforms or opacity remain in the document's tab order, creating a confusing experience for keyboard users who might "tab into" invisible links. Using the CSS `invisible` (or `visibility: hidden`) property effectively removes these elements from the tab sequence while they are closed.
**Action:** When implementing mobile-specific sidebars or menus, toggle the `invisible` class in sync with the `aria-expanded` state to ensure the tab order remains predictable.
