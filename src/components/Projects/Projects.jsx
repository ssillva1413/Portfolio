import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Projeto Marvel',
    description: 'um site de pesquisa de personagem legos da Marvel totalmente responsivo e animado.',
    image: '/images/img-projects/marvel.png',
    imageAlt: 'Prévia do site Projeto Marvel',
    url: 'https://marvel-rho.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects" aria-label="Principais projetos">
      <div className={styles.container} data-reveal="fade-down">
        <SectionTitle title="Projetos" subtitle="meu portfólio" />
        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.card} key={project.title}>
              <div className={styles.imageFrame}>
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
              </div>
              <div className={styles.details}>
                <span className={styles.tag}>Desenvolvimento web</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noreferrer" className={styles.projectLink}>
                  Visualizar projeto <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
