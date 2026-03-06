---
title: "Getting Started with Astro"
date: "2025-10-15"
description: "Learn how to build fast websites with Astro, the modern static site builder that ships zero JavaScript by default."
tags: ["Astro", "Web Development"]
---

Astro is one of the most exciting frameworks to emerge in the modern web development ecosystem. It takes a fundamentally different approach from frameworks like Next.js or Nuxt by defaulting to zero client-side JavaScript — your pages are fully rendered at build time and ship as plain HTML.

## Why Astro?

The web has a performance problem. Modern JavaScript-heavy frameworks ship massive bundles to the client, forcing users to download, parse, and execute megabytes of JS just to see static content. Astro's answer is simple: **if the content doesn't need to be interactive, don't ship JavaScript for it.**

The results speak for themselves. A typical Astro site scores close to perfect on Google Lighthouse without any manual optimization.

## Setting Up Your First Project

Getting started is straightforward with Bun (or npm if you prefer):

```bash
bun create astro@latest my-site
cd my-site
bun dev
```

Astro's CLI wizard walks you through the setup. I recommend choosing the "Minimal" template to understand the structure from the ground up rather than starting with a pre-built theme.

## The Astro Component Model

Astro components have a unique two-part structure: a **frontmatter code fence** (the `---` block) for server-side logic, and the template below it.

```astro
---
// This runs at build time on the server
const greeting = "Hello, World!";
const items = await fetch('/api/items').then(r => r.json());
---

<!-- This is the HTML template -->
<h1>{greeting}</h1>
<ul>
  {items.map(item => <li>{item.name}</li>)}
</ul>
```

The key insight: everything in the frontmatter is stripped from the final bundle. No JavaScript is shipped to the client unless you explicitly ask for it with `client:load` or similar directives.

## Islands Architecture

Astro's "Islands" concept lets you sprinkle interactivity only where needed. You can use React, Vue, Svelte, or Solid components — and Astro will only hydrate them on the client:

```astro
---
import ReactCounter from './Counter.jsx';
import VueChart from './Chart.vue';
---

<!-- Static by default -->
<h1>My Dashboard</h1>

<!-- Only this counter is hydrated -->
<ReactCounter client:load />

<!-- Chart loads only when visible in viewport -->
<VueChart client:visible />
```

This means a page could be 95% static HTML with only the interactive bits actually loading JavaScript. That's a massive win for performance.

## Content Collections

One of Astro's best features for blogs and documentation is **Content Collections** — a type-safe system for managing Markdown and MDX files. You define a schema with Zod, and Astro validates all your content files at build time:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
```

This site uses exactly this pattern. Every post you're reading is a Markdown file that Astro validates, transforms, and renders.

## Deployment

Astro builds to pure static files by default, which means you can deploy anywhere: GitHub Pages, Netlify, Vercel, Cloudflare Pages, or even a plain nginx server. With GitHub Actions:

```yaml
- name: Build
  run: bun run build

- name: Deploy to Pages
  uses: actions/deploy-pages@v4
```

The build output is just HTML, CSS, and minimal JavaScript — it's fast, cheap to host, and scales infinitely via CDN.

## Conclusion

Astro is an excellent choice for any content-heavy site: portfolios, blogs, documentation, marketing pages. The zero-JavaScript-by-default philosophy aligns perfectly with the web's fundamental nature as a document delivery system. When you need interactivity, the Islands architecture gives you surgical control over what gets hydrated.

If you haven't tried Astro yet, the [official docs](https://docs.astro.build) are excellent. Start with a small project and let the simplicity surprise you.
