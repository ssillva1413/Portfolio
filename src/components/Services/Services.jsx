import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import styles from './Services.module.css';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground.jsx';

const services = [
  {
    icon: 'fa-solid fa-desktop',
    title: 'Formatação de sistemas operacionais',
    description: 'Sou especialista em formatação de sistemas operacionais, Com um forte conhecimento técnico, garanto que cada sistema seja formatado e configurado para atender às necessidades específicas do usuário.',
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'Gerência de redes de computadores',
    description: 'texto aqui',
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Suporte de sistema ERP',
    description: 'texto aqui',
  },
];

export default function Services() {
  return (
    <section
      className={styles.section}
      id="services"
      aria-label="Serviços e conhecimentos"
    >
      <ParticlesBackground />

      <div className={styles.container}>
        <div data-reveal="fade-down">
          <SectionTitle
            title="Serviços"
            subtitle="o que forneço"
            dark
          />
        </div>

        <div
          className={styles.cards}
          data-reveal="zoom-in-up"
        >
          {services.map((service) => (
            <article
              className={styles.card}
              key={service.title}
            >
              <div className={styles.iconWrap}>
                <i
                  className={service.icon}
                  aria-hidden="true"
                />
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
