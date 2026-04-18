## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-15 - [Keyboard Accessibility for Off-Canvas Menus and Icon-Only Buttons]
**Learning:** Off-canvas menus (like mobile sidebars) that are hidden only via CSS transforms remain in the keyboard tab order and screen reader accessibility tree. Using `visibility: hidden` (Tailwind `invisible`) when the menu is closed is a lightweight way to properly hide these elements. Additionally, icon-only buttons require tooltips that are keyboard-accessible (using `group-focus-visible`) and `aria-hidden` to avoid redundant announcements when an `aria-label` is already present.
**Action:** Always toggle `visibility` on off-canvas elements and ensure icon-only tooltips respond to keyboard focus.
