## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2026-05-04 - [Landmark Consistency and Keyboard Shortcut Links]
**Learning:** Multiple `<main>` landmarks confuse screen reader users who expect a single primary content area. Additionally, complex layouts with fixed sidebars can benefit from a "Skip to content" link to bypass repetitive navigation. Providing `tabindex="-1"` on the destination allows for reliable programmatic focus without visual side effects.
**Action:** Consolidate `<main>` landmarks into a single global layout wrapper and always include a skip-link as the first interactive element on the page. Use `aria-expanded` and `aria-controls` to communicate the state of mobile navigation toggles.
