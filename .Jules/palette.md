## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-15 - [Consolidated Landmark Structure and Skip Links]
**Learning:** Multiple `<main>` landmarks on a single page can cause confusion for screen reader users as they navigate the document structure. Centralizing the `<main>` landmark in a top-level layout and ensuring child pages use generic containers (like `<div>`) prevents this redundancy. A "Skip to content" link is essential for keyboard accessibility in sites with persistent side navigation to bypass repetitive links.
**Action:** Consolidate `<main>` in the root layout and use `tabindex="-1"` on the target container to ensure focus is correctly moved after a skip link is clicked.
