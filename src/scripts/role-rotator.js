// Rotating roles: hero line and sidebar switch together every 3 seconds
(function () {
  const rotators = [
    { root: '.role-rotator', track: '.role-track', fit: 'width' },
    { root: '.side-rotator', track: '.side-track', fit: 'height' }
  ].map((cfg) => {
    const root = document.querySelector(cfg.root);
    const track = root && root.querySelector(cfg.track);
    return root ? { root, track, items: Array.from(track.children), fit: cfg.fit } : null;
  }).filter(Boolean);

  if (!rotators.length) return;

  let index = 0;

  const apply = () => {
    rotators.forEach((r) => {
      const item = r.items[index];
      r.track.style.transform = 'translateX(' + (-item.offsetLeft) + 'px)';
      if (r.fit === 'width') r.root.style.width = item.offsetWidth + 'px';
      if (r.fit === 'height') r.root.style.height = item.offsetHeight + 'px';
      r.items.forEach((el, n) => {
        el.classList.toggle('is-current', n === index);
        el.setAttribute('aria-hidden', n === index ? 'false' : 'true');
      });
    });
  };

  // Size to the current role once the font is ready, and keep it right on resize
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(apply);
  window.addEventListener('resize', apply);
  apply();

  setInterval(() => {
    index = (index + 1) % rotators[0].items.length;
    apply();
  }, 3000);
})();