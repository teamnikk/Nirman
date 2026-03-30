/**
 * ============================================================
 *  ESTRUCTURA 2K26 — Main JavaScript
 *  All interactivity, rendering, and animations
 * ============================================================
 */

/* Wait for DOM + config to load */
document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. LOADER ─────────────────────────────────────────── */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 1200);
  });
  document.body.style.overflow = 'hidden';


  /* ── 2. THEME TOGGLE ───────────────────────────────────── */
  const themeBtn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('estructura-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('estructura-theme', next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }


  /* ── 3. NAVBAR ─────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('btt').classList.toggle('visible', window.scrollY > 400);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });


  /* ── 4. BACK TO TOP ────────────────────────────────────── */
  document.getElementById('btt').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ── 5. RENDER CONTENT FROM CONFIG ────────────────────── */
  renderHero();
  renderAbout();
  renderEvents();
  renderSchedule();
  renderGallery();
  renderAnnouncement();
  renderCoordinators();
  renderContact();
  renderFooter();


  /* ── 6. AOS (Animate on Scroll) ────────────────────────── */
  initAOS();


  /* ── 7. PARTICLE CANVAS HERO BG ────────────────────────── */
  initParticles();


  /* ── 8. COUNTERS ────────────────────────────────────────── */
  initCounters();

});


/* ================================================================
   RENDER FUNCTIONS
   ================================================================ */

function renderHero() {
  const h = SITE_CONFIG.hero;
  document.getElementById('hero-heading').textContent = h.heading;
  document.getElementById('hero-year').textContent = SITE_CONFIG.festName.split(' ')[1] || '2K26';
  document.getElementById('hero-desc').textContent = h.description;
  document.getElementById('hero-cta').textContent = h.ctaText;
  document.getElementById('hero-cta').href = h.ctaLink;
  document.getElementById('hero-date').textContent = SITE_CONFIG.date;
  document.getElementById('hero-venue').textContent = SITE_CONFIG.venue;
  document.getElementById('hero-deadline').textContent = `Register by ${SITE_CONFIG.registrationDeadline}`;
}

function renderAbout() {
  const a = SITE_CONFIG.about;
  document.getElementById('about-body').innerHTML = a.body;
  const container = document.getElementById('about-highlights');
  container.innerHTML = a.highlights.map(h => `
    <div class="highlight-card" data-aos>
      <div class="icon">${h.icon}</div>
      <div class="label">${h.label}</div>
    </div>
  `).join('');
}

function renderEvents() {
  const grid = document.getElementById('events-grid');
  grid.innerHTML = SITE_CONFIG.events.map((ev, i) => `
    <div class="event-card" style="--card-color:${ev.color}" data-aos data-delay="${i * 80}">
      <div class="event-icon">${ev.icon}</div>
      <span class="event-tag">${ev.tag}</span>
      <h3 class="event-name">${ev.name}</h3>
      <div class="event-time">⏰ ${ev.time}</div>
      <p class="event-desc">${ev.description}</p>
    </div>
  `).join('');
}

function renderSchedule() {
  const tl = document.getElementById('timeline');
  tl.innerHTML = SITE_CONFIG.schedule.map((item, i) => `
    <div class="tl-item" data-aos data-delay="${i * 80}">
      <div class="tl-time">${item.time}</div>
      <div class="tl-dot"></div>
      <div class="tl-content">
        <div class="tl-icon">${item.icon}</div>
        <div class="tl-title">${item.title}</div>
        <div class="tl-place">${item.desc}</div>
      </div>
    </div>
  `).join('');
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  document.getElementById('gallery-sub').textContent = SITE_CONFIG.gallery.subtext;
  grid.innerHTML = SITE_CONFIG.gallery.images.map((img, i) => `
    <div class="gallery-item" data-aos="zoom-in" data-delay="${i * 60}">
      <img 
        src="${img.src}" 
        alt="${img.caption}" 
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="gallery-placeholder" style="display:none">
        <div class="gallery-placeholder-icon">📷</div>
        <span>ADD IMAGE</span>
        <span style="font-size:0.55rem; opacity:0.6">${img.src}</span>
      </div>
      <div class="gallery-caption">${img.caption}</div>
    </div>
  `).join('');

  // Try to show all placeholders if images fail immediately
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('load', () => {
      img.style.display = 'block';
      img.nextElementSibling.style.display = 'none';
    });
  });
}

function renderAnnouncement() {
  const a = SITE_CONFIG.announcement;
  document.getElementById('announcement-heading').textContent = a.heading;
  document.getElementById('announcement-body').innerHTML = a.body;
  document.getElementById('ann-deadline').textContent = `Last Date: ${SITE_CONFIG.registrationDeadline}`;
  document.getElementById('ann-cta').href = SITE_CONFIG.registrationLink;
}

function renderCoordinators() {
  const grid = document.getElementById('team-grid');
  grid.innerHTML = SITE_CONFIG.coordinators.map(c => `
    <div class="coord-card" style="--coord-color:${c.color}" data-aos>
      <div class="coord-avatar">${c.avatar}</div>
      <div class="coord-name">${c.name}</div>
      <div class="coord-role">${c.role}</div>
      <a href="tel:+91${c.phone}" class="coord-phone">📞 ${c.phone}</a>
    </div>
  `).join('');
}

function renderContact() {
  document.getElementById('contact-date').textContent = SITE_CONFIG.date;
  document.getElementById('contact-venue').textContent = SITE_CONFIG.venue;
  document.getElementById('contact-uni').textContent = SITE_CONFIG.university;
  document.getElementById('contact-email').textContent = SITE_CONFIG.footer.email;
  document.getElementById('contact-email').href = `mailto:${SITE_CONFIG.footer.email}`;
  document.getElementById('contact-insta').href = SITE_CONFIG.footer.instagram;
  document.getElementById('contact-reg').href = SITE_CONFIG.registrationLink;
}

function renderFooter() {
  document.getElementById('footer-credit').textContent = SITE_CONFIG.footer.credit;
  document.getElementById('footer-credit').href = SITE_CONFIG.footer.creditLink;
  document.getElementById('footer-logo').textContent = SITE_CONFIG.festName;
  document.getElementById('footer-society').textContent = `${SITE_CONFIG.society} · ${SITE_CONFIG.university}`;
  document.getElementById('footer-year').textContent = new Date().getFullYear();
}


/* ================================================================
   AOS — Animate on Scroll (custom lightweight)
   ================================================================ */
function initAOS() {
  const items = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || 0;
        setTimeout(() => entry.target.classList.add('aos-animate'), Number(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  items.forEach(el => observer.observe(el));
}


/* ================================================================
   PARTICLE CANVAS — Blueprint engineering feel
   ================================================================ */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); createParticles(); });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 1.5 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245, 158, 11, ${this.alpha})`;
      ctx.fill();
    }
  }

  function createParticles() {
    particles = Array.from({ length: 80 }, () => new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }

  createParticles();
  animate();
}


/* ================================================================
   ANIMATED COUNTERS
   ================================================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current >= target) clearInterval(timer);
      }, 25);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}
