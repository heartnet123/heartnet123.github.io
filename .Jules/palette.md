## 2025-03-16 - Accessible Tooltips for Sidebar Navigation
**Learning:** Tooltips that only appear on hover are inaccessible to keyboard-only users. In icon-only navigation sidebars, this means keyboard users cannot identify the destination of a link without activating it.
**Action:** Use Tailwind's `group-focus-visible` or `focus-within` patterns to ensure tooltips become visible when the parent link receives keyboard focus. Combine this with `aria-label` on the anchor tag for screen reader parity.

## 2025-03-16 - Focus Rings on Dark Backgrounds
**Learning:** Default browser focus rings or subtle borders can be nearly invisible on high-contrast dark backgrounds (e.g., `#050505`).
**Action:** Use a high-visibility theme color for focus rings (`ring-primary`) and apply an offset or distinct border style to ensure the interactive element is clearly demarcated from the background during keyboard navigation.
