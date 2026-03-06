---
title: "Building Accessible Web Apps"
date: "2024-01-05"
description: "Best practices for making your web applications accessible to everyone — from keyboard navigation to screen reader support and color contrast."
tags: ["Accessibility", "Web Design"]
---

Accessibility is one of those topics that developers know they should care about but often deprioritize in favor of features. I've been guilty of this too. After spending time building accessible interfaces professionally, I've come to see accessibility not as an extra cost, but as a measure of craft. An inaccessible website is a broken website.

Here's what I've learned.

## The Business Case (Since That's Often What Moves the Needle)

Before diving into technique, let's acknowledge the pragmatic argument: accessibility directly impacts your user base.

- **15% of the global population** lives with some form of disability (WHO)
- Screen reader users alone represent millions of users across the web
- Accessible design often improves usability for *everyone* — captions help in noisy environments, keyboard navigation helps power users, clear color contrast helps users in bright sunlight
- WCAG compliance is increasingly a legal requirement in the US, EU, and UK

Beyond compliance, accessibility is SEO. Semantic HTML and proper heading structure are exactly what search engines use to understand your content.

## The Foundation: Semantic HTML

The single highest-leverage accessibility improvement is using semantic HTML correctly. Most accessibility problems stem from replacing semantic elements with generic `<div>` tags.

```html
<!-- Wrong: inaccessible -->
<div class="button" onclick="submit()">Submit</div>
<div class="navigation">
  <div class="nav-item">Home</div>
</div>

<!-- Right: semantic -->
<button type="submit">Submit</button>
<nav aria-label="Main navigation">
  <a href="/">Home</a>
</nav>
```

Why does this matter? Screen readers and keyboard users rely on the browser's built-in understanding of element semantics. A `<button>` is automatically focusable, activatable with Enter/Space, and announced as "button" to screen readers. A `<div onclick>` is none of these things without extensive ARIA work.

Use the right element for the right job:

| Purpose | Use |
|---------|-----|
| Navigation links | `<a href>` |
| Form submissions | `<button type="submit">` |
| Toggles/actions | `<button>` |
| Page sections | `<main>`, `<nav>`, `<header>`, `<footer>`, `<aside>` |
| Headings | `<h1>` through `<h6>` in logical order |
| Form labels | `<label for="...">` |

## Keyboard Navigation

Every interactive element must be reachable and usable with a keyboard alone. This means:

```css
/* Never do this — it kills keyboard users */
:focus {
  outline: none;
}

/* Do this instead — enhance, don't remove */
:focus-visible {
  outline: 2px solid oklch(68% 0.185 149);
  outline-offset: 2px;
  border-radius: 4px;
}
```

Use `:focus-visible` instead of `:focus` — it shows the focus ring for keyboard users but not for mouse clicks, giving you the best of both worlds.

For custom interactive components (dropdowns, modals, tabs), implement the appropriate keyboard interaction pattern from the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/):

```javascript
// Example: Escape key closes modal
function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {children}
    </div>
  );
}
```

## Color and Contrast

WCAG 2.1 AA requires:
- **4.5:1** contrast ratio for normal text
- **3:1** for large text (18pt+ or 14pt+ bold)
- **3:1** for UI components and graphical objects

Don't rely on color alone to convey information. For example, a form validation error should have:
1. A red border (color cue)
2. An error icon (visual cue)
3. Descriptive error text (text cue)
4. `aria-invalid="true"` and `aria-describedby` pointing to the error message (screen reader cue)

```html
<div class="form-field">
  <label for="email">Email</label>
  <input
    id="email"
    type="email"
    aria-invalid="true"
    aria-describedby="email-error"
    class="border-red-500"
  />
  <p id="email-error" role="alert" class="text-red-500">
    <!-- Icon + text, not just color -->
    ⚠ Please enter a valid email address
  </p>
</div>
```

## Images and Media

Every `<img>` needs an `alt` attribute. The content of `alt` depends on context:

```html
<!-- Informative image: describe the content -->
<img src="chart.png" alt="Bar chart showing 40% increase in revenue Q4 2024" />

<!-- Decorative image: empty alt tells screen readers to skip it -->
<img src="divider.svg" alt="" />

<!-- Linked image: describe the destination, not the image -->
<a href="/about">
  <img src="avatar.jpg" alt="About page" />
</a>
```

For videos, provide captions and transcripts. The `<video>` element supports `<track>` for WebVTT captions:

```html
<video controls>
  <source src="demo.mp4" type="video/mp4" />
  <track kind="captions" src="demo.vtt" srclang="en" label="English" default />
</video>
```

## Testing Your Work

The most important thing: test with actual assistive technology. Tools like:

- **axe DevTools** (browser extension) — catches ~57% of WCAG issues automatically
- **NVDA** (Windows) or **VoiceOver** (macOS/iOS) — screen reader testing
- **Keyboard-only navigation** — tab through every interactive element

The golden rule: if it's broken for a keyboard user, it's broken. Full stop.

## Conclusion

Accessibility is a spectrum, not a binary. Don't let perfect be the enemy of good. Start with semantic HTML, ensure keyboard navigability, check your color contrast, and label everything. Those four practices alone eliminate the vast majority of accessibility failures. From there, you can refine with ARIA patterns and screen reader testing.

Build for everyone, and you'll build better software.
