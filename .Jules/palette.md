## 2025-05-14 - Keyboard-Accessible Tooltips with group-focus-visible
**Learning:** Tooltips that only appear on hover are inaccessible to keyboard users. Using Tailwind's `group-focus-visible` on a child element, combined with `group` on the parent interactive element (like a link or button), allows tooltips to be toggled via the Tab key.
**Action:** Always use `group-focus-visible:opacity-100` (or similar) on tooltip containers when the parent is an icon-only interactive element.

## 2025-05-14 - Landmark Validation and Skip Links
**Learning:** Multiple `<main>` landmarks or nested `<main>` tags (e.g., in both a layout and a page) violate HTML accessibility standards and confuse screen readers. Centralizing the `<main>` tag in the `Layout.astro` and using a "Skip to Content" link as the first focusable element significantly improves navigation for assistive technology.
**Action:** Ensure only one `<main>` landmark exists per page and implement a standard skip-to-content link in the root layout.
