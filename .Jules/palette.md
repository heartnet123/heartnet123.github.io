## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Preventing "Ghost Focus" in Accessible Drawers]
**Learning:** Off-canvas menus that use CSS transitions for visibility often leave interactive elements in the tab order even when hidden (opacity 0 / translate-x). Using `aria-hidden="true"` is not enough to stop keyboard focus. Toggling the `invisible` class (Tailwind for `visibility: hidden`) with a delay matching the transition ensures the menu is non-tabbable when closed while allowing for smooth exit animations.
**Action:** When implementing mobile drawers, synchronize `aria-hidden` and `visibility: hidden` (or `display: none`) with the transition timing to ensure a clean keyboard experience.
