document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.main-nav');
  let lastScroll = window.scrollY;
  let scrollDirection = 'up';
  let lastScrollTop = 0;
  const scrollThreshold = 100;

  function handleScroll() {
    const currentScroll = window.scrollY;
    
    // Determine scroll direction
    if (currentScroll > lastScrollTop) {
      scrollDirection = 'down';
    } else {
      scrollDirection = 'up';
    }
    lastScrollTop = currentScroll;

    // Handle navbar visibility
    if (currentScroll < scrollThreshold) {
      // Always show at top
      nav.classList.remove('nav-hidden');
    } else if (scrollDirection === 'down' && currentScroll > lastScroll) {
      // Hide when scrolling down
      nav.classList.add('nav-hidden');
    } else if (scrollDirection === 'up' && currentScroll < lastScroll) {
      // Show when scrolling up
      nav.classList.remove('nav-hidden');
    }

    lastScroll = currentScroll;
  }

  // Throttle scroll events
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}); 