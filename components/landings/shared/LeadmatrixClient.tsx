'use client';

import { useEffect } from 'react';

type LeadmatrixClientProps = {
  source: string;
  formId?: string;
  leakRate?: number;
  leakLabel?: string;
};

export default function LeadmatrixClient({
  source,
  formId = 'auditForm',
  leakRate = 6.09,
  leakLabel,
}: LeadmatrixClientProps) {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    (function initTicker() {
      const inner = document.querySelector<HTMLElement>('.ticker-inner');
      if (!inner) return;
      const spans = inner.querySelectorAll('span');
      const n = spans.length;
      if (n < 2) return;
      const half = n / 2;
      const temp = document.createElement('div');
      temp.setAttribute('class', 'ticker-inner');
      temp.style.cssText = 'position:absolute;visibility:hidden;top:0;left:0;pointer-events:none';
      for (let i = 0; i < half; i += 1) temp.appendChild(spans[i].cloneNode(true));
      document.body.appendChild(temp);
      const width = temp.offsetWidth;
      document.body.removeChild(temp);
      inner.style.setProperty('--ticker-dx', `-${width}px`);
    })();

    const heroTimer = window.setTimeout(() => {
      document.querySelector('.hero')?.classList.add('hero-loaded');
      document.querySelector('.conv-card')?.classList.add('msg-visible');
    }, 150);
    cleanups.push(() => window.clearTimeout(heroTimer));

    const nav = document.querySelector('nav');
    if (nav) {
      const onScroll = () => {
        nav.classList.toggle('nav--scrolled', window.scrollY > 80);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', onScroll));
    }

    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    let rafId: number | null = null;
    if (cursor && ring && window.innerWidth > 900) {
      let mx = 0;
      let my = 0;
      let rx = 0;
      let ry = 0;

      const onMouseMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        cursor.style.left = `${mx}px`;
        cursor.style.top = `${my}px`;
      };

      const animateRing = () => {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = `${rx}px`;
        ring.style.top = `${ry}px`;
        rafId = window.requestAnimationFrame(animateRing);
      };

      const hoverTargets = Array.from(document.querySelectorAll('a,button,[class*="btn"]'));
      const onEnter = () => {
        cursor.style.width = '16px';
        cursor.style.height = '16px';
        cursor.style.background = 'transparent';
        cursor.style.border = '1px solid var(--gold)';
      };
      const onLeave = () => {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        cursor.style.background = 'var(--gold)';
        cursor.style.border = 'none';
      };

      document.addEventListener('mousemove', onMouseMove);
      animateRing();
      hoverTargets.forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });

      cleanups.push(() => {
        document.removeEventListener('mousemove', onMouseMove);
        if (rafId) window.cancelAnimationFrame(rafId);
        hoverTargets.forEach((el) => {
          el.removeEventListener('mouseenter', onEnter);
          el.removeEventListener('mouseleave', onLeave);
        });
      });
    }

    let leaked = 0;
    const leakEl = document.getElementById('leakCounter');
    const leakStart = performance.now();
    const easeIn = 2.5;
    const leakTick = (now: number) => {
      if (!leakEl) return;
      const t = (now - leakStart) / 1000;
      const mult = t < easeIn ? 0.15 + 0.85 * (1 - (1 - t / easeIn) ** 2) : 1;
      leaked += (leakRate / 10) * mult;
      leakEl.textContent = `₹${leaked.toFixed(2)}`;
    };
    const leakInterval = window.setInterval(() => leakTick(performance.now()), 100);
    cleanups.push(() => window.clearInterval(leakInterval));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 },
    );
    const fadeNodes = Array.from(document.querySelectorAll('.fade-up'));
    fadeNodes.forEach((el) => obs.observe(el));
    cleanups.push(() => obs.disconnect());

    let dashDone = false;
    const dashObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || dashDone) return;
          dashDone = true;
          const wrap = entry.target;
          wrap.classList.add('dash-visible');
          wrap.querySelectorAll('.bar.bar--initial').forEach((b) => b.classList.remove('bar--initial'));
          wrap.querySelectorAll<HTMLElement>('.pipeline-fill--anim').forEach((f) => {
            const width = `${f.getAttribute('data-width')}%`;
            requestAnimationFrame(() => {
              f.style.width = width;
            });
          });
          wrap.querySelectorAll<HTMLElement>('.dash-metric-val[data-count-to]').forEach((metric) => {
            const to = Number(metric.getAttribute('data-count-to'));
            const prefix = metric.getAttribute('data-prefix') ?? '';
            const suffix = metric.getAttribute('data-suffix') ?? '';
            const duration = 1000;
            const startT = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - startT) / duration, 1);
              const eased = 1 - (1 - t) ** 2;
              const value = to * eased;
              metric.textContent = `${prefix}${Number.isInteger(to) ? Math.round(value) : value.toFixed(1)}${suffix}`;
              if (t < 1) requestAnimationFrame(tick);
              else metric.textContent = `${prefix}${Number.isInteger(to) ? to : to.toFixed(1)}${suffix}`;
            };
            requestAnimationFrame(tick);
          });
          dashObs.disconnect();
        });
      },
      { threshold: 0.25 },
    );
    const dashboardWrap = document.querySelector('.dashboard-wrap');
    if (dashboardWrap) dashObs.observe(dashboardWrap);
    cleanups.push(() => dashObs.disconnect());

    const levelHandlers: Array<{ el: Element; fn: (e: Event) => void }> = [];
    document.querySelectorAll('[data-level]').forEach((el) => {
      const fn = (e: Event) => {
        e.preventDefault();
        const level = el.getAttribute('data-level');
        const select = document.getElementById('levelSelect') as HTMLSelectElement | null;
        if (select && level) select.value = level;
        document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      el.addEventListener('click', fn);
      levelHandlers.push({ el, fn });
    });
    cleanups.push(() => levelHandlers.forEach(({ el, fn }) => el.removeEventListener('click', fn)));

    const anchorHandlers: Array<{ el: Element; fn: (e: Event) => void }> = [];
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const fn = (e: Event) => {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      link.addEventListener('click', fn);
      anchorHandlers.push({ el: link, fn });
    });
    cleanups.push(() => anchorHandlers.forEach(({ el, fn }) => el.removeEventListener('click', fn)));

    const form = document.getElementById(formId) as HTMLFormElement | null;
    const defaultSubmit =
      form?.querySelector<HTMLButtonElement>('button[type="submit"]')?.textContent ?? 'Claim My Free Audit →';

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      if (!form) return;
      const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      const data = new FormData(form);
      const payload = {
        Name: String(data.get('Name') ?? ''),
        'Business Name': String(data.get('Business Name') ?? ''),
        Email: String(data.get('Email') ?? ''),
        'WhatsApp Number': String(data.get('WhatsApp Number') ?? ''),
        'Your Role': String(data.get('Your Role') ?? ''),
        'Business Type': String(data.get('Business Type') ?? ''),
        'Number of Locations': String(data.get('Number of Locations') ?? ''),
        'Monthly Revenue': String(data.get('Monthly Revenue') ?? ''),
        'Which Level Interests You?': String(data.get('Which Level Interests You?') ?? ''),
        Source: source,
      };

      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending…';
      }

      fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (res.ok) {
            if (btn) {
              btn.style.background = 'var(--ivory)';
              btn.textContent = "✓ Audit Request Sent! We'll reach out within 4 hours.";
              btn.disabled = true;
            }
            form.reset();
          } else {
            if (btn) {
              btn.disabled = false;
              btn.textContent = defaultSubmit;
            }
            window.alert('Something went wrong. Please try again or contact us directly.');
          }
        })
        .catch(() => {
          if (btn) {
            btn.disabled = false;
            btn.textContent = defaultSubmit;
          }
          window.alert('Something went wrong. Please try again or contact us directly.');
        });
    };

    if (form) {
      form.addEventListener('submit', handleSubmit);
      cleanups.push(() => form.removeEventListener('submit', handleSubmit));
    }

    if (leakLabel && leakEl) {
      const labelEl = document.querySelector('.leak-sub');
      if (labelEl) labelEl.textContent = leakLabel;
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [source, formId, leakRate, leakLabel]);

  return null;
}
