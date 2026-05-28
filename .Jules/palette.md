## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-15 - [Landmark Consolidation and Skip Link Pattern]
**Learning:** In Astro projects, placing the `<main>` landmark in a shared Layout component rather than individual pages ensures a single, consistent main landmark across the site. Combining this with a `tabindex="-1"` on the `<main>` element allows "Skip to content" links to move focus programmatically without showing a focus ring on the entire container, facilitating efficient keyboard navigation.
**Action:** Centralize `<main id="main-content">` in the base layout and use `focus-visible` utility classes for all interactive elements to ensure clear demarcation for keyboard users.
