## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-20 - [Semantic Landmark Management in Astro]
**Learning:** Astro components often include their own `<main>` or `<section>` tags. When these are nested within a global `Layout.astro` that also has a `<main>` landmark, it creates invalid semantic HTML and confusing landmark structures for screen readers.
**Action:** Centralize the `<main id="main-content">` landmark in `Layout.astro`. Ensure individual page components use non-landmark wrappers (like `<div>`) or fragments to maintain a single primary landmark per page.

## 2025-05-20 - [Accessible Icon-Only Navigation Tooltips]
**Learning:** Tooltips for icon-only buttons are often hover-only, excluding keyboard users. By using Tailwind's `group-focus-visible` pattern, tooltips can be revealed on tab focus. When the parent anchor has a descriptive `aria-label`, the tooltip itself should be `aria-hidden="true"` to prevent redundant screen reader announcements while providing essential visual context for sighted keyboard users.
**Action:** Implement tooltips using `group-focus-visible:opacity-100` and ensure interactive elements have high-visibility focus rings (`focus-visible:ring-2`) to support keyboard navigation.
