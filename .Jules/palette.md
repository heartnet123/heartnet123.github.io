## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-15 - [Accessible Mobile Navigation Drawers]
**Learning:** Mobile "drawers" that slide off-screen often remain in the keyboard tab order and screen reader view unless explicitly handled. Using `invisible` (Tailwind) or `display: none` combined with `aria-hidden="true"` when the menu is closed is essential to prevent "ghost focus" on hidden elements.
**Action:** Ensure mobile navigation containers toggle both visibility and aria-hidden states in sync with their open/closed animation.
