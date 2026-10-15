"use client";

import { useEffect } from "react";

const selectors = {
  devfolio:
    ".dev-section-head, .dev-project, .dev-experience article, .dev-about > *, .dev-contact > *",
  forma:
    ".forma-work article, .forma-cases article, .forma-process > *, .forma-process article, .forma-about > *, .forma-clients, .forma-contact > *",
  elevate:
    ".elevate-metrics article, .elevate-heading > *, .elevate-service-grid article, .elevate-work article, .elevate-career > *, .elevate-career article, .elevate-testimonials blockquote, .elevate-about > *, .elevate-contact > *",
} as const;

type MotionTheme = keyof typeof selectors;

export function MotionController({ theme }: { theme: MotionTheme }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) return;

    const root = document.querySelector<HTMLElement>(`[data-motion-root="${theme}"]`);

    if (!root) return;

    document.documentElement.classList.add("motion-enabled");

    const targets = Array.from(root.querySelectorAll<HTMLElement>(selectors[theme]));

    targets.forEach((target, index) => {
      target.classList.add("motion-target");
      target.style.setProperty("--motion-delay", `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    targets.forEach((target) => observer.observe(target));

    let animationFrame = 0;

    const updateScrollMotion = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const progress = Math.min(window.scrollY / scrollRange, 1);

        root.style.setProperty("--motion-progress", progress.toString());
        root.style.setProperty("--motion-drift", `${progress * 14}px`);
        animationFrame = 0;
      });
    };

    const updatePointerMotion = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      root.style.setProperty("--pointer-shift-x", `${x * 8}px`);
      root.style.setProperty("--pointer-shift-y", `${y * 8}px`);
    };

    updateScrollMotion();
    window.addEventListener("scroll", updateScrollMotion, { passive: true });
    window.addEventListener("pointermove", updatePointerMotion, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollMotion);
      window.removeEventListener("pointermove", updatePointerMotion);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [theme]);

  return <div className={`motion-progress motion-progress-${theme}`} aria-hidden="true" />;
}
