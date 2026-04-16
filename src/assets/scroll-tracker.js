document.addEventListener('astro:page-load', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.tabs a.tab[href^="#"]');

  // Cleanup: Disconnect previous observer to prevent memory leaks
  if (window._sectionObserver) {
    window._sectionObserver.disconnect();
    window._sectionObserver = null;
  }

  // Cleanup: Remove previous click handlers
  if (window._navClickHandlers) {
    window._navClickHandlers.forEach(({ element, handler }) => {
      element.removeEventListener('click', handler);
    });
    window._navClickHandlers = [];
  }

  const observerOptions = {
    root: null,
    rootMargin: '-64px 0px 0px 0px',
    threshold: 0
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      // Use CSS.escape to handle special characters in IDs safely
      const safeId = CSS.escape(id);
      const navLink = document.querySelector(`.tabs a.tab[href="#${safeId}"]`);

      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('tab-active');
        });
        if (navLink) {
          navLink.classList.add('tab-active');
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  window._sectionObserver = observer;

  if (sections.length > 0) {
    sections.forEach(section => {
      observer.observe(section);
    });
  }

  // Store handlers for cleanup
  window._navClickHandlers = [];

  navLinks.forEach(anchor => {
    const clickHandler = function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        if (window.lenis) {
          window.lenis.scrollTo(targetElement);
        } else {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
    anchor.addEventListener('click', clickHandler);
    window._navClickHandlers.push({ element: anchor, handler: clickHandler });
  });
});
