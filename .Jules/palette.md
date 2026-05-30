## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Keyboard Accessible Tooltips and Consistent Focus States]
**Learning:** For icon-only navigation, tooltips must be accessible to keyboard users, not just mouse users. Using Tailwind's `group-focus-visible` on child elements allows tooltips to appear when the parent anchor receives focus via keyboard, bridging the accessibility gap. Consistent high-visibility focus indicators (e.g., `focus-visible:ring-2`) are essential for navigation clarity in dark-themed, minimalist interfaces.
**Action:** Implement tooltips using `group-focus-visible` and ensure all interactive icons have explicit ARIA labels and standardized focus rings.
