## 2025-05-14 - Skip Link and Landmark Consistency
**Learning:** In Astro projects with a shared Layout, centralizing the `<main>` tag in the Layout ensures consistent accessibility landmarks across all pages. A hidden-until-focused skip link must be the first element in the Layout to be effective.
**Action:** Always place `<main>` in the base Layout and verify that individual pages do not include their own `<main>` tags to avoid nested or multiple landmark errors.

## 2025-05-14 - Keyboard Accessible Tooltips
**Learning:** Tooltips on icon-only buttons often rely on hover, which excludes keyboard users. Using Tailwind CSS `group-focus-visible` on the tooltip allows it to be displayed when the parent button or link receives focus.
**Action:** Pair `group-hover` with `group-focus-visible` for tooltips and ensure interactive elements have clear `focus-visible` rings.
