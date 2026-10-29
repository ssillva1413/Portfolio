
import { useEffect } from 'react';
import styles from './ScrollRevealObserver.module.css';

const animations = {
  'fade-down': styles.fadeDown,
  'fade-up': styles.fadeUp,
  'zoom-in-up': styles.zoomInUp,
};

export default function ScrollRevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');

    if (!elements.length) return;

    elements.forEach((element) => {
      const animation = element.dataset.reveal;

      element.classList.add(styles.reveal);
      element.classList.add(animations[animation] || styles.fadeUp);

      const delay = Number(element.dataset.revealDelay || 0);
      element.style.setProperty('--reveal-delay', `${delay}ms`);

      // Começa oculto até entrar na área visível.
      element.classList.remove(styles.visible);
    });

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Respeita a preferência de acessibilidade do dispositivo.
    if (prefersReducedMotion) {
      elements.forEach((element) => {
        element.classList.add(styles.visible);
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Entrou na tela: aparece.
            entry.target.classList.add(styles.visible);
          } else {
            // Saiu da tela: desaparece.
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
