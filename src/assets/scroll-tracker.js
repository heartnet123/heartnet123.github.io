document.addEventListener('astro:page-load', () => {
  const sections = document.querySelectorAll('section[id]');
  const sidebarContactLink = document.getElementById('sidebar-contact-link');

  const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -70% 0px',
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        // Update sidebar links active state
        const sidebarLinks = document.querySelectorAll("#sidebar nav a, #sidebar-contact-link");
        sidebarLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href && (href === `#${id}` || href === `/#${id}`)) {
            link.classList.add("bg-primary/10", "text-primary");
            link.classList.remove("text-gray-400");
            link.setAttribute("aria-current", "location");
          } else if (href && (href.startsWith("#") || href.includes("/#"))) {
            // Only remove from hash links to avoid clashing with page-based active states
            link.classList.remove("bg-primary/10", "text-primary");
            link.classList.add("text-gray-400");
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  if (sections.length > 0) {
    sections.forEach(section => {
      observer.observe(section);
    });
  }

  // Handle smooth scroll for hash links
  const hashLinks = document.querySelectorAll('a[href^="/#"]');
  hashLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        if (window.lenis) {
          window.lenis.scrollTo(targetElement);
        } else {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
        // Update URL without jump
        window.history.pushState(null, '', href);
      }
    });
  });
});
