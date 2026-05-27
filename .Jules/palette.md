## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Keyboard Accessible Icon Tooltips]
**Learning:** In icon-only navigation, tooltips are often implemented as hover-only elements, leaving keyboard-only users without textual context. Using Tailwind's `group-focus-visible` utility allows tooltips to appear simultaneously with the element's focus ring, providing an equivalent experience for sighted keyboard users. Redundant tooltip text should be hidden from screen readers using `aria-hidden="true"` if the parent anchor already has a descriptive `aria-label`.
**Action:** Implement icon tooltips that trigger on both `group-hover` and `group-focus-visible`, ensuring `aria-label` is present on the anchor and `aria-hidden="true"` on the tooltip span.
