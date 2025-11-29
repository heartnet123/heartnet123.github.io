document.addEventListener('astro:page-load', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.tabs a.tab[href^="#"]');

  const observerOptions = {
    root: null,
    rootMargin: '-64px 0px 0px 0px',
    threshold: 0
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.tabs a.tab[href="#${id}"]`);

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

  if (sections.length > 0) {
    sections.forEach(section => {
      observer.observe(section);
    });
  }

  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
