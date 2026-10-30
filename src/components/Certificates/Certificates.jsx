
import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import styles from './Certificates.module.css';

const certificates = [
  {
    src: '/images/img-certificates/flides_educations.jpg',
    alt: 'Certificado de Analista de Suporte',
  },
  {
    src: '/images/img-certificates/certificado_tiberio.jpg',
    alt: 'Certificado Start Informática',
  },
  {
    src: '/images/img-certificates/Pensamento Computacional.jpg',
    alt: 'Certificado de Introdução à Programação e Pensamento Computacional',
  },
  {
    src: '/images/img-certificates/princípios de desenvolvimento de software_page-0001.jpg',
    alt: 'Certificado de Princípios de Desenvolvimento de Software',
  },
  {
    src: '/images/img-certificates/ifce.jpg',
    alt: 'Certificado de Formação Inicial e Continuada de Introdução à Programação do IFCE',
  },
  {
    src: '/images/img-certificates/Introdução_ao_Linux.jpg',
    alt: 'Certificado de Introdução ao Linux',
  },
  {
    src: '/images/img-certificates/Certificado_IniciandocomASP.NETCore.jpg',
    alt: 'Certificado de Iniciando com ASP.NET Core',
  },
  {
    src: '/images/img-certificates/certificado1.jpg',
    alt: 'Certificado de Fundamentos de TI: Hardware e Software',
  },
];

function getPageStep(track) {
  const gap =
    parseFloat(window.getComputedStyle(track).columnGap) || 0;

  return track.clientWidth + gap;
}

export default function Certificates() {
  const trackRef = useRef(null);

  const dragRef = useRef({
    active: false,
    startX: 0,
    startIndex: 0,
    startScrollLeft: 0,
    step: 0,
    didDrag: false,
  });

  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    function updatePagination() {
      const step = getPageStep(track);
      const maxScroll = Math.max(
        0,
        track.scrollWidth - track.clientWidth
      );

      const pages = Math.max(1, Math.round(maxScroll / step) + 1);

      setPageCount(pages);
      setActivePage(
        Math.min(pages - 1, Math.round(track.scrollLeft / step))
      );
    }

    function updateActivePage() {
      const step = getPageStep(track);
      const page = Math.round(track.scrollLeft / step);

      setActivePage(
        Math.max(0, Math.min(pageCount - 1, page))
      );
    }

    updatePagination();

    track.addEventListener('scroll', updateActivePage, {
      passive: true,
    });

    window.addEventListener('resize', updatePagination);

    return () => {
      track.removeEventListener('scroll', updateActivePage);
      window.removeEventListener('resize', updatePagination);
    };
  }, [pageCount]);

  function scrollToPage(index) {
    const track = trackRef.current;

    if (!track) return;

    const step = getPageStep(track);
    const maxScroll = track.scrollWidth - track.clientWidth;
    const targetLeft = Math.min(index * step, maxScroll);

    track.scrollTo({
      left: targetLeft,
      behavior: 'smooth',
    });
  }

  function handlePointerDown(event) {
    // Não inicia o arraste quando o usuário clica em um link.
    if (event.target.closest('a, button')) return;

    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }

    const track = trackRef.current;

    if (!track) return;

    const step = getPageStep(track);

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startIndex: Math.round(track.scrollLeft / step),
      startScrollLeft: track.scrollLeft,
      step,
      didDrag: false,
    };

    track.classList.add(styles.dragging);
    track.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    const drag = dragRef.current;
    const track = trackRef.current;

    if (!drag.active || !track) return;

    const delta = event.clientX - drag.startX;

    if (Math.abs(delta) > 5) {
      drag.didDrag = true;
    }

    if (!drag.didDrag) return;

    const limitedDelta = Math.max(
      -drag.step,
      Math.min(drag.step, delta)
    );

    track.scrollLeft = drag.startScrollLeft - limitedDelta;
  }

  function handlePointerEnd(event) {
    const drag = dragRef.current;
    const track = trackRef.current;

    if (!drag.active || !track) return;

    drag.active = false;
    track.classList.remove(styles.dragging);

    if (!drag.didDrag) return;

    const delta = event.clientX - drag.startX;

    let targetIndex = drag.startIndex;

    if (Math.abs(delta) >= 40) {
      targetIndex += delta < 0 ? 1 : -1;
    }

    targetIndex = Math.max(
      0,
      Math.min(pageCount - 1, targetIndex)
    );

    drag.didDrag = true;
    scrollToPage(targetIndex);
  }

  function handleClickCapture(event) {
    if (dragRef.current.didDrag) {
      event.preventDefault();
      event.stopPropagation();
      dragRef.current.didDrag = false;
    }
  }

  return (
    <section
      className={styles.section}
      id="certificates"
      aria-label="Certificados e conquistas"
    >
      <div className={styles.container} data-reveal="fade-down">
        <SectionTitle
          title="Minhas conquistas"
          subtitle="certificados"
          dark
        />

        <div
          ref={trackRef}
          className={styles.track}
          aria-label="Lista de certificados"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onClickCapture={handleClickCapture}
        >
          {certificates.map((certificate) => (
            <article
              className={styles.card}
              key={certificate.src}
            >
              <img
                src={certificate.src}
                alt={certificate.alt}
                loading="lazy"
                draggable="false"
              />
            </article>
          ))}
        </div>

        <div
          className={styles.pagination}
          role="group"
          aria-label="Navegação dos certificados"
        >
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${
                activePage === index ? styles.activeDot : ''
              }`}
              onClick={() => scrollToPage(index)}
              aria-label={`Ir para grupo ${index + 1} de certificados`}
              aria-current={activePage === index ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
