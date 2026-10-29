import { useEffect, useRef } from 'react';
import styles from './ParticlesBackground.module.css';

export default function ParticlesBackground({ count = 130 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.parentElement;
    const context = canvas?.getContext('2d');

    if (!canvas || !section || !context) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let animationId = 0;
    let particles = [];

    const pointer = { x: -1000, y: -1000 };
    const linkDistance = 150;
    const repulseDistance = 200;

    function createParticle(x, y) {
      return {
        x: x ?? Math.random() * width,
        y: y ?? Math.random() * height,
       vx: (Math.random() - 0.5) * 2.0,
       vy: (Math.random() - 0.5) * 2.0,
        radius: Math.random() * 2.8 + 2.0,
       opacity: Math.random() * 0.2 + 0.6,
      };
    }

    function resize() {
      const rect = section.getBoundingClientRect();
      const oldWidth = width;
      const oldHeight = height;

      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);

      context.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
      );

      if (!particles.length) {
        particles = Array.from(
          { length: count },
          () => createParticle()
        );
      } else if (oldWidth && oldHeight) {
        particles.forEach((particle) => {
          particle.x = (particle.x / oldWidth) * width;
          particle.y = (particle.y / oldHeight) * height;
        });
      }

      if (reducedMotion) draw(false);
    }

    function draw(animate = true) {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        if (!animate) return;

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -5) particle.x = width + 5;
        if (particle.x > width + 5) particle.x = -5;
        if (particle.y < -5) particle.y = height + 5;
        if (particle.y > height + 5) particle.y = -5;

        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 0 && distance < repulseDistance) {
          const force = ((repulseDistance - distance) / repulseDistance) * 13;

          particle.x += (dx / distance) * force;
          particle.y += (dy / distance) * force;
        }
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const first = particles[i];
          const second = particles[j];
          const distance = Math.hypot(
            first.x - second.x,
            first.y - second.y
          );

          if (distance < linkDistance) {
            const opacity = (1 - distance / linkDistance) * 0.55;

            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);
            context.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );
        context.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        context.fill();
      });
    }

    function animate() {
      draw(true);
      animationId = window.requestAnimationFrame(animate);
    }

    function handlePointerMove(event) {
      const rect = section.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    }

    function handlePointerLeave() {
      pointer.x = -1000;
      pointer.y = -1000;
    }

    function handleClick(event) {
      if (
        event.target instanceof Element &&
        event.target.closest('a, button, input, textarea, select')
      ) {
        return;
      }

      if (pointer.x < 0 || pointer.x > width) return;

      for (let i = 0; i < 4; i += 1) {
        particles.push(
          createParticle(
            pointer.x + (Math.random() - 0.5) * 24,
            pointer.y + (Math.random() - 0.5) * 24
          )
        );
      }

      if (reducedMotion) draw(false);
    }

    resize();

    let resizeObserver;

    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(section);
    } else {
      window.addEventListener('resize', resize);
    }

    if (!reducedMotion) {
      section.addEventListener('pointermove', handlePointerMove);
      section.addEventListener('pointerleave', handlePointerLeave);
      section.addEventListener('click', handleClick);
      animate();
    }

    return () => {
      window.cancelAnimationFrame(animationId);
      resizeObserver?.disconnect();
      window.removeEventListener('resize', resize);
      section.removeEventListener('pointermove', handlePointerMove);
      section.removeEventListener('pointerleave', handlePointerLeave);
      section.removeEventListener('click', handleClick);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      aria-hidden="true"
    />
  );
}