## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Centralized Semantic Landmarks and Skip Links]
**Learning:** Redundant `<main>` landmarks across multiple page files can confuse screen reader users who expect a single primary entry point. Centralizing the `<main>` tag in the base `Layout.astro` ensures architectural consistency and simplifies the implementation of "Skip to content" links, as the target ID is always present regardless of the specific route.
**Action:** Avoid placing `<main>` tags in individual page components; instead, manage the primary landmark in the global layout and provide a corresponding skip link for keyboard accessibility.
