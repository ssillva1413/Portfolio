import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import styles from './About.module.css';

export default function About() {
  return (
    <section
      className={styles.section}
      id="about"
      aria-label="Minha história na tecnologia"
    >
      <div className={styles.container} data-reveal="fade-down">
        <SectionTitle title="Sobre Mim" subtitle="minha história" />

        <div className={styles.content}>
          <div className={styles.photoColumn}>
            <div className={styles.photoFrame}>
              <img
                src="/images/saulo.png"
                alt="Foto de Saulo Silva"
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.textColumn}>
            <h3>
              Me chamo Saulo e atuo na área de{' '}
              <span>Tecnologia da Informação</span>
            </h3>

            <p>
              Olá! Seja muito bem-vindo ao meu portfólio!
            </p>

            <p>
              Sou profissional de Tecnologia da Informação e atuo como
              <strong> Coordenador do Setor de TI do Hospital e Maternidade
              Agenor Araújo</strong>, sendo responsável pela gestão e pelo
              funcionamento de toda a estrutura tecnológica da instituição.
            </p>

            <p>
              Minha trajetória na tecnologia começou com a curiosidade de
              entender como sistemas, aplicativos e sites funcionam e como a
              tecnologia pode transformar a maneira como as pessoas trabalham.
              Com o tempo, esse interesse se tornou uma carreira construída por
              meio de experiências práticas, desafios profissionais e
              aprendizado contínuo.
            </p>

            <p>
              Atualmente, minha atuação envolve a administração da
              infraestrutura de TI, gerenciamento de redes cabeadas e Wi-Fi,
              equipamentos, servidores, controle de acesso, telefonia IP e
              sistemas de monitoramento. Também trabalho com a administração e
              o suporte aos sistemas hospitalares, como <strong>Hospidata/MV</strong>,
              além de soluções integradas ao ambiente assistencial, como a
              <strong> Epimed</strong>.
            </p>
            <p>
              Também atuo no desenvolvimento web, área
              na qual venho criando projetos e aplicações que unem
              funcionalidade, organização e experiência do usuário.
            </p>

            <p>
              No dia a dia, sou responsável por coordenar as demandas do setor,
              acompanhar a infraestrutura tecnológica, solucionar problemas,
              prestar suporte aos diferentes departamentos e buscar melhorias
              que garantam a disponibilidade, a segurança e a eficiência dos
              recursos de TI. Essa experiência me proporcionou uma visão ampla
              sobre a importância da tecnologia para o funcionamento de uma
              instituição de saúde.
            </p>

            <p>
              Além da experiência profissional, sou técnico em informatica e graduando em
              Sistemas de Informação, formação que complementa minha
              trajetória prática e contribui para o aprimoramento contínuo dos
              meus conhecimentos em tecnologia, desenvolvimento de software e
              gestão de TI.
            </p>
            
            <p>
              Obrigado pela visita e seja bem-vindo ao meu portfólio!
            </p>

            <a
              className={styles.cvButton}
              href="https://drive.google.com/file/d/1dF2JpJWTbb_T98qoealRK5KZMICQTmcv/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download CV{' '}
              <i
                className="uil uil-file-download-alt"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}