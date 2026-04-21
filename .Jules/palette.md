## 2025-05-15 - [Active Navigation State and Cross-Page Anchor Links]
**Learning:** In single-page-centric designs (like portfolios), hash links (e.g., `#contact`) often break when the user navigates to a sub-page (e.g., `/about`). Explicitly prefixing with `/` (e.g., `/#contact`) ensures the link works from any location. Additionally, visual "you are here" indicators (active states) are critical for orientation in navigation systems that use icons only.
**Action:** Always use root-relative paths for hash links in global navigation components and implement `aria-current="page"` alongside visual active states.

## 2025-05-16 - [Accessible Icon-Only Navigation with Keyboard-Triggered Tooltips]
**Learning:** Icon-only navigation menus must provide accessible labels (aria-label) and visual hints (tooltips) that are triggered not just by hover, but also by keyboard focus. Using Tailwind's `group-focus-visible` on absolute-positioned tooltips ensures they appear during tabbing, maintaining parity between mouse and keyboard experiences. Additionally, high-visibility focus rings (`focus-visible:ring-2`) are essential for navigation clarity in dark-themed UIs.
**Action:** Always wrap icon-only buttons in a `group` and use `group-focus-visible` to toggle tooltip visibility. Ensure all navigation icons have explicit `aria-label` attributes and consistent focus ring styling.
