## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-15 - [A11y Foundations in Astro Layouts]
**Learning:** In Astro v5 applications using centralized layouts, accessibility basics like the "Skip to content" link and the `<main>` landmark are most effectively managed at the layout level. However, individual pages must be audited for redundant `<main>` tags to avoid "nested main" accessibility errors, which confuse screen reader users by presenting multiple entry points to the primary content.
**Action:** Centralize the `<main id="main-content">` landmark in the layout, ensure it has `tabindex="-1"` for programmatic focus, and proactively remove `<main>` tags from individual page components.
