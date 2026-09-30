(function () {
  const identity = document.querySelector('.scroll-identity');
  const panel = document.querySelector('.featured');
  if (!identity) return;

  // A few pixels of scroll swaps the headline for the sidebar + works.
  // Small gap between on/off so it doesn't flicker at the threshold.
  const updateScrollState = () => {
    const y = window.scrollY;
    const wasScrolled = document.body.classList.contains('scrolled');
    const isScrolled = wasScrolled ? y > 12 : y > 40;

    document.body.classList.toggle('scrolled', isScrolled);
    identity.classList.toggle('is-visible', isScrolled);

    // Back on the hero: start the works panel from the top next time
    if (wasScrolled && !isScrolled && panel) panel.scrollTop = 0;
  };

  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });
  window.addEventListener('resize', updateScrollState);

  // Coming back from a work page ("Back" or the works link): land straight on the works
  if (location.hash === '#works') {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' });
  }

  // The name is "home": back to the headline
  const home = document.querySelector('.identity-name');
  if (home) {
    home.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();