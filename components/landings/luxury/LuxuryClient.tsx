'use client';

import { useEffect } from 'react';
import Script from 'next/script';

type GsapTimeline = {
  to: (target: unknown, vars: Record<string, unknown>, position?: number | string) => GsapTimeline;
  from: (target: unknown, vars: Record<string, unknown>, position?: number | string) => GsapTimeline;
  fromTo: (
    target: unknown,
    fromVars: Record<string, unknown>,
    toVars: Record<string, unknown>,
    position?: number | string
  ) => GsapTimeline;
};

type GsapLike = {
  set: (target: unknown, vars: Record<string, unknown>) => void;
  to: (target: unknown, vars: Record<string, unknown>) => void;
  from: (target: unknown, vars: Record<string, unknown>) => void;
  fromTo: (target: unknown, fromVars: Record<string, unknown>, toVars: Record<string, unknown>) => void;
  timeline: (vars?: Record<string, unknown>) => GsapTimeline;
  utils: { toArray: (selector: string) => Element[] };
  registerPlugin?: (...plugins: unknown[]) => void;
};

type ScrollTriggerLike = {
  create: (vars: Record<string, unknown>) => void;
  refresh: () => void;
};

declare global {
  interface Window {
    gsap?: GsapLike;
    ScrollTrigger?: ScrollTriggerLike;
  }
}

function formatInr(n: number) {
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)}L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(1)}K`;
  return `₹${Math.round(n)}`;
}

export default function LuxuryClient() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    let leakTimer: number | null = null;
    let rafId = 0;
    let gsapWaitTimer = 0;

    const initThemeToggle = () => {
      const frame = document.querySelector('.landing-frame');
      const toggleBtn = document.getElementById('themeToggle');
      if (!frame || !toggleBtn) return;

      if (localStorage.getItem('theme') === 'light') {
        frame.classList.add('light-mode');
        toggleBtn.textContent = '🌙';
      }

      const onClick = () => {
        frame.classList.toggle('light-mode');
        if (frame.classList.contains('light-mode')) {
          localStorage.setItem('theme', 'light');
          toggleBtn.textContent = '🌙';
        } else {
          localStorage.setItem('theme', 'dark');
          toggleBtn.textContent = '☀️';
        }
      };

      toggleBtn.addEventListener('click', onClick);
      cleanups.push(() => toggleBtn.removeEventListener('click', onClick));
    };

    const initCursor = () => {
      const cursor = document.getElementById('cursor');
      const ring = document.getElementById('cursorRing');
      if (!cursor || !ring) return;

      let cx = 0;
      let cy = 0;
      let rx = 0;
      let ry = 0;

      const onMove = (e: MouseEvent) => {
        cx = e.clientX;
        cy = e.clientY;
      };

      const onOver = (e: MouseEvent) => {
        if ((e.target as HTMLElement | null)?.closest('a, button')) {
          document.querySelector('.landing-frame')?.classList.add('cursor-hover');
        }
      };

      const onOut = (e: MouseEvent) => {
        const related = e.relatedTarget as HTMLElement | null;
        if (!related || !related.closest('a, button')) {
          document.querySelector('.landing-frame')?.classList.remove('cursor-hover');
        }
      };

      const loop = () => {
        rx += (cx - rx) * 0.08;
        ry += (cy - ry) * 0.08;
        cursor.style.left = `${cx}px`;
        cursor.style.top = `${cy}px`;
        ring.style.left = `${rx}px`;
        ring.style.top = `${ry}px`;
        rafId = requestAnimationFrame(loop);
      };

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseover', onOver);
      document.addEventListener('mouseout', onOut);
      rafId = requestAnimationFrame(loop);

      cleanups.push(() => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseover', onOver);
        document.removeEventListener('mouseout', onOut);
      });
    };

    const toggleFaq = (btn: HTMLElement) => {
      const gsap = window.gsap;
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      const answer = item.querySelector('.faq-a') as HTMLElement | null;
      const icon = item.querySelector('.faq-icon');

      document.querySelectorAll('.faq-item.open').forEach((el) => {
        if (el !== item) {
          const otherAnswer = el.querySelector('.faq-a') as HTMLElement | null;
          const otherIcon = el.querySelector('.faq-icon');
          if (otherAnswer && gsap) {
            gsap.to(otherAnswer, {
              maxHeight: 0,
              paddingBottom: 0,
              duration: 0.3,
              ease: 'power2.in',
              onComplete: () => el.classList.remove('open'),
            });
            if (otherIcon) gsap.to(otherIcon, { rotation: 0, duration: 0.25, ease: 'power2.out' });
          } else {
            el.classList.remove('open');
          }
        }
      });

      if (!isOpen) {
        item.classList.add('open');
        if (icon && gsap) gsap.to(icon, { rotation: 45, duration: 0.25, ease: 'power2.out' });
        if (answer && gsap) {
          gsap.fromTo(
            answer,
            { maxHeight: 0, paddingBottom: 0 },
            { maxHeight: `${answer.scrollHeight}px`, paddingBottom: 'clamp(16px, 2vw, 24px)', duration: 0.4, ease: 'power2.out' }
          );
        }
      } else {
        item.classList.remove('open');
        if (icon && gsap) gsap.to(icon, { rotation: 0, duration: 0.25, ease: 'power2.out' });
        if (answer && gsap) {
          gsap.to(answer, { maxHeight: 0, paddingBottom: 0, duration: 0.3, ease: 'power2.in' });
        }
      }
    };

    const initFaq = () => {
      const handlers: Array<{ el: Element; fn: () => void }> = [];
      document.querySelectorAll('.faq-q').forEach((btn) => {
        const fn = () => toggleFaq(btn as HTMLElement);
        btn.addEventListener('click', fn);
        handlers.push({ el: btn, fn });
      });
      cleanups.push(() => handlers.forEach(({ el, fn }) => el.removeEventListener('click', fn)));
    };

    const handleFormSubmit = async (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
      const btnSpan = btn?.querySelector('span');
      const formBody = document.getElementById('formBody');
      const successMsg = document.getElementById('successMsg');
      const data = new FormData(form);

      const payload = {
        Name: String(data.get('Name') || ''),
        'Business Name': String(data.get('Business Name') || ''),
        Email: String(data.get('Email') || ''),
        'WhatsApp Number': String(data.get('WhatsApp Number') || ''),
        'Your Role': String(data.get('Your Role') || ''),
        'Business Type': String(data.get('Business Type') || ''),
        'Number of Locations': String(data.get('Number of Locations') || ''),
        'Monthly Revenue': String(data.get('Monthly Revenue') || ''),
        'Which Level Interests You?': String(data.get('Which Level Interests You?') || ''),
        Source: 'luxury',
      };

      if (btn) {
        btn.disabled = true;
        if (btnSpan) btnSpan.textContent = 'Sending…';
      }

      try {
        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error('submit failed');

        if (btn) {
          btn.style.background = '#22c55e';
          if (btnSpan) btnSpan.textContent = "✓ Audit Request Sent! We'll call you within 4 hours.";
          btn.disabled = true;
        }

        setTimeout(() => {
          if (formBody) formBody.style.display = 'none';
          if (successMsg) {
            successMsg.classList.add('show');
            if (window.gsap) {
              window.gsap.from(successMsg, { opacity: 0, scale: 0.9, duration: 0.5, delay: 0.1, ease: 'expo.out' });
            }
          }
        }, 300);

        form.reset();
      } catch {
        if (btn) {
          btn.disabled = false;
          if (btnSpan) btnSpan.textContent = 'Show Me My Revenue Leak →';
        }
        alert('Something went wrong. Please try again or contact us directly.');
      }
    };

    const initForm = () => {
      const form = document.getElementById('leadForm') as HTMLFormElement | null;
      if (!form) return;
      const fn = (e: Event) => {
        void handleFormSubmit(e);
      };
      form.addEventListener('submit', fn);
      cleanups.push(() => form.removeEventListener('submit', fn));
    };

    const initLeakCounter = () => {
      const leakEl = document.getElementById('leakAmount');
      if (!leakEl) return;
      let leakTotal = 0;
      const leakPerSecond = 6.09;
      leakTimer = window.setInterval(() => {
        leakTotal += leakPerSecond * 0.1;
        leakEl.textContent = formatInr(leakTotal);
      }, 100);
    };

    const setVisibleFallback = () => {
      document
        .querySelectorAll('.reveal, .hero-issue, .hero-headline, .hero-headline .line, .hero-sub, .hero-cta-block, .stat-pill, .enquiry-thread')
        .forEach((el) => {
          const htmlEl = el as HTMLElement;
          if (window.getComputedStyle(htmlEl).opacity === '0') {
            htmlEl.style.opacity = '1';
            htmlEl.style.transform = 'none';
          }
        });
      const comparisonVisual = document.querySelector('.comparison-visual') as HTMLElement | null;
      if (comparisonVisual && window.getComputedStyle(comparisonVisual).opacity === '0') {
        comparisonVisual.style.opacity = '1';
        comparisonVisual.style.transform = 'none';
        comparisonVisual.classList.add('visible');
      }
    };

    const initAnimations = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      if (!gsap || !ScrollTrigger) {
        setTimeout(setVisibleFallback, 100);
        return;
      }

      try {
        gsap.registerPlugin?.(ScrollTrigger);
      } catch {
        setTimeout(setVisibleFallback, 100);
        return;
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        gsap.set('.reveal', { opacity: 1, y: 0 });
        gsap.set('.hero-issue, .hero-headline, .hero-headline .line, .hero-sub, .hero-cta-block, .hero-stats, .enquiry-thread', {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        });
        return;
      }

      gsap.set('.reveal', { opacity: 0, y: 24, force3D: true });
      gsap.set('.hero-issue', { opacity: 0, x: -30, force3D: true });
      gsap.set('.hero-headline .line', { opacity: 0, y: 24, force3D: true });
      gsap.set('.hero-sub', { opacity: 0, y: 20, force3D: true });
      gsap.set('.hero-cta-block', { opacity: 0, y: 20, force3D: true });
      gsap.set('.stat-pill', { opacity: 0, y: 15, scale: 0.92, force3D: true });
      gsap.set('.enquiry-thread', { opacity: 0, y: 20, scale: 0.96, force3D: true });
      gsap.set('.comparison-visual', { opacity: 0, y: 60, scale: 0.88, force3D: true });

      const heroTimeline = gsap.timeline({ delay: 0.3, defaults: { force3D: true, immediateRender: false } });
      heroTimeline
        .to('.hero-issue', { opacity: 1, x: 0, duration: 0.8, ease: 'expo.out' }, 0)
        .to('.hero-headline .line', { opacity: 1, y: 0, duration: 0.7, ease: 'expo.out', stagger: 0.08 }, 0.2)
        .to('.hero-sub', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.5)
        .to('.hero-cta-block', { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, 0.7)
        .to('.enquiry-thread', { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }, 0.4);

      gsap.utils.toArray('.stat-pill').forEach((pill, index) => {
        gsap.to(pill, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.2)',
          delay: 1 + index * 0.15,
          force3D: true,
          immediateRender: false,
        });
      });

      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'expo.out',
          force3D: true,
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        });
      });

      const comparisonVisual = document.querySelector('.comparison-visual');
      if (comparisonVisual) {
        gsap.to(comparisonVisual, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: 'power3.out',
          force3D: true,
          immediateRender: false,
          scrollTrigger: {
            trigger: comparisonVisual,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
          onComplete: () => comparisonVisual.classList.add('visible'),
        });
      }

      ScrollTrigger.refresh();
      setTimeout(setVisibleFallback, 3500);
    };

    const waitForGsap = () => {
      if (window.gsap && window.ScrollTrigger) {
        initAnimations();
      } else {
        gsapWaitTimer = window.setTimeout(waitForGsap, 50);
      }
    };

    initThemeToggle();
    initCursor();
    initFaq();
    initForm();
    initLeakCounter();
    waitForGsap();

    return () => {
      cleanups.forEach((fn) => fn());
      if (leakTimer) window.clearInterval(leakTimer);
      if (rafId) cancelAnimationFrame(rafId);
      if (gsapWaitTimer) window.clearTimeout(gsapWaitTimer);
    };
  }, []);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/TextPlugin.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollToPlugin.min.js" strategy="afterInteractive" />
    </>
  );
}
