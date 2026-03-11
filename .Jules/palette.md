## 2025-05-15 - Improving Keyboard Accessibility in Sidebar and Navigation

**Learning:** Navigation sidebars often provide tooltips for collapsed states, but these are frequently only accessible via hover. In an accessibility-first design, keyboard users should also benefit from these hints when focusing on the navigation items. Additionally, a "Skip to Content" link is a fundamental accessibility requirement for sites with persistent sidebars to avoid keyboard fatigue.

**Action:** Always use `group-focus-visible:opacity-100` (or similar) alongside `group-hover:opacity-100` for tooltips. Ensure a skip link is the first tab-accessible element on the page, and properly manage HTML landmarks by having exactly one `<main>` element per page, ideally in the shared layout.
