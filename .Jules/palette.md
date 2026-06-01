## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-15 - [Decoupling Page Logic from IDs for Global Landmarks]
**Learning:** Implementing global accessibility features like "Skip to Content" requires a consistent landmark ID (e.g., `#main-content`) across all pages. If existing animations or scripts are scoped to unique page-level IDs, they will break when the ID is standardized. Using `data-page` attributes for page-specific logic allows for both standardized landmarks and distinct animation scoping.
**Action:** Use data attributes rather than IDs for page-specific script/style scoping to maintain compatibility with global accessibility landmarks.
