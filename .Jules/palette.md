## 2025-05-23 - Enhancing Sidebar Accessibility
**Learning:** Icon-only navigation links in a sidebar require explicit `aria-label` attributes for screen readers. Furthermore, interactive elements that show tooltips on hover must also show them on focus to ensure keyboard users have the same context as mouse users. Using Tailwind's `group-focus-visible` on child elements allows for this parity.
**Action:** Always verify that every icon-only button or link has an `aria-label` and that any hover-triggered visual context (like tooltips) is also triggered by keyboard focus.
