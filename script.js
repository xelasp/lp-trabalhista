const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  }));

  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('in'), (i % 4) * 70);
          io.unobserve(e.target);
        }
      });
    }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.classList.add('in'));
  }

  // Smooth-scroll for every in-page anchor (works with the sticky-nav offset via scroll-margin-top)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (ev) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      ev.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});
      history.replaceState(null, '', id);
    });
  });

  // Scroll-spy: highlight the menu item of the section currently on screen
  const navMap = {};
  document.querySelectorAll('.nav-links a').forEach(a => {
    navMap[a.getAttribute('href').slice(1)] = a;
  });
  const spyTargets = document.querySelectorAll('#areas,#processo,#sobre,#faq,#contato');
  if ('IntersectionObserver' in window && spyTargets.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && navMap[e.target.id]) {
          Object.values(navMap).forEach(a => a.classList.remove('active'));
          navMap[e.target.id].classList.add('active');
        }
      });
    }, {rootMargin: '-45% 0px -50% 0px', threshold: 0});
    spyTargets.forEach(s => spy.observe(s));
  }

  document.getElementById('ano').textContent = new Date().getFullYear();
