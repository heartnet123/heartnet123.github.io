## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2026-06-02 - Accessible Navigation Drawer Interaction
**Learning:** In a design system with CSS-based sidebar transitions (like 'forest' theme with transforms), simply toggling 'aria-hidden' is insufficient for accessibility if the drawer remains focusable via keyboard while hidden. Using the 'invisible' class (visibility: hidden) synchronized with the transition duration ensures that hidden navigation elements are removed from the tab order without breaking the layout or animation.
**Action:** Use a 300ms delay (or match CSS transition-duration) when closing drawers to apply 'invisible', and remove it immediately when opening.
