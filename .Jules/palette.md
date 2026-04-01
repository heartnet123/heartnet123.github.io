## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-20 - [Skip to Content and Main Landmark Structure]
**Learning:** For accessibility, a "Skip to content" link should be the first element in the <body> and target a unique <main> landmark. Centralizing the <main> tag in a global layout simplifies accessibility and prevents nested landmark errors on individual pages. The <main> target should have `tabindex="-1"` for reliable focus management, and global components like <footer> should remain outside the <main> landmark to preserve semantic correctness.
**Action:** Implement a hidden-until-focused skip link targeting a centralized `<main id="main-content" tabindex="-1">` in the layout, and ensure individual page components do not include redundant `<main>` tags.
