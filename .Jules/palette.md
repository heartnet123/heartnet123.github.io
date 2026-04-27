## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Mobile Navigation Accessibility and Tab Order]
**Learning:** Interactive elements in hidden mobile navigation menus (like sidebars or drawers) can still receive keyboard focus if they are only moved off-screen with `transform`. This creates a confusing experience for keyboard users who find their focus "trapped" or disappearing. Toggling the `invisible` class (Tailwind for `visibility: hidden`) effectively removes these elements from the tab order while allowing CSS transitions to function smoothly.
**Action:** Always toggle visibility (e.g., `invisible` class) on mobile menus when they are in their closed state to ensure a clean keyboard navigation experience.
