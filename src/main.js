/* ============================================================
   DRAMIFY STUDIO — main.js
   Vanilla ES Modules · GSAP + ScrollTrigger
   Motion honors prefers-reduced-motion. No window scroll
   listeners for state (ScrollTrigger + IntersectionObserver).
   ============================================================ */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   INTRO LOAD ANIMATION
   ============================================================ */
if (!prefersReduced) {
  gsap.from('.navbar', { y: -20, opacity: 0, duration: 0.7, ease: 'power3.out' });
}
gsap.set('[data-anim]', { opacity: 1, y: 0 });
document.querySelectorAll('.hero-title .line > span').forEach((s) => {
  s.style.transform = 'none';
  s.style.opacity = '1';
});

/* ============================================================
   SCROLL REVEALS (fade-up + gentle blur)
   ============================================================ */
document.querySelectorAll('[data-reveal]').forEach((el) => {
  const isMobile = window.innerWidth <= 768;
  gsap.set(el, { y: 34, filter: isMobile ? 'none' : 'blur(8px)' });
  gsap.to(el, {
    opacity: 1, y: 0, filter: isMobile ? 'none' : 'blur(0px)', duration: 0.85, ease: 'power3.out',
    clearProps: 'transform,filter', // so CSS :hover transforms keep working after reveal
    scrollTrigger: { trigger: el, start: 'top 86%' },
  });
});

/* ============================================================
   PROCESS TIMELINE
   ============================================================ */
const steps = gsap.utils.toArray('[data-step]');
gsap.set(steps, { opacity: 0, y: 30 });
ScrollTrigger.create({ trigger: '.timeline', start: 'top 80%', onEnter: () => gsap.to(steps, { opacity: 1, y: 0, duration: 0.6, stagger: 0.09, ease: 'back.out(1.6)', clearProps: 'transform' }) });

/* All 9 steps sit in one static row (on desktop) or vertical list (on mobile) — the progress line fills as the section
   scrolls through view. */
const progress = document.getElementById('timeline-progress');
if (progress) {
  ScrollTrigger.create({
    trigger: '.timeline',
    start: 'top 78%',
    end: 'bottom 55%',
    scrub: true,
    onUpdate: (self) => {
      const isMobile = window.innerWidth <= 768;
      const pct = (self.progress * 100).toFixed(1) + '%';
      if (isMobile) {
        progress.style.height = pct;
        progress.style.width = '100%';
      } else {
        progress.style.width = pct;
        progress.style.height = '100%';
      }
    }
  });
}

/* Storyboard strip — inline SVG frames, duplicated for a seamless loop */
const stripTrack = document.getElementById('strip-track');
if (stripTrack) {
  const glyphs = [
    '<svg viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="10" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path stroke="currentColor" stroke-width="1.4" d="M4 10h16M9 7v10M15 7v10"/></svg>',
    '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" d="M12 19s-6.5-4-6.5-9C5.5 7.6 7.2 6 9.2 6c1.3 0 2.4.7 2.8 1.7C12.4 6.7 13.5 6 14.8 6c2 0 3.7 1.6 3.7 4 0 5-6.5 9-6.5 9Z"/></svg>',
    '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="14" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" d="M17 11l4-2.5v7L17 13z"/></svg>',
    '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" d="m12 4 2 4.3 4.6.7-3.3 3.3.8 4.7L12 15l-4.1 2 .8-4.7L5.4 9l4.6-.7z"/></svg>',
  ];
  let html = '';
  for (let k = 0; k < 2; k++) for (let i = 0; i < 8; i++) html += `<div class="strip-frame">${glyphs[i % glyphs.length]}</div>`;
  stripTrack.innerHTML = html;
}

/* ============================================================
   NAV — solidify after scroll (IntersectionObserver sentinel)
   ============================================================ */
const navbar = document.getElementById('navbar');
const sentinel = document.createElement('div');
sentinel.setAttribute('aria-hidden', 'true');
sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:56px;pointer-events:none;';
document.body.prepend(sentinel);
new IntersectionObserver(([e]) => navbar.classList.toggle('scrolled', !e.isIntersecting), { threshold: 0 }).observe(sentinel);

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function openAcc(item) { const a = item.querySelector('.acc-a'); item.classList.add('open'); item.querySelector('.acc-q').setAttribute('aria-expanded', 'true'); a.style.maxHeight = a.scrollHeight + 'px'; }
function closeAcc(item) { item.classList.remove('open'); item.querySelector('.acc-q').setAttribute('aria-expanded', 'false'); item.querySelector('.acc-a').style.maxHeight = null; }
document.querySelectorAll('.acc-item').forEach((item, i) => {
  item.querySelector('.acc-q').addEventListener('click', () => {
    const open = item.classList.contains('open');
    document.querySelectorAll('.acc-item.open').forEach((o) => { if (o !== item) closeAcc(o); });
    open ? closeAcc(item) : openAcc(item);
  });
  if (i === 0) openAcc(item);
});
window.addEventListener('load', () => document.querySelectorAll('.acc-item.open .acc-a').forEach((a) => { a.style.maxHeight = a.scrollHeight + 'px'; }));

/* ============================================================
   SERVICE MODAL (focus trap + scroll lock + focus restore)
   ============================================================ */
const ICON = {
  wedding: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" d="M12 20.5S3.5 15.4 3.5 9.6C3.5 6.7 5.7 4.8 8.2 4.8c1.7 0 3.1.9 3.8 2.3.7-1.4 2.1-2.3 3.8-2.3 2.5 0 4.7 1.9 4.7 4.8 0 5.8-8.5 10.9-8.5 10.9Z"/></svg>',
  loved: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" d="M4 6.5h16v11H4z"/><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" d="M4.4 7l7.6 6 7.6-6"/></svg>',
  kids: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="m12 3.5 2.3 4.7 5.2.8-3.75 3.65.9 5.15L12 15.9l-4.65 2.45.9-5.15L4.5 9.6l5.2-.8z"/></svg>',
};
const SERVICE = {
  wedding: { title: 'Для свадьбы', text: 'Короткий мультфильм о вашей любви, знакомстве, предложении или свадьбе. Мы превратим ваш путь вдвоём в тёплую анимационную историю, которую захочется пересматривать.' },
  loved: { title: 'Для близкого человека', text: 'Трогательная история для человека, которому хочется сказать больше, чем словами. Идеальный подарок на день рождения, годовщину или просто так, от сердца.' },
  kids: { title: 'Для детей', text: 'Добрый мультфильм с ребёнком в главной роли, как маленькое персональное приключение. Ваш малыш станет героем собственной волшебной истории.' },
};
const modal = document.getElementById('modal');
const modalIco = document.getElementById('modal-ico');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close');
const modalDialog = modal.querySelector('.modal');
let lastFocused = null;

function openModal(key) {
  const d = SERVICE[key]; if (!d) return;
  modalIco.innerHTML = ICON[key];
  modalTitle.textContent = d.title;
  modalText.textContent = d.text;
  lastFocused = document.activeElement;
  document.body.style.overflow = 'hidden';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  let focused = false;
  const focusIn = () => { if (focused) return; focused = true; modalClose.focus({ preventScroll: true }); };
  modal.addEventListener('transitionend', function onOpen(e) {
    if (e.target === modal && e.propertyName === 'opacity') { modal.removeEventListener('transitionend', onOpen); focusIn(); }
  });
  setTimeout(focusIn, 260);
}
function closeModal() {
  if (!modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
}
modal.addEventListener('keydown', (e) => {
  if (e.key !== 'Tab' || !modal.classList.contains('open')) return;
  const f = modalDialog.querySelectorAll('a[href], button:not([disabled])');
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => openModal(card.dataset.service));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); openModal(card.dataset.service); }
  });
  const core = card.querySelector('.core');
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    core.style.setProperty('--mx', `${e.clientX - r.left}px`);
    core.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

/* ============================================================
   PROMO (after services) → collapses to mini banner
   ============================================================ */
const promo = document.getElementById('promo');
const promoMini = document.getElementById('promo-mini');
let promoShown = false, promoDismissed = false;
function showPromo() { promo.classList.add('show'); promo.setAttribute('aria-hidden', 'false'); promoMini.classList.remove('show'); }
function collapsePromo() { promo.classList.remove('show'); promo.setAttribute('aria-hidden', 'true'); promoMini.classList.add('show'); promoDismissed = true; }
window.addEventListener('load', () => {
  setTimeout(() => {
    if (!promoShown && !promoDismissed) {
      promoShown = true;
      showPromo();
    }
  }, 1000);
});
document.getElementById('promo-close').addEventListener('click', collapsePromo);
promoMini.addEventListener('click', () => { promo.classList.add('show'); promo.setAttribute('aria-hidden', 'false'); promoMini.classList.remove('show'); });

/* ============================================================
   SMOOTH ANCHORS
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (id === '#' || id.length < 2) { e.preventDefault(); return; } // placeholder links: no jump/new tab
    const target = document.querySelector(id);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' }); }
  });
});

/* ============================================================
   RESIZE — keep ScrollTrigger + open accordion heights in sync
   ============================================================ */
let lastWidth = window.innerWidth;
window.addEventListener('resize', () => {
  if (window.innerWidth === lastWidth) return;
  lastWidth = window.innerWidth;

  ScrollTrigger.refresh();
  document.querySelectorAll('.acc-item.open .acc-a').forEach((a) => { a.style.maxHeight = a.scrollHeight + 'px'; });
  const isMobile = window.innerWidth <= 768;
  const progressEl = document.getElementById('timeline-progress');
  if (progressEl) {
    if (isMobile) {
      progressEl.style.width = '100%';
    } else {
      progressEl.style.height = '100%';
    }
  }
});

window.addEventListener('load', () => ScrollTrigger.refresh());
