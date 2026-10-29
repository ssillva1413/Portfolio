import { useRef } from 'react';
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

export default function Certificates() {
  const trackRef = useRef(null);

  const scrollTrack = (direction) => {
    const track = trackRef.current;

    if (!track) return;

    const firstCard = track.querySelector(`.${styles.card}`);

    if (!firstCard) return;

    const trackStyle = window.getComputedStyle(track);
    const gap = parseFloat(trackStyle.columnGap) || 0;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const step = cardWidth + gap;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const currentScroll = track.scrollLeft;

    // Mantém a navegação contínua, como no carrossel antigo.
    if (direction > 0 && currentScroll >= maxScroll - 2) {
      track.scrollTo({
        left: 0,
        behavior: 'smooth',
      });

      return;
    }

    if (direction < 0 && currentScroll <= 2) {
      track.scrollTo({
        left: maxScroll,
        behavior: 'smooth',
      });

      return;
    }

    track.scrollBy({
      left: direction * step,
      behavior: 'smooth',
    });
  };

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

        <div className={styles.controls}>
          <button
            type="button"
            onClick={() => scrollTrack(-1)}
            aria-label="Ver certificados anteriores"
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => scrollTrack(1)}
            aria-label="Ver próximos certificados"
          >
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>
        </div>

        <div
          className={styles.track}
          ref={trackRef}
          aria-label="Lista de certificados"
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
              />
            </article>
          ))}
        </div>

        <p className={styles.hint}>
          Use as setas ou deslize para visualizar os certificados.
        </p>
      </div>
    </section>
  );
}