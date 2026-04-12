export interface TechItem {
  name: string;
  reason: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  screenshots: { src: string; alt: string }[];
  problem: string;
  solution: string;
  techStack: TechItem[];
  features: string[];
  challenges: { title: string; description: string }[];
  github?: string;
  demo?: string;
  skills: string[]; // for Card display
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "jisa-ai-manga-translator",
    name: "Jisa - AI Manga Translator",
    tagline:
      "End-to-end manga translation system for OCR, inpainting, and Thai typesetting.",
    description:
      "Jisa is an end-to-end manga translation system that uploads comic pages, detects speech bubbles, extracts text with OCR, translates it into Thai, removes the original text, and renders the translated text back into the page. The workflow combines a Python backend and a Next.js frontend to give users a local-first dashboard for uploading pages, monitoring progress, and reviewing original, cleaned, and translated results.",
    heroImage: "/projects/jisa.svg",
    screenshots: [
      {
        src: "/projects/jisa.svg",
        alt: "Jisa manga translation pipeline preview",
      },
    ],
    problem:
      "Translating manga pages manually is slow and inconsistent. A good translation is not enough on its own because the text must be extracted accurately, bubble regions cleaned up, and the translated dialogue typeset back into the page without breaking the layout or tone.",
    solution:
      "Jisa automates the full workflow by detecting speech bubbles, OCRing each bubble, translating with page-level context, inpainting the original text out of the image, and typesetting the Thai translation back into the bubble regions while preserving the artwork and page structure.",
    techStack: [
      {
        name: "FastAPI + Uvicorn",
        reason:
          "Provides the Python backend HTTP API and job orchestration layer for the image processing pipeline.",
      },
      {
        name: "OpenCV, NumPy, Pillow",
        reason:
          "Handle image manipulation, cleaning, masking, and processing tasks across the manga page workflow.",
      },
      {
        name: "PyTorch + Ultralytics",
        reason:
          "Support the segmentation models used for bubble detection and refinement.",
      },
      {
        name: "Next.js 16 + React 19",
        reason:
          "Drives the frontend dashboard for uploads, status tracking, and reviewing processed pages.",
      },
      {
        name: "Tailwind CSS 4 + Framer Motion",
        reason:
          "Provide the styling and motion system for the upload and review interface.",
      },
      {
        name: "Ollama + BYOK translation",
        reason:
          "Supports local OCR inference and OpenAI-compatible translation workflows.",
      },
    ],
    features: [
      "Drag-and-drop upload for one or many manga pages",
      "Background job processing with live status polling",
      "Bubble segmentation using a detection-first pipeline",
      "OCR extraction per bubble with page-level fallback when needed",
      "Page-context translation for more consistent dialogue",
      "Inpainting that removes original text while preserving artwork",
      "Bubble-aware typesetting for translated Thai text",
      "Side-by-side review of original, cleaned, and final translated images",
      "Progress and error reporting for each uploaded file",
    ],
    challenges: [
      {
        title: "Managing VRAM across multiple models",
        description:
          "Several vision models and OCR inference can run on the same machine, so the backend unloads models between stages to stay within a practical GPU budget.",
      },
      {
        title: "Cleaning text without destroying artwork",
        description:
          "Inpainting needs a text-only mask instead of just a bubble mask, or the cleaned image loses too much of the original page structure.",
      },
      {
        title: "Thai typesetting inside tight bubbles",
        description:
          "Naive wrapping is not enough for Thai dialogue, so the renderer uses language-aware layout logic to fit translated text back into constrained speech bubbles.",
      },
      {
        title: "Coordinating OCR, translation, and fallbacks",
        description:
          "OCR and translation work best when they share page context, and the pipeline also needs fallback paths for missing detections, unavailable credentials, and inpainting failures.",
      },
    ],
    skills: ["FastAPI", "Next.js", "PyTorch"],
    featured: true,
  },
  {
    slug: "seeu-bangkok",
    name: "SeeU Bangkok",
    tagline:
      "AI-powered Bangkok trip discovery with maps, chat, saved itineraries, and multilingual planning.",
    description:
      "SeeU Bangkok is an AI-powered travel discovery platform for finding places, planning trips, and exploring Bangkok through an interactive map and chat experience. It combines a Next.js web app, a Hono API, Supabase, and AI agent workflows to help users discover authentic local spots instead of only the usual tourist highlights.",
    heroImage: "/projects/seeu-bangkok.svg",
    screenshots: [
      {
        src: "/projects/seeu-bangkok.svg",
        alt: "SeeU Bangkok planner preview",
      },
    ],
    problem:
      "Bangkok trip planning is often fragmented across maps, blogs, booking sites, and manual notes. That makes it difficult to answer simple questions about nearby places, budgets, routes, hidden gems, and multilingual support in one workflow.",
    solution:
      "SeeU Bangkok unifies discovery and planning into one flow with an interactive map, conversational AI planning, saved itineraries, Supabase-backed accounts, and streaming responses so users can discover places and build trips in real time.",
    techStack: [
      {
        name: "Next.js 15 + React 19",
        reason:
          "Provides the web app shell for place discovery, itinerary planning, saved trips, and the user-facing experience.",
      },
      {
        name: "Hono on Bun",
        reason:
          "Handles the backend API surface for place search, itinerary planning, and streaming AI responses.",
      },
      {
        name: "Supabase",
        reason:
          "Stores user sessions, saved trips, and planner data while supporting authentication and persistence.",
      },
      {
        name: "Mapbox GL JS",
        reason:
          "Drives the interactive map experience so users can discover places visually and plan around location context.",
      },
      {
        name: "TypeScript",
        reason:
          "Keeps the monorepo contracts, API validation, and frontend state management predictable across the stack.",
      },
      {
        name: "Tailwind CSS 4",
        reason:
          "Supports a responsive UI that stays lightweight and fast across desktop and mobile trip-planning flows.",
      },
    ],
    features: [
      "AI chat for natural-language place discovery and itinerary planning",
      "Interactive map-based exploration with nearby suggestions and category filters",
      "Saved trips, chat sessions, and editable itineraries for returning users",
      "Supabase-backed authentication and user-specific planner state",
      "Streaming AI responses over SSE for real-time planner feedback",
      "Thai and English support for a multilingual travel experience",
      "Admin tools for maintaining place data and content",
    ],
    challenges: [
      {
        title: "Balancing map UI responsiveness",
        description:
          "Map-heavy screens need to stay responsive while cleaning up Mapbox instances correctly and avoiding jank on desktop and mobile.",
      },
      {
        title: "Coordinating streaming AI workflows",
        description:
          "The planner has to coordinate search, tool calls, and partial responses without breaking UI state or making the chat feel unstable.",
      },
      {
        title: "Combining context-aware recommendations",
        description:
          "Useful travel recommendations need category, proximity, budget, timing, and route structure at the same time instead of simple keyword search.",
      },
      {
        title: "Supporting multilingual and authenticated usage",
        description:
          "The product has to work smoothly for Thai and English users while still handling login, saved trips, and planner persistence cleanly.",
      },
    ],
    skills: ["Next.js", "Hono", "LangGraph"],
    featured: true,
  },
  {
    slug: "meguri",
    name: "Meguri",
    tagline: "SmartStock for recipe-based businesses and small retail",
    description:
      "Meguri is a smart stock and demand forecasting app for recipe-driven businesses and small retail teams. It keeps workspace, inventory, recipes, sales, suppliers, purchase planning, alerts, and forecasting in one operational system so daily work stays visible and controlled.",
    heroImage: "/projects/meguri.svg",
    screenshots: [
      { src: "/projects/meguri.svg", alt: "Meguri dashboard preview" },
    ],
    problem:
      "Small businesses often manage stock in spreadsheets or manual workflows. That makes stock movement hard to track, connects sales to recipes or BOMs poorly, delays purchasing, and increases the chance of stockouts or waste.",
    solution:
      "Meguri solves this with a workspace-scoped app built on Next.js and Convex, with real authentication, inventory CRUD, stock movement audit logs, sales tied to recipes, supplier and purchase planning, alerts, and forecasting or reorder recommendations based on live system data.",
    techStack: [
      {
        name: "Next.js 15 + React 19",
        reason:
          "Provides the app shell and interactive UI layer for the main workspace, dashboard, inventory, forecasting, alerts, and planning pages.",
      },
      {
        name: "TypeScript",
        reason:
          "Keeps the data model, query handlers, and UI contracts explicit across the repo, which matters for workspace-scoped business logic.",
      },
      {
        name: "Convex",
        reason:
          "Acts as the backend, database, and realtime query layer for inventory, sales, supplier data, alerts, and forecasting snapshots.",
      },
      {
        name: "Better Auth",
        reason:
          "Handles authentication and session management so workspace access control can be enforced reliably.",
      },
      {
        name: "Tailwind CSS 4",
        reason:
          "Provides the styling system for the dashboard, navigation, and operational pages without adding heavy custom CSS overhead.",
      },
      {
        name: "Motion, lucide-react, Iconify",
        reason:
          "Supply the UI motion and icon set used to keep the experience clear, modern, and easy to scan.",
      },
    ],
    features: [
      "Multi-tenant workspace model with role-based access control",
      "Inventory management with add, edit, archive, adjustment, and movement history",
      "Product and recipe/BOM mapping to connect finished goods with ingredients",
      "Sales transactions that deduct stock from recipes and preserve an audit trail",
      "Supplier management and purchase planning through reorder recommendations",
      "Forecasting dashboard with 7, 14, and 30 day snapshots plus manual refresh",
      "Alerts for low stock and unusual demand",
      "Dashboard pages for inventory, products, sales, forecasting, suppliers, reports, and settings",
    ],
    challenges: [
      {
        title: "Workspace scoping and permissions",
        description:
          "Every query and mutation has to stay inside the correct tenant boundary so data cannot leak across workspaces or bypass role-based permissions.",
      },
      {
        title: "Forecasting and recommendation quality",
        description:
          "The current forecasting layer uses moving averages from stock movement data, which works for the MVP but will need stronger forecasting logic over time.",
      },
      {
        title: "Idempotent reorder generation",
        description:
          "Purchase recommendations need to be regenerated safely without creating duplicate pending records, so existing recommendations are cleared before a new run.",
      },
      {
        title: "Production readiness gaps",
        description:
          "The roadmap still calls out work such as deployability baseline, supplier PO flow, reports and export, onboarding, and multi-location support before production hardening is complete.",
      },
    ],
    skills: ["Next.js", "Convex", "TypeScript"],
    featured: true,
  },
  {
    slug: "nextmart",
    name: "NextMart",
    tagline:
      "Full-stack e-commerce platform with modern UI and JWT authentication",
    description:
      "NextMart is a production-ready e-commerce platform built with Next.js on the frontend and Django REST Framework on the backend. It features a fully functional shopping experience including product browsing, cart management, order processing, and a secure JWT-based authentication flow.",
    heroImage: "/projects/nextmart1.png",
    screenshots: [
      { src: "/projects/nextmart.png", alt: "NextMart home page" },
      { src: "/projects/nextmart1.png", alt: "Product listing page" },
      { src: "/projects/nextmart2.png", alt: "Product detail page" },
      { src: "/projects/nextmart3.png", alt: "Shopping cart" },
      { src: "/projects/nextmart4.png", alt: "Checkout & order flow" },
    ],
    problem:
      "Building a modern e-commerce experience requires tight coordination between a performant, SEO-friendly frontend and a robust, secure backend API. Off-the-shelf solutions are inflexible; custom builds expose exactly where the complexity lives — state management, auth token lifecycles, and data consistency across client and server.",
    solution:
      "Separated concerns cleanly by using Next.js App Router for server-side rendering and client-side interactivity, paired with Django REST Framework as a dedicated API layer. JWT access/refresh token rotation is handled transparently in middleware, so protected routes and API calls feel seamless to the user while remaining secure.",
    techStack: [
      {
        name: "Next.js 14 (App Router)",
        reason:
          "App Router enables per-route server components, reducing client-side JavaScript and improving Time-to-Interactive. Built-in image optimisation and metadata API also handle SEO without extra libraries.",
      },
      {
        name: "Django REST Framework",
        reason:
          "DRF's class-based views and serialisers make it fast to build a well-structured REST API with proper validation. Django's ORM abstracts PostgreSQL queries and makes migrations painless.",
      },
      {
        name: "PostgreSQL",
        reason:
          "Relational integrity is critical for an e-commerce data model (orders → line items → products). PostgreSQL's ACID guarantees prevent overselling and data corruption under concurrent writes.",
      },
      {
        name: "JWT (SimpleJWT)",
        reason:
          "Stateless authentication scales horizontally without shared session storage. Access + refresh token rotation provides a good balance between security and user experience.",
      },
      {
        name: "Tailwind CSS",
        reason:
          "Utility-first CSS keeps styles co-located with markup, eliminates dead CSS, and makes responsive design fast to prototype and refine.",
      },
      {
        name: "Zustand",
        reason:
          "Lightweight global state for cart and auth state. Zustand's minimal API avoids Redux boilerplate while still being testable and devtools-friendly.",
      },
    ],
    features: [
      "User registration, login, and JWT refresh-token rotation",
      "Product catalogue with search and category filtering",
      "Persistent shopping cart synced to the backend",
      "Order placement and order history dashboard",
      "Admin panel via Django admin for product and order management",
      "Fully responsive layout (mobile-first)",
      "Optimised images via Next.js Image component",
    ],
    challenges: [
      {
        title: "Token refresh without user disruption",
        description:
          "Access tokens expire in 15 minutes. Intercepting 401 responses, silently refreshing the token, and retrying the original request — all without the user noticing — required careful async queue management in Axios interceptors.",
      },
      {
        title: "Cart state hydration on SSR",
        description:
          "Cart data lives in Zustand (client-side) but product pages are server-rendered. Avoiding hydration mismatches required deferring cart reads until after the first client render using a Zustand persist middleware pattern.",
      },
      {
        title: "Django CORS & cookie policy",
        description:
          "Aligning Django's CSRF and CORS settings with Next.js's server-action requests across different origins during development took careful configuration of django-cors-headers and SameSite cookie attributes.",
      },
    ],
    github: "https://github.com/heartnet123/ecommerce-nextmart",
    skills: ["Next.js", "Django", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "bookcube",
    name: "BookCube",
    tagline:
      "A Django-powered platform for managing and discovering your book collection",
    description:
      "BookCube is a web application that lets readers catalogue their personal book collections, track reading progress, write reviews, and discover new titles. Built with Django and PostgreSQL, it emphasises clean data modelling and a distraction-free reading-log experience.",
    heroImage: "/projects/bookcube1.png",
    screenshots: [
      { src: "/projects/bookcube.png", alt: "BookCube home page" },
      { src: "/projects/bookcube1.png", alt: "Book catalogue view" },
      { src: "/projects/bookcube2.png", alt: "Book detail and review" },
      { src: "/projects/bookcube3.png", alt: "Reading progress tracker" },
      { src: "/projects/bookcube4.png", alt: "User profile & stats" },
      { src: "/projects/bookcube5.png", alt: "Search and filter" },
    ],
    problem:
      "Existing book-tracking apps are feature-bloated or lock data inside proprietary ecosystems. There was a need for a self-hosted, open solution where a developer could own their reading data, extend the schema, and expose a clean API for future integrations.",
    solution:
      "Built a monolithic Django application with a well-normalised PostgreSQL schema (Books, Authors, Editions, UserShelves, Reviews). Django's admin and class-based generic views accelerated development of CRUD surfaces, while custom template tags kept the frontend lightweight without a separate JS framework.",
    techStack: [
      {
        name: "Django",
        reason:
          "Django's 'batteries included' philosophy — ORM, admin, auth, forms — meant the entire CRUD surface could be built rapidly without assembling a framework from scratch. The MVT pattern keeps business logic testable.",
      },
      {
        name: "PostgreSQL",
        reason:
          "Full-text search (using PostgreSQL's tsvector) powers the book discovery feature without needing an external search engine. Foreign-key constraints ensure referential integrity between books, authors, and user shelves.",
      },
      {
        name: "Django Template Language",
        reason:
          "Server-side rendering keeps the app fast on low-bandwidth connections and trivially crawlable by search engines — important for a content-heavy catalogue site.",
      },
      {
        name: "Gunicorn + Nginx",
        reason:
          "Production deployment uses Gunicorn as the WSGI server behind Nginx for static file serving and reverse proxying, matching standard Django deployment best practices.",
      },
    ],
    features: [
      "Personal book shelves: Want to Read, Reading, Read",
      "Star ratings and written reviews per book",
      "Reading progress tracker (page / percentage)",
      "Full-text search across titles, authors, and ISBNs",
      "Reading statistics dashboard (books per month, genre breakdown)",
      "CSV export of personal reading data",
      "Django admin panel for content moderation",
    ],
    challenges: [
      {
        title: "Normalising book metadata",
        description:
          "Books can have multiple authors, multiple editions, and complex ISBN relationships. Designing a schema that handles many-to-many author relationships and edition variants without duplication required several iterations of the data model.",
      },
      {
        title: "Full-text search performance",
        description:
          "Naive LIKE queries were too slow on a large catalogue. Migrating to PostgreSQL tsvector with GIN indexes improved search latency by an order of magnitude without adding an external service dependency.",
      },
      {
        title: "Handling duplicate book entries",
        description:
          "Users import books from different sources with inconsistent metadata. A deduplication heuristic using ISBN-13 as the primary key, with fuzzy title-author matching as a fallback, keeps the catalogue clean.",
      },
    ],
    github: "https://github.com/heartnet123/BookCube",
    skills: ["Django", "PostgreSQL", "Python"],
    featured: true,
  },
  {
    slug: "kitchen-inventory",
    name: "Kitchen Inventory",
    tagline: "Cross-platform desktop app for tracking home kitchen inventory",
    description:
      "Kitchen Inventory is a native desktop application built with Tauri and SvelteKit that helps households track pantry items, set expiry-date alerts, and generate shopping lists. It runs offline-first with a local SQLite database, meaning no account sign-up or internet connection is required.",
    heroImage: "/projects/kitchen.png",
    screenshots: [
      { src: "/projects/kitchen.png", alt: "Kitchen Inventory main dashboard" },
    ],
    problem:
      "Households regularly buy duplicate groceries or throw away expired food because there is no easy way to see what is already in the pantry. Cloud-based inventory apps require an account and a network connection, which is unnecessary friction for a personal utility.",
    solution:
      "Built a lightweight desktop application that stores all data in a local SQLite file via Tauri's Rust backend. The SvelteKit frontend communicates with the Rust layer through Tauri's typed command API, giving a web-development workflow while shipping a native binary with a tiny footprint (~10 MB installer).",
    techStack: [
      {
        name: "Tauri",
        reason:
          "Tauri wraps a native WebView around a Rust backend, producing installers dramatically smaller than Electron (< 10 MB vs. 100+ MB). The Rust layer handles file-system access and SQLite via rusqlite, keeping sensitive operations out of the JavaScript context.",
      },
      {
        name: "SvelteKit",
        reason:
          "Svelte compiles away the framework at build time, producing minimal JS. Its reactive stores map naturally to real-time UI updates when inventory quantities change. SvelteKit's file-based routing structures the app's views cleanly.",
      },
      {
        name: "SQLite (via rusqlite)",
        reason:
          "A single-file database is ideal for a personal desktop app — no server process, easy to backup by copying one file, and sufficient for thousands of inventory records with sub-millisecond queries.",
      },
      {
        name: "Rust",
        reason:
          "Tauri's backend commands are written in Rust, providing memory safety and performance for file I/O and database operations without a runtime dependency on Node.js or Python.",
      },
    ],
    features: [
      "Add, edit, and delete pantry items with quantity and unit",
      "Expiry-date tracking with colour-coded alerts (fresh / expiring soon / expired)",
      "Category organisation (dairy, produce, dry goods, etc.)",
      "Auto-generated shopping list from low-stock items",
      "Full offline operation — no account or internet required",
      "Cross-platform: Windows, macOS, and Linux installers",
      "Data stored in a portable SQLite file (easy backup)",
    ],
    challenges: [
      {
        title: "Bridging Svelte and Rust",
        description:
          "Tauri's invoke API is asynchronous. Designing a clean abstraction layer that wraps Tauri commands in typed TypeScript functions — and handles errors uniformly — took careful API design to avoid callback complexity in the Svelte components.",
      },
      {
        title: "SQLite migrations in a desktop context",
        description:
          "Unlike a server app, users may skip versions when updating. Implementing a lightweight migration runner in Rust that applies pending schema migrations on startup — without an ORM — required writing raw SQL migration files and tracking applied versions in a meta table.",
      },
      {
        title: "Packaging for multiple platforms",
        description:
          "Each target OS requires a different signing and packaging setup (MSI for Windows, DMG for macOS, AppImage for Linux). Setting up GitHub Actions to cross-compile and sign on all three platforms added significant CI complexity.",
      },
    ],
    github: "https://github.com/heartnet123/kitcheninventory",
    skills: ["Tauri", "SvelteKit", "SQLite", "Rust"],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
