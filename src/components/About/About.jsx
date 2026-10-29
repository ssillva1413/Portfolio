import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="about" aria-label="Minha história na tecnologia">
      <div className={styles.container} data-reveal="fade-down">
        <SectionTitle title="Sobre Mim" subtitle="minha história" />
        <div className={styles.content}>
          <div className={styles.photoColumn}>
            <div className={styles.photoFrame}>
              <img src="/images/saulo-profile.jpg" alt="Foto de Saulo Silva" loading="lazy" />
            </div>
          </div>
          <div className={styles.textColumn}>
            <h3>
              Me chamo Saulo e sou um <span>estudante em formação</span>
            </h3>
            <p>
              Olá pessoal, muito prazer, eu me chamo Saulo. Sejam muito bem-vindos ao meu portfólio!! ^^
            </p>
            <p>
              Atualmente, estou cursando Sistemas de Informação e estou no 8º período da faculdade. Minha jornada nessa area começou de forma bastante simples; sempre admirei muito o universo da tecnologia e sempre tive muita curiosidade sobre como os aplicativos e sites eram desenvolvidos, as ferramentas por trás, as animações e tudo mais, sempre me encantou tudo isso.
            </p>
            <p>
              Estou aprimorando meus conhecimentos e habilidades na área de tecnologia através dos meus estudos. Além disso, tenho a oportunidade única de aplicar e expandir essas habilidades em um ambiente desafiador e gratificante: um hospital.
            </p>
            <p>
              No hospital, atuo como suporte técnico, onde lido com uma variedade de situações e problemas. Essa experiência me proporcionou uma compreensão profunda da importância da tecnologia na saúde e me ensinou a adaptar soluções tecnológicas para atender às necessidades específicas deste setor. Estou sempre buscando aprender e crescer na minha carreira e estou animado com as possibilidades que o futuro reserva. Obrigado por visitar meu portfólio!
            </p>
            <a
              className={styles.cvButton}
              href="https://drive.google.com/file/d/1dF2JpJWTbb_T98qoealRK5KZMICQTmcv/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download CV <i className="uil uil-file-download-alt" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
