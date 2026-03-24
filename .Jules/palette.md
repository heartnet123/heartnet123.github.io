## 2025-05-15 - Improving Navigation Consistency
**Learning:** Active state indicators in navigation bars are often lost when transitioning to anchor-linked sections on the same page vs. cross-page navigation.
**Action:** Use unified intersection observers for all nav links regardless of target type to ensure visual consistency in the sidebar.

## 2025-05-20 - Enhancing Sidebar Accessibility with Keyboard Support
**Learning:** Icon-only navigation often relies heavily on hover tooltips, which are completely inaccessible to keyboard-only users. High-visibility focus rings paired with tooltips that respond to keyboard focus (`focus-visible`) ensure a parity of experience for sighted keyboard users.
**Action:** Implement `group-focus-visible` for tooltips and provide clear focus rings with adequate offsets to maintain visual separation on dark backgrounds.
