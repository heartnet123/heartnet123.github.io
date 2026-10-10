import { expect, test, type Page } from "@playwright/test";

type TransitionSnapshot = {
  path: string;
  clones: number;
  cloneVisible: boolean;
  hiddenHero: boolean;
  dolly: boolean;
};

declare global {
  interface Window {
    transitionSnapshots: TransitionSnapshot[];
    lenis: { isStopped: boolean };
  }
}

const pageErrors = new WeakMap<Page, string[]>();

test.beforeEach(async ({ page }, testInfo) => {
  const errors: string[] = [];
  pageErrors.set(page, errors);
  page.on("pageerror", (error) => errors.push(error.message));
  if (testInfo.project.name === "desktop-fallback") {
    await page.addInitScript(() => {
      Object.defineProperty(document, "startViewTransition", { value: undefined });
    });
  }
  await page.addInitScript(() => {
    window.transitionSnapshots = [];
    document.addEventListener("astro:after-swap", () => {
      // Observe the rendered transition after the page's own event handlers.
      queueMicrotask(() => {
        const clone = document.querySelector<HTMLImageElement>(".dolly-image-clone");
        const style = clone && getComputedStyle(clone);
        window.transitionSnapshots.push({
          path: location.pathname,
          clones: document.querySelectorAll(".dolly-image-clone").length,
          cloneVisible: !!clone && style?.display !== "none" && style?.visibility === "visible" && clone.getBoundingClientRect().width > 0,
          hiddenHero: !!document.querySelector(".hero-transition-hidden"),
          dolly: document.documentElement.classList.contains("dolly-active"),
        });
      });
    });
  });
});

test.afterEach(async ({ page }) => {
  expect(pageErrors.get(page)).toEqual([]);
});

async function expectSettled(page: Page) {
  await expect(page.locator(".dolly-image-clone, .dolly-outgoing, .hero-transition-hidden")).toHaveCount(0);
  await expect(page.locator("html")).not.toHaveClass(/dolly-active/);
  await expect.poll(() => page.evaluate(() => window.lenis?.isStopped)).toBe(false);
  await expect(page.locator("#page-stage")).toHaveCSS("opacity", "1");
}

async function openList(page: Page) {
  await page.goto("/projects/");
  await expect(page.getByRole("heading", { name: "My Projects", exact: true })).toBeVisible();
  await expect.poll(() => page.evaluate(() => !!window.lenis)).toBe(true);
}

test("card image stays visible across the swap and reveals the detail hero", async ({ page }) => {
  await openList(page);
  await page.locator('a[data-project-card][href="/projects/koko"]').click();
  await expect(page).toHaveURL(/\/projects\/koko\/?$/);
  await expect.poll(() => page.evaluate(() => window.transitionSnapshots.at(-1))).toMatchObject({
    clones: 1,
    cloneVisible: true,
    hiddenHero: true,
    dolly: false,
  });
  await expectSettled(page);
  await expect(page.locator("[data-project-hero-image]")).toBeVisible();
  await expect(page.locator("[data-project-hero-image]")).toHaveCSS("opacity", "1");
});

test("home page project cards use the shared image transition", async ({ page }) => {
  await page.goto("/");
  await page.locator("#project").scrollIntoViewIfNeeded();
  const card = page.locator("a[data-project-card]").first();
  const href = await card.getAttribute("href");
  await card.click();
  await expect.poll(() => page.evaluate(() => window.transitionSnapshots.at(-1))).toMatchObject({
    path: href,
    clones: 1,
    cloneVisible: true,
    hiddenHero: true,
    dolly: false,
  });
  await expectSettled(page);
  await expect(page.locator("[data-project-hero-image]")).toBeVisible();
});

test("return links and browser Back/Forward release transitions and scrolling", async ({ page }) => {
  await openList(page);
  await page.locator('a[data-project-card][href="/projects/koko"]').click();
  await expect(page).toHaveURL(/\/projects\/koko\/?$/);
  await expectSettled(page);
  await page.getByRole("link", { name: "All Projects", exact: true }).click();
  await expect(page).toHaveURL(/\/projects\/?$/);
  await expectSettled(page);
  await page.goBack();
  await expect(page).toHaveURL(/\/projects\/koko\/?$/);
  await expectSettled(page);
  await expect(page.locator("[data-project-hero-image]")).toBeVisible();
  await page.goForward();
  await expect(page).toHaveURL(/\/projects\/?$/);
  await expectSettled(page);
  await expect(page.getByRole("heading", { name: "My Projects", exact: true })).toBeVisible();
});

test("a second card click replaces a navigation still loading", async ({ page }) => {
  let release!: () => void;
  const gate = new Promise<void>((resolve) => { release = resolve; });
  let requested!: () => void;
  const requestStarted = new Promise<void>((resolve) => { requested = resolve; });
  await page.route(/\/projects\/koko\/?$/, async (route) => {
    requested();
    await gate;
    await route.continue();
  });
  await openList(page);
  try {
    await page.locator('a[data-project-card][href="/projects/koko"]').click();
    await requestStarted;
    await page.locator('a[data-project-card][href="/projects/bookcube"]').click();
    await expect(page).toHaveURL(/\/projects\/bookcube\/?$/);
    await expectSettled(page);
    await expect(page.locator("[data-project-hero-image]")).toHaveAttribute("alt", "BookCube");
  } finally {
    release();
  }
});

test("navigation during the image zoom removes the clone and restores the hero", async ({ page }) => {
  await openList(page);
  await page.evaluate(() => {
    document.addEventListener("astro:after-swap", () => {
      queueMicrotask(() => {
        if (document.querySelector(".hero-transition-hidden")) {
          document.querySelector<HTMLAnchorElement>('a[href="/projects"]')?.click();
        }
      });
    }, { once: true });
  });
  await page.locator('a[data-project-card][href="/projects/koko"]').click();
  await expect.poll(() => page.evaluate(() => window.transitionSnapshots.length)).toBe(2);
  await expect(page).toHaveURL(/\/projects\/?$/);
  await expectSettled(page);
  await expect(page.getByRole("heading", { name: "My Projects", exact: true })).toBeVisible();
});

test("reduced motion skips custom zooms and leaves all content accessible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openList(page);
  await page.locator('a[data-project-card][href="/projects/koko"]').click();
  await expect(page).toHaveURL(/\/projects\/koko\/?$/);
  await expectSettled(page);
  await expect(page.locator("[data-project-hero-image]")).toBeVisible();
  await page.getByRole("link", { name: "All Projects", exact: true }).click();
  await expect(page).toHaveURL(/\/projects\/?$/);
  await expectSettled(page);
  expect(await page.evaluate(() => window.transitionSnapshots)).toHaveLength(2);
  expect(await page.evaluate(() => window.transitionSnapshots.every((snapshot) =>
    snapshot.clones === 0 && !snapshot.hiddenHero && !snapshot.dolly,
  ))).toBe(true);
});

test("cancelled clicks do not leave a clone on the project list", async ({ page }) => {
  await openList(page);
  await page.locator('a[data-project-card][href="/projects/koko"]').evaluate((card) => {
    card.addEventListener("click", (event) => event.preventDefault(), { once: true });
  });
  await page.locator('a[data-project-card][href="/projects/koko"]').click();
  await expect(page).toHaveURL(/\/projects\/?$/);
  await expectSettled(page);
  expect(await page.evaluate(() => window.transitionSnapshots)).toHaveLength(0);
});

test("opening a card in another tab does not start a transition in the list", async ({ page, context }) => {
  await openList(page);
  const card = page.locator('a[data-project-card][href="/projects/koko"]');
  await card.evaluate((element) => element.setAttribute("target", "_blank"));
  const popupPromise = context.waitForEvent("page");
  await card.click();
  const popup = await popupPromise;
  await expect(popup).toHaveURL(/\/projects\/koko\/?$/);
  await expect(page).toHaveURL(/\/projects\/?$/);
  await expectSettled(page);
  expect(await page.evaluate(() => window.transitionSnapshots)).toHaveLength(0);
  await popup.close();
});
