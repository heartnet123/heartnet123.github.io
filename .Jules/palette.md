## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-20 - [Global Layout Landmarks and Skip Links]
**Learning:** In Astro applications with client-side transitions, moving the `<main>` landmark to the global layout ensures consistent skip-to-content behavior and prevents landmark duplication or nesting errors across individual pages. A skip-to-content link must be the very first focusable element to provide meaningful utility for keyboard users.
**Action:** Centralize the `<main>` landmark in the root layout and use a target-id pattern (e.g., `<main id="main-content">`) to support global skip links.
