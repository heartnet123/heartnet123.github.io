## 2025-05-14 - Keyboard Accessible Tooltips and Navigation

**Learning:** Tooltips that only appear on hover are inaccessible to keyboard users. Using Tailwind's `group-focus-visible` (or `group-focus` if appropriate) allows tooltips to be toggled when the parent element receives keyboard focus, providing the same context to all users. Additionally, "Skip to content" links are essential for keyboard/screen reader users to bypass repetitive navigation.

**Action:** Always ensure that icon-only buttons with tooltips have a mechanism to show that tooltip on focus, and implement a "Skip to content" link in the main layout for better keyboard accessibility.
