import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import styles from './Services.module.css';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground.jsx';

const services = [
  {
    icon: 'fa-solid fa-code',
    title: 'Desenvolvimento Web e Full Stack',
    description:
      'Desenvolvimento de aplicações web com foco em funcionalidade, organização e experiência do usuário. Criação de interfaces responsivas e sistemas personalizados, utilizando tecnologias como HTML5, CSS3, JavaScript, React, Vite, Node e PostgreSQL para transformar necessidades em soluções digitais.',
  },
  {
  icon: 'fa-solid fa-network-wired',
  title: 'Administração de Infraestrutura e Redes',
  description:
    'Administração e manutenção de ambientes de TI, envolvendo Windows Server 2022, configuração e gerenciamento de redes cabeadas e Wi-Fi, MikroTik, firewall e políticas de segurança. Experiência com Zabbix para monitoramento de infraestrutura, DVRs para sistemas de CFTV, PABX IP, switches gerenciáveis e redes PoE.',
  },
  {
    icon: 'fa-solid fa-hospital',
    title: 'Gestão e Suporte a Sistemas Hospitalares',
    description:
      'Administração, suporte e acompanhamento de sistemas de gestão hospitalar, incluindo soluções ERP. Auxiliando os setores na utilização dos sistemas, resolução de problemas e melhoria dos processos tecnológicos da instituição.',
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