document.addEventListener('astro:page-load', () => {
  console.log('Scroll tracker script loaded.');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.tabs a.tab[href^="#"]');
  console.log('Sections found:', sections.length);
  console.log('Nav links found:', navLinks.length);

  const observerOptions = {
    root: null,
    rootMargin: '-64px 0px 0px 0px',
    threshold: 0
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.tabs a.tab[href="#${id}"]`);
      console.log(`Section: ${id}, isIntersecting: ${entry.isIntersecting}`);

      if (entry.isIntersecting) {
        console.log(`Activating tab for section: ${id}`);
        navLinks.forEach(link => {
          link.classList.remove('tab-active');
        });
        if (navLink) {
          navLink.classList.add('tab-active');
        } else {
          console.error(`No navLink found for section ID: ${id}`);
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  if (sections.length > 0) {
    sections.forEach(section => {
      observer.observe(section);
    });
  } else {
    console.error('No sections found.');
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
