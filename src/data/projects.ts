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

const projectsByAge: Project[] = [
  {
    slug: "portfolio-website",
    name: "Developer Portfolio",
    tagline:
      "Animation-driven personal portfolio and blog built with Astro, Tailwind CSS, and GSAP",
    description:
      "A statically-generated developer portfolio website that showcases projects, technical skills, work experience, and a Markdown-powered blog. Built with Astro 5 for fast static output, styled with Tailwind CSS v4 and DaisyUI, and enhanced with GSAP scroll-triggered animations and Lenis smooth scrolling. Deployed automatically to GitHub Pages via a Bun-based CI/CD pipeline.",
    heroImage: "/projects/portfolio.svg",
    screenshots: [
      {
        src: "/projects/portfolio.svg",
        alt: "Portfolio website homepage",
      },
    ],
    problem:
      "Generic portfolio templates lack personality and performance. Most are either over-engineered SPAs that hurt load times, or static HTML pages with no interactivity. A developer portfolio needs to be fast, visually engaging, easy to maintain, and simple to extend with new projects and blog posts.",
    solution:
      "Built a static site with Astro 5 that ships zero JavaScript by default and hydrates only the interactive React islands that need it. Projects are defined as typed data objects for easy updates, blog posts are authored in Markdown with syntax highlighting, and GSAP handles scroll-driven motion design without compromising performance.",
    techStack: [
      {
        name: "Astro 5",
        reason:
          "Astro's island architecture ships zero client JS by default and only hydrates interactive components, keeping the portfolio fast while still supporting React where needed.",
      },
      {
        name: "React 19",
        reason:
          "Used for interactive UI primitives (buttons, cards) via shadcn/ui, hydrated as Astro islands only where interactivity is required.",
      },
      {
        name: "Tailwind CSS 4 + DaisyUI 5",
        reason:
          "Provides the utility-first styling system and the dark-mode 'forest' theme, keeping the design consistent without writing custom CSS.",
      },
      {
        name: "GSAP + ScrollTrigger",
        reason:
          "Powers the sequenced hero entrance, pinned Featured Work scroll, reusable reveal animations, and screenshot carousel transitions.",
      },
      {
        name: "Lenis",
        reason:
          "Adds smooth inertial scrolling synced with GSAP's ticker for a buttery scroll experience across the entire site.",
      },
      {
        name: "Bun + GitHub Actions",
        reason:
          "Bun handles dependency installation and builds. A GitHub Actions workflow deploys the static output to GitHub Pages on every push to main.",
      },
    ],
    features: [
      "Data-driven project gallery with typed project definitions and featured filtering",
      "Markdown blog with Astro Content Collections and Shiki syntax highlighting",
      "GSAP scroll-triggered reveal animations with directional variants (left, right, up, down)",
      "Pinned horizontal Featured Work section with ScrollTrigger-driven progress",
      "Sequenced hero entrance timeline and GSAP-powered screenshot carousel transitions",
      "Lenis smooth scrolling integrated with GSAP ticker",
      "SEO-ready with Open Graph and Twitter Card meta tags per page",
      "Responsive sidebar navigation with DaisyUI forest theme",
      "Automated CI/CD deployment to GitHub Pages via GitHub Actions",
      "Reading time estimation for blog posts",
    ],
    challenges: [
      {
        title: "Coordinating GSAP with Astro page transitions",
        description:
          "Astro's client-side navigation fires astro:page-load events that require re-initialising GSAP timelines and ScrollTrigger instances. Lenis also needs to be destroyed and recreated on each navigation to avoid stale scroll state.",
      },
      {
        title: "Balancing zero-JS defaults with interactive islands",
        description:
          "Astro ships no JavaScript by default, so React components like shadcn/ui buttons and cards need explicit hydration directives. Deciding which components need client-side interactivity versus static rendering required careful scoping.",
      },
      {
        title: "Respecting reduced motion preferences",
        description:
          "All GSAP animations check prefers-reduced-motion before running, ensuring the site remains accessible to users who have motion sensitivity without maintaining a separate animation-free codebase.",
      },
    ],
    github: "https://github.com/heartnet123/heartnet123.github.io",
    demo: "https://heartnet123.github.io",
    skills: ["Astro", "Tailwind CSS", "GSAP"],
    featured: false,
  },
  {
    slug: "jisa-ai-manga-translator",
    name: "Jisa - AI Manga Translator",
    tagline:
      "End-to-end manga translation system for OCR, inpainting, and Thai typesetting.",
    description:
      "Jisa is an end-to-end manga translation system that uploads comic pages, detects speech bubbles, extracts text with OCR, translates it into Thai, removes the original text, and renders the translated text back into the page. The workflow combines a Python backend and a Next.js frontend to give users a local-first dashboard for uploading pages, monitoring progress, and reviewing original, cleaned, and translated results.",
    heroImage: "/projects/jisa2.png",
    screenshots: [
      {
        src: "/projects/jisa2.png",
        alt: "Jisa manga translation dashboard preview",
      },
      {
        src: "/projects/jisa3.png",
        alt: "Jisa side-by-side original and translated page review",
      },
      {
        src: "/projects/jisa4.png",
        alt: "Jisa speech bubble detection and OCR editor flow",
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
    heroImage: "/projects/seeubang1.png",
    screenshots: [
      {
        src: "/projects/seeubang1.png",
        alt: "SeeU Bangkok homepage preview",
      },
      {
        src: "/projects/seeubang2.png",
        alt: "SeeU Bangkok place detail preview",
      },
      {
        src: "/projects/seeubang3.png",
        alt: "SeeU Bangkok map planner preview",
      },
      {
        src: "/projects/seeubang4.png",
        alt: "SeeU Bangkok screenshot 4",
      },
      {
        src: "/projects/seeubang5.png",
        alt: "SeeU Bangkok screenshot 5",
      },
      {
        src: "/projects/seeubang6.png",
        alt: "SeeU Bangkok screenshot 6",
      },
      {
        src: "/projects/seeubang7.png",
        alt: "SeeU Bangkok screenshot 7",
      },
      {
        src: "/projects/seeubang8.png",
        alt: "SeeU Bangkok screenshot 8",
      },
      {
        src: "/projects/seeubang9.png",
        alt: "SeeU Bangkok screenshot 9",
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
    heroImage: "/projects/meguri-1.png",
    screenshots: [
      { src: "/projects/meguri-1.png", alt: "Meguri dashboard overview" },
      { src: "/projects/meguri-2.png", alt: "Meguri product creation modal" },
      { src: "/projects/meguri-3.png", alt: "Meguri inventory list" },
      { src: "/projects/meguri-4.png", alt: "Meguri recipe and BOM screen" },
      { src: "/projects/meguri-5.png", alt: "Meguri sales log" },
      { src: "/projects/meguri-6.png", alt: "Meguri forecasting view" },
      {
        src: "/projects/meguri-7.png",
        alt: "Meguri supplier management screen",
      },
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
    slug: "koko",
    name: "KoKo",
    tagline: "A modern, cinematic anime library and tracking platform.",
    description:
      "KoKo is a fast, responsive, and visually immersive catalog designed for anime watchers, from casual fans to dedicated otakus. Built using Nuxt 4 and Go, the platform moves away from database-heavy grid interfaces toward content-first cinematic layouts, utilizing a rate-limit-aware Go backend caching proxy.",
    heroImage: "/projects/koko1.png",
    screenshots: [
      { src: "/projects/koko1.png", alt: "KoKo homepage" },
      { src: "/projects/koko2.png", alt: "KoKo anime browsing screen" },
      { src: "/projects/koko3.png", alt: "KoKo anime detail screen" },
      { src: "/projects/koko4.png", alt: "KoKo watchlist screen" },
      { src: "/projects/koko5.png", alt: "KoKo search screen" },
    ],
    problem:
      "Traditional anime tracking platforms are often cluttered with wall-to-wall textual statistics, slow to load, and feel more like database spreadsheets than entertainment apps. Furthermore, querying public anime APIs (like MyAnimeList via Jikan) is heavily restricted to around 3 requests per second, which leads to slow page loads, empty components, and frequent HTTP 429 Rate Limit errors under normal user activity.",
    solution:
      "KoKo frames vibrant anime artwork in a clean, dark-themed, cinematic interface using Nuxt UI and custom CSS animations. To tackle API constraints, the system deploys a Go-based backend that caches responses (5-minute TTL), implements exponential backoff retry policies, debounces search requests, and lazy-loads genre rows only when they scroll into the viewport.",
    techStack: [
      {
        name: "Nuxt 4 / Vue 3",
        reason:
          "Serves as the high-performance reactive frontend structure, utilizing layouts to swap guest and user views instantly and manage smooth page routing.",
      },
      {
        name: "Go & Gin Framework",
        reason:
          "Powers the backend proxy server, handling API caching, session tokens, and watchlist database operations with negligible CPU and memory usage.",
      },
      {
        name: "Supabase & PostgreSQL",
        reason:
          "Provides the underlying relational database storing user profiles and watchlist join tables with optimized indexes.",
      },
      {
        name: "Nuxt UI & Tailwind CSS",
        reason:
          "Facilitates building high-end, responsive dark-mode elements using custom CSS utility definitions and pre-configured component styling.",
      },
      {
        name: "VueUse",
        reason:
          "Integrates viewport intersection observers to implement lazy fetching of anime rows, lowering bandwidth consumption for both the client and server.",
      },
      {
        name: "JWT & bcrypt",
        reason:
          "Secures authentication flows by hashing passwords and issuing JSON Web Tokens saved in secure cookies and request headers.",
      },
    ],
    features: [
      "Ken Burns Hero Carousel: Panning slides showing current season's top-airing titles, rotating every 8s with automatic pause overrides.",
      "Viewport-Based Lazy Loading: Horizontal genre rows utilizing intersection observers to only execute fetches when visible.",
      "Smart Anime Rails: Set-based filtering on MAL IDs to prevent duplicate anime listings, with smooth horizontal scroll snapping.",
      "Instant Search & Debouncing: Fast client-side browse and filter engine that processes search combinations with debounced query execution.",
      "One-Click Watchlist: Unified watchlist store that updates user tracking across all cards, sliders, and screens in real time.",
      "Prefers-Reduced-Motion: Full accessibility checks targeting OS settings to disable resource-intensive panning and skeleton-shimmer gradients.",
    ],
    challenges: [
      {
        title: "Jikan API Strict Rate Limiting (HTTP 429)",
        description:
          "Loading multiple category rails simultaneously immediately exhausted Jikan's 3 req/s limit. We solved this by developing an in-memory caching layer in Go to serve cached anime listings within 5 minutes. We also implemented a retry composable with a 2-second backoff and configured lazy intersection observers on the frontend to stagger API requests.",
      },
      {
        title: "Maintaining Watchlist State Across Views",
        description:
          "Ensuring visual bookmarks (like active hearts/stars) synced instantly across hero slides, categories, and detail cards could easily lead to state mismatches. We structured a central auth composable using Nuxt state keys (`useState`) that holds user session and watchlist state, allowing unified O(1) checks for item status across all components.",
      },
      {
        title: "Achieving Smooth 60fps animations on Large Media Lists",
        description:
          "Rendering dozens of high-res anime posters side-by-side often causes page jank. We decoupled CSS layouts from resizing, moved carousel panning strictly to GPU-accelerated keyframe transforms (`scale()` and `translate()`), and styled lightweight linear shimmer skeletons for content that is loading.",
      },
    ],
    github: "https://github.com/heartnet123/Koko",
    demo: "",
    skills: [
      "Nuxt 4",
      "Vue 3",
      "Go",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "API Caching Proxy",
      "JWT Auth",
    ],
    featured: true,
  },
  {
    slug: "nagare-ai-agent-os",
    name: "Nagare AI Agent OS",
    tagline:
      "A unified local workspace and operating system for managing, evaluating, and running AI agents and RAG pipelines.",
    description:
      "Nagare (流) is a full-stack developer cockpit designed to consolidate the fragmented lifecycle of AI agent workflows. Instead of managing LLMs, vector database instances, Model Context Protocol (MCP) integrations, and telemetry metrics across disjointed terminals and configs, Nagare aggregates them into a single local dashboard. Built with FastAPI and Nuxt 4, it provides developers with a production-ready dashboard to build agents via system prompt composition, register MCP servers, index large documents into a ChromaDB vector store, run RAG evaluations on custom datasets, and inspect real-time performance telemetry.",
    heroImage: "/images/portfolio/nagare/hero.webp",
    screenshots: [
      {
        src: "/images/portfolio/nagare/dashboard.webp",
        alt: "Nagare OS Developer Dashboard showing active agent chat sessions, system stats, and workspace navigation.",
      },
      {
        src: "/images/portfolio/nagare/agent-builder.webp",
        alt: "No-code Agent configuration interface showing system prompt settings, dynamic tool selection, and model routing parameters.",
      },
      {
        src: "/images/portfolio/nagare/rag-evaluation.webp",
        alt: "RAG pipeline evaluation workbench displaying benchmark runs, faithfulness indexes, and relevance scores.",
      },
      {
        src: "/images/portfolio/nagare/knowledge-base.webp",
        alt: "Knowledge base manager with source document lists, chunk preview panels, and semantic search vector inspectors.",
      },
      {
        src: "/images/portfolio/nagare/mcp-manager.webp",
        alt: "Model Context Protocol (MCP) server manager for configuring and debugging external tools.",
      },
    ],
    problem:
      "Building agentic LLM systems is highly fragmented. Developers are forced to cobble together CLI tools, Jupyter notebooks, local databases, and custom UI wrappers just to test prompt adjustments, evaluate search relevance, check system logs, or connect third-party APIs. There is no unified runtime cockpit that facilitates rapid iteration, leading to silent prompt failures, untracked API costs, poorly configured RAG datasets, and difficult-to-debug tool execution loops.",
    solution:
      "Nagare provides an integrated control plane. By coupling an asynchronous FastAPI server with a Vue-based Nuxt 4 application, it delivers a high-fidelity workspace. Developers can create agents on the fly, immediately chat with them using live SSE streaming, inspect XML-based tool execution in real-time, configure Model Context Protocol (MCP) servers, upload up to 50MB files (PDF, DOCX, Markdown, etc.) directly into a ChromaDB vector index, and test retrieval quality against custom datasets. This brings full observability, testing, and operation of AI agents into a single, cohesive local OS.",
    techStack: [
      {
        name: "FastAPI & Uvicorn",
        reason:
          "Chosen as the asynchronous Python core to support low-latency WebSockets, background tasks, and Server-Sent Events (SSE) streaming for agent responses.",
      },
      {
        name: "Nuxt 4 & Vue.js 3",
        reason:
          "Leveraged for full-stack frontend layout, automatic routing, modular codebases, and rich state composition with TypeScript.",
      },
      {
        name: "Nuxt UI 4 & Tailwind CSS 4",
        reason:
          "Implemented for a premium, responsive dark-mode dashboard using customized HSL color systems, smooth micro-animations, and glassmorphism cards.",
      },
      {
        name: "ChromaDB",
        reason:
          "Serves as the local vector store for document chunk ingestion, enabling quick semantic memory and context-aware RAG pipelines.",
      },
      {
        name: "SQLite & SQLAlchemy",
        reason:
          "Acts as the transactional metadata store for agent settings, conversation histories, and RAG evaluation runs with cascade-on-delete constraints.",
      },
      {
        name: "Pydantic v2",
        reason:
          "Enforces strict type validation and serialization schemas for agent specifications, database records, and API endpoints.",
      },
      {
        name: "PyMuPDF & python-docx",
        reason:
          "Parses complex documents (PDFs, DOCX) to extract page-level text structure for deterministic vector indexing.",
      },
      {
        name: "Lucide Vue Icons",
        reason:
          "Provides a clean, consistent, and customizable icon library for dashboard status indicators, action chips, and navigation components.",
      },
      {
        name: "TypeScript 6",
        reason:
          "Provides end-to-end type safety, preventing layout bugs and ensuring strict schema matching when consuming the FastAPI backend.",
      },
    ],
    features: [
      "Unified AI Agent OS Dashboard: Single-screen control center for agent states, telemetry, and system health.",
      "Server-Sent Events (SSE) Chat Stream: Low-latency streaming chat interface that renders markdown responses, syntax highlighting, and live agent thoughts.",
      "Model Context Protocol (MCP) Management: UI for registering, updating, and testing JSON-RPC-based local and remote tool servers.",
      "Vector Knowledge Base & RAG: Drag-and-drop document upload (PDF, DOCX, TXT) with automatic chunk preview and direct vector search inspection.",
      "RAG Pipeline Evaluations: Benchmark suite to run custom test cases against RAG indices and measure faithfulness, precision, and context relevance.",
      "Real-Time System Monitoring: Local telemetry dashboard tracking CPU, memory, request rates, token consumption, API costs, and trace logs.",
      "Flexible Model Routing: Ability to dynamically hot-swap LLM engines (OpenAI, Anthropic, Google, Ollama) and adjust parameters per session.",
      "Automated Memory System: Semantic memory database powered by local SQLite relations and Chroma vector indices to persist facts across chats.",
    ],
    challenges: [
      {
        title: "Asynchronous Message Ingest & SQLite Locks",
        description:
          "Persisting incoming SSE messages, tool starts, and results into SQLite during active LLM streaming caused database contention and occasional SQLite busy errors. We solved this by implementing an async SessionManager and database-access queue that batches writes and ensures non-blocking transactional reads for active client sessions.",
      },
      {
        title: "Dynamic Model Context Protocol (MCP) Integration",
        description:
          "Handling process lifecycles and standard streams for external local/remote MCP tools required a robust wrapper. We developed a dynamic client service in Python that wraps server execution, reads tool schema definitions, handles JSON-RPC calls, and maps them to the agent's XML-style tool invocation block in real time.",
      },
      {
        title: "High-Performance RAG Document Ingestion",
        description:
          "Chunking large files (up to 50MB) and indexing them into ChromaDB in real-time caused UI thread lag on long files. We solved this by moving the chunking/parsing logic to async FastAPI background threads, utilizing PyMuPDF's page-level extractor to partition documents, storing deterministic SHA-256 file hashes to prevent duplicates, and utilizing SQLite cascades to delete orphaned chunks when documents are removed.",
      },
    ],
    github: "https://github.com/heartnet123/nagare",
    demo: "https://nagare.dev",
    skills: [
      "FastAPI",
      "Nuxt.js",
      "ChromaDB",
      "LLM Agents",
      "TypeScript",
      "Python",
      "Model Context Protocol",
      "RAG Evaluation",
      "Vector Search",
    ],
    featured: true,
  },
];

export const projects: Project[] = [
  projectsByAge[projectsByAge.length - 1],
  projectsByAge[projectsByAge.length - 2],
  ...projectsByAge.slice(0, -2),
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
