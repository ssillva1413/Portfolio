
import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Site HMAA',
    description:
      'Site do Hospital Agenor Araújo, com informações sobre a instituição e seus canais de atendimento.',
    image: '/images/img-projects/site-institucional.png',
    imageAlt: 'Prévia do site institucional HMAA',
    url: 'https://hospitalagenoraraujo.com.br/',
  },
  {
    title: 'Sistema de Chamados',
    description:
      'Sistema web para registro e acompanhamento de suporte, facilitando a organização e o atendimento das demandas.',
    image: '/images/img-projects/sistema-tickets.png',
    imageAlt: 'Prévia do sistema de chamados',
    url: 'https://sistemas-hmaa-dusky.vercel.app/',
  },
  {
    title: 'Sistema de Pesquisa de Satisfação',
    description:
      'Aplicação web interativa para coleta de avaliações dos pacientes sobre o atendimento hospitalar.',
    image: '/images/img-projects/pesquisa-satisfacao.png',
    imageAlt: 'Prévia do sistema de Pesquisa de Satisfação',
    url: 'https://pesquisa-satisfacao-eta.vercel.app/',
  },
  {
    title: 'Projeto Marvel',
    description:
      'Um site de pesquisa de personagens e LEGO da Marvel, totalmente responsivo e animado.',
    image: '/images/img-projects/marvel.png',
    imageAlt: 'Prévia do site Projeto Marvel',
    url: 'https://marvel-rho.vercel.app/',
  },
];

export default function Projects() {
  const trackRef = useRef(null);

  const dragRef = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
    startIndex: 0,
    step: 0,
    didDrag: false,
  });

  const [activePage, setActivePage] = useState(0);

  const pageCount = projects.length;

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    function updateActivePage() {
      if (!track.children.length) return;

      const gap =
        parseFloat(window.getComputedStyle(track).columnGap) || 0;

      const step =
        track.children[0].getBoundingClientRect().width + gap;

      const page = Math.round(track.scrollLeft / step);

      setActivePage(
        Math.max(0, Math.min(pageCount - 1, page))
      );
    }

    updateActivePage();

    track.addEventListener('scroll', updateActivePage, {
      passive: true,
    });

    window.addEventListener('resize', updateActivePage);

    return () => {
      track.removeEventListener('scroll', updateActivePage);
      window.removeEventListener('resize', updateActivePage);
    };
  }, [pageCount]);

  function scrollToPage(index) {
    const track = trackRef.current;

    if (!track) return;

    const target = track.children[index];

    if (!target) return;

    const targetLeft =
      target.getBoundingClientRect().left -
      track.getBoundingClientRect().left +
      track.scrollLeft;

    track.scrollTo({
      left: targetLeft,
      behavior: 'smooth',
    });
  }

  function handlePointerDown(event) {
    dragRef.current.didDrag = false;

    if (event.target.closest('a, button')) return;

    if (event.pointerType !== 'mouse' || event.button !== 0) return;

    const track = trackRef.current;

    if (!track || !track.children.length) return;

    const gap =
      parseFloat(window.getComputedStyle(track).columnGap) || 0;

    const step =
      track.children[0].getBoundingClientRect().width + gap;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
      startIndex: Math.round(track.scrollLeft / step),
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

    scrollToPage(targetIndex);
  }

  function handleClickCapture(event) {
    if (dragRef.current.didDrag) {
      event.preventDefault();
      event.stopPropagation();
    }

    dragRef.current.didDrag = false;
  }

  return (
    <section
      className={styles.section}
      id="projects"
      aria-label="Principais projetos"
    >
      <div className={styles.container} data-reveal="fade-down">
        <SectionTitle title="Projetos" subtitle="meu portfólio" />

        <div
          ref={trackRef}
          className={styles.grid}
          role="region"
          aria-label="Carrossel de projetos"
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onClickCapture={handleClickCapture}
        >
          {projects.map((project) => (
            <div className={styles.slide} key={project.title}>
              <article className={styles.card}>
                <div className={styles.imageFrame}>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    draggable="false"
                  />
                </div>

                <div className={styles.details}>
                  <span className={styles.tag}>
                    Desenvolvimento web
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    View
                    <i
                      className="fa-solid fa-arrow-up-right-from-square"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div
          className={styles.pagination}
          role="group"
          aria-label="Navegação dos projetos"
        >
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={`${styles.dot} ${
                activePage === index ? styles.activeDot : ''
              }`}
              onClick={() => scrollToPage(index)}
              aria-label={`Ir para o projeto ${index + 1}: ${project.title}`}
              aria-current={
                activePage === index ? 'true' : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
