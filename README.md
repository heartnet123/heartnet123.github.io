<div align="center">

<img src="./public/favicon.svg" alt="Heartnet Logo" width="80" height="80" />

# Developer Portfolio

*A modern, performance-focused personal website and blog built with Astro 5, React, Tailwind CSS v4, and GSAP.*

[![Deploy to GitHub Pages](https://github.com/heartnet123/heartnet123.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/heartnet123/heartnet123.github.io/actions)
[![Astro](https://img.shields.io/badge/Astro-v5-ff5d01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-v19-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Bun](https://img.shields.io/badge/Bun-latest-black?style=flat-square&logo=bun&logoColor=white)](https://bun.sh)

⭐ If you like this project, star it on GitHub — it helps a lot!

[Overview](#overview) • [Features](#features) • [Tech Stack](#tech-stack) • [Project Structure](#project-structure) • [Getting Started](#getting-started) • [Customization](#customization) • [Deployment](#deployment)

</div>

---

## Overview

This repository powers the personal developer portfolio and technical blog for **Earth** ([@heartnet123](https://github.com/heartnet123)), a Full Stack Developer based in Bangkok.

The application leverages Astro 5's Islands Architecture to deliver ultra-fast static pages while selectively hydrating interactive React components only when necessary. Motion design and smooth scrolling are orchestrated using GSAP ScrollTrigger and Lenis, wrapped inside daisyUI's dark `forest` design system.

> [!NOTE]
> The live portfolio is automatically built and published to GitHub Pages at [heartnet123.github.io](https://heartnet123.github.io).

## Features

- **Astro 5 Islands Architecture**: Delivers lightweight static HTML by default, hydrating interactive components only as needed for optimal PageSpeed scores.
- **Scroll-Driven Motion**: Fluid micro-interactions and scroll-reveals powered by GSAP, ScrollTrigger, and Lenis inertia scrolling.
- **Typed Project Showcase**: Centralized TypeScript data schema (`src/data/projects.ts`) for managing case studies, tech stacks, problem statements, and screenshots.
- **Astro Content Collections**: Markdown-driven technical blog supporting frontmatter validation and Shiki syntax highlighting (`github-dark` theme).
- **Tailwind CSS v4 & daisyUI**: Utility-first styling integrated via `@tailwindcss/vite` and customized with daisyUI's `forest` dark theme.
- **Responsive & Accessible**: Mobile-first layout with collapsible navigation drawer, skip-to-content accessibility links, and full keyboard navigation support.
- **Automated CI/CD**: Built with Bun and deployed seamlessly to GitHub Pages on every push to the `main` branch.

## Tech Stack

| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Core Framework** | [Astro 5](https://astro.build/) | Static site generator and component routing |
| **UI Library** | [React 19](https://react.dev/) | Interactive client-side islands (`@astrojs/react`) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + [daisyUI v5](https://daisyui.com/) | Design tokens, utility classes, and dark forest theme |
| **Motion & Scroll** | [GSAP](https://gsap.com/) + [Lenis](https://lenis.darkroom.engineering/) | ScrollTrigger animations and smooth inertia scrolling |
| **Icons & UI Primitives** | [Lucide React](https://lucide.dev/) + Radix UI Slot | Accessible icon system and primitive wrappers |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type checking for project schemas and content |
| **Runtime & CI** | [Bun](https://bun.sh/) + GitHub Actions | High-speed package management and continuous deployment |

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment pipeline using Bun
├── public/
│   ├── favicon.svg             # Site logo / icon
│   ├── og-image.png            # Open Graph banner for social sharing
│   └── resume.pdf              # Downloadable developer resume
├── src/
│   ├── assets/
│   │   ├── app.css             # Main stylesheet & Tailwind imports
│   │   └── scroll-tracker.js   # Reading progress indicator logic
│   ├── components/
│   │   ├── Card.astro          # Reusable project card component
│   │   ├── Sidebar.astro       # Collapsible navigation drawer
│   │   ├── Skill.astro         # Skill matrix display component
│   │   └── ui/                 # React UI primitives (buttons, slots)
│   ├── content/
│   │   ├── blog/               # Markdown content for blog posts
│   │   └── config.ts           # Astro content collection definitions
│   ├── data/
│   │   └── projects.ts         # Portfolio projects data source
│   ├── layouts/
│   │   └── Layout.astro        # Master HTML layout, SEO meta & Lenis init
│   └── pages/
│       ├── index.astro         # Hero section & featured work
│       ├── about.astro         # Bio, experience timeline & background
│       ├── projects.astro      # Full projects gallery with filters
│       ├── blog.astro          # Article listing page
│       └── work.astro          # Dedicated career & experience page
├── astro.config.mjs            # Astro configuration & Vite plugins
└── package.json
```

## Getting Started

### Prerequisites

Ensure you have one of the following runtimes installed:

- **Node.js**: `v20.0.0` or higher
- **Bun**: `v1.0.0` or higher *(recommended)*

### Installation

Clone the repository and install dependencies:

```bash
# Clone repository
git clone https://github.com/heartnet123/heartnet123.github.io.git
cd heartnet123.github.io

# Install using Bun (recommended)
bun install

# Or install using npm
npm install
```

### Local Development

Start the local development server:

```bash
# Using Bun
bun run dev

# Using npm
npm run dev
```

The application will be available at `http://localhost:4321`.

### Build & Preview

Validate the production build locally:

```bash
# Build static site to ./dist
bun run build

# Preview production build locally
bun run preview
```

> [!TIP]
> The site builds to static files in the `./dist` directory, making it compatible with any static hosting provider.

## Customization

### Adding a Project

New portfolio items can be added directly to [`src/data/projects.ts`](file:///e:/webappgithub/heartnet123.github.io/src/data/projects.ts):

```typescript
{
  slug: "my-new-project",
  name: "Project Name",
  tagline: "Short descriptive tagline",
  description: "Detailed description of the project...",
  heroImage: "/projects/hero.png",
  screenshots: [{ src: "/projects/hero.png", alt: "Screenshot alt text" }],
  problem: "The challenge or problem solved...",
  solution: "The technical solution implemented...",
  techStack: [
    { name: "React", reason: "Component-driven interface" },
    { name: "TypeScript", reason: "Type safety across data flows" }
  ],
  features: ["Feature 1", "Feature 2"],
  challenges: [{ title: "Challenge title", description: "How it was overcome" }],
  github: "https://github.com/heartnet123/repo",
  demo: "https://example.com",
  skills: ["React", "TypeScript"],
  featured: true
}
```

### Adding a Blog Post

Add a Markdown file to `src/content/blog/my-post.md`:

```markdown
---
title: "Building Modern Web Apps"
description: "A deep dive into serverless architectures and static site generation."
pubDate: 2026-08-01
tags: ["astro", "webdev"]
---

Your content goes here...
```

## Deployment

Deployment to GitHub Pages is fully automated via GitHub Actions.

> [!IMPORTANT]
> To enable automatic deployments:
> 1. Go to your repository settings on GitHub (**Settings > Pages**).
> 2. Set **Source** to **GitHub Actions**.
> 3. Any push to `main` will trigger the workflow at `.github/workflows/deploy.yml`.
