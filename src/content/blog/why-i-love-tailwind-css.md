---
title: "Why I Love Tailwind CSS"
date: "2025-11-02"
description: "A deep dive into why utility-first CSS is the future of styling, and how Tailwind changed the way I think about design."
tags: ["CSS", "Tailwind"]
---

I'll be honest: when I first saw Tailwind CSS, my reaction was visceral disgust. `class="flex items-center justify-between px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"` — it looked like the worst of inline styles but worse. What happened to separation of concerns?

Three months later, I can barely write CSS without it.

## The Problem with Traditional CSS

The conventional approach — write semantic class names, style them in a separate CSS file — sounds clean in theory. In practice, it leads to:

- **Specificity wars**: Cascading conflicts that get resolved by adding more specific selectors or, God forbid, `!important`
- **Dead code**: CSS files that balloon with styles you're afraid to delete because you don't know what they're targeting
- **Naming paralysis**: Is it `.card-header`, `.CardHeader`, `.card__header`, or `.card-title`? BEM helps but adds verbosity
- **Context switching**: Constantly jumping between HTML and CSS files to make a simple spacing change

Tailwind sidesteps all of this by making CSS classes the single source of truth for your styles.

## Utility-First Isn't Inline Styles

The critical distinction: utility classes are **design system constraints**, not arbitrary values.

Inline styles let you write `style="margin-top: 13px"`. Tailwind forces you to use `mt-2` (8px), `mt-3` (12px), or `mt-4` (16px). You're working within a consistent spacing scale. The result is visual consistency across your entire UI without writing a single design token.

```html
<!-- Inline styles: arbitrary, inconsistent -->
<div style="margin: 13px; padding: 7px; font-size: 15px;">

<!-- Tailwind: constrained, consistent -->
<div class="m-3 p-2 text-base">
```

## The Developer Experience Win

The biggest productivity gain is keeping your eyes on one file. In component-based development (React, Astro, Vue), your component is already a self-contained unit. Tailwind completes that picture:

```jsx
// Everything about this button is right here
function Button({ children, variant = 'primary' }) {
  return (
    <button
      className={`
        px-4 py-2 rounded-lg font-semibold transition-all duration-200
        ${variant === 'primary'
          ? 'bg-green-500 text-black hover:bg-green-400'
          : 'bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10'
        }
      `}
    >
      {children}
    </button>
  );
}
```

No CSS file to maintain. No class name to invent. The visual output is immediately apparent from reading the classes.

## Tailwind v4: The Vite Era

Tailwind v4 was a significant rewrite. The most important change: **CSS-native configuration**. Instead of a `tailwind.config.js` file, you configure everything in CSS:

```css
@import "tailwindcss";

/* Custom tokens defined in CSS, not JS */
@theme {
  --color-brand: oklch(68% 0.185 149);
  --font-mono: "JetBrains Mono", monospace;
}
```

The v4 Vite plugin eliminates the PostCSS pipeline entirely, making builds significantly faster. For Astro projects, it's as simple as:

```js
// astro.config.mjs
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

## DaisyUI: Semantic Components on Top

The common criticism of Tailwind — "the HTML is so cluttered" — is best addressed with a component library like DaisyUI. Instead of writing 20 utility classes for every button, you write `class="btn btn-primary"` and customize the theme via CSS variables.

This site uses DaisyUI v5 on top of Tailwind v4. The combination gives you:
- Semantic class names for common UI patterns (cards, badges, modals)
- Full theme customization via CSS custom properties
- Zero runtime JavaScript — it's pure CSS

```css
/* Custom DaisyUI theme in CSS */
@plugin "daisyui/theme" {
  name: "forest";
  --color-primary: oklch(68.628% 0.185 148.958);
  --color-secondary: oklch(69.776% 0.135 168.327);
}
```

## When Not to Use Tailwind

Tailwind isn't always the answer. For highly custom, animation-heavy UIs, you'll find yourself fighting against the utility system and reaching for raw CSS. Complex `@keyframes`, intricate `clip-path` animations, and highly specific pseudo-element tricks are better written as custom CSS.

The sweet spot: use Tailwind for layout, spacing, typography, and colors. Use custom CSS for anything that requires complex animation or deeply specific selectors.

## Conclusion

The initial revulsion fades quickly once you feel the productivity of never context-switching between HTML and CSS. The design system constraints prevent the kind of visual inconsistency that plagues handwritten CSS. And with v4's native CSS configuration, the mental overhead of the tool itself has dropped dramatically.

Give it two weeks on a real project. You'll understand why it's taken over.
