## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-14 - Accessibility & Landmark Consolidation in Astro
**Learning:** Centralizing the `<main>` landmark in a base layout (e.g., `Layout.astro`) prevents redundant landmark errors across the site. Using `tabindex="-1"` on the main content container allows programmatic focus after using a "Skip to Content" link without disrupting the visual flow.
**Action:** Always verify that individual page components do not wrap their content in `<main>` if the parent layout already provides it. Use a standard `<div>` or `<section>` instead.

## 2025-05-14 - Skip-to-Content Implementation
**Learning:** A skip link is most effective when it is the first focusable element in the DOM. Using Tailwind's `sr-only focus:not-sr-only` classes provides an elegant way to hide the link visually until it receives keyboard focus, ensuring a clean UI for mouse users while providing essential utility for keyboard users.
**Action:** Standardize the skip link style and target (`#main-content`) across all projects using the same layout pattern.

## 2025-05-14 - Build Reliability with Sharp
**Learning:** The `sharp` image processing library can frequently fail in restricted CI/CD or sandbox environments. Switching to the `noop` image service in `astro.config.mjs` allows builds to complete successfully when advanced image optimization is not strictly required.
**Action:** If `pnpm build` fails due to `sharp` or `astro:assets` issues, check `astro.config.mjs` and consider a temporary fallback to `noop`.
