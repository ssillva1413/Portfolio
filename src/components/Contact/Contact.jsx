import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.section} id="contact" aria-label="Entre em contato">
      <div className={styles.container} data-reveal="fade-down">
        <SectionTitle title="Contato" subtitle="mensagem" dark />
        <div className={styles.content} data-reveal="fade-up">
          <div className={styles.infoColumn}>
            <h3>Se interessou?</h3>
            <p>
              Obrigada por ter chegado até aqui e conhecido um pouco do meu trabalho. Se algo despertou sua curiosidade ou se você tem alguma pergunta, não hesite em entrar em contato. Estou aqui para trocar ideias, Seja para discutir um projeto, esclarecer dúvidas, compartilhar conhecimentos ou apenas trocar experiências, estou pronto para ouvir você!
            </p>
            <div className={styles.infoList}>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}><i className="fa-solid fa-user" aria-hidden="true" /></span>
                <div><span className={styles.label}>Nome</span><span className={styles.value}>Saulo Silva</span></div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}><i className="fa-solid fa-location-dot" aria-hidden="true" /></span>
                <div><span className={styles.label}>Localização</span><span className={styles.value}>Iguatu, Ceará</span></div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}><i className="fa-solid fa-envelope" aria-hidden="true" /></span>
                <div><span className={styles.label}>E-mail</span><a className={styles.value} href="mailto:saullo.sillva06@gmail.com">ssillva1413@gmail.com</a></div>
              </div>
            </div>
          </div>

          <div className={styles.formColumn}>
            <h3>Fale comigo</h3>
              <form action="https://formsubmit.co/ssillva1413@gmail.com" method="POST" className={styles.form}>
              <input type="hidden" name="_subject" value="Contato pelo portfólio de Saulo Silva" />
              <div className={styles.fields}>
                <label className={styles.field}>
                  <span className={styles.srOnly}>Nome</span>
                  <input name="nome" placeholder="Nome" autoComplete="name" required />
                </label>
                <label className={styles.field}>
                  <span className={styles.srOnly}>E-mail</span>
                  <input name="email" type="email" placeholder="E-mail" autoComplete="email" required />
                </label>
              </div>
              <label className={styles.field}>
                <span className={styles.srOnly}>Assunto</span>
                <input name="assunto" placeholder="Assunto" required />
              </label>
              <label className={styles.textarea}>
                <span className={styles.srOnly}>Mensagem</span>
                <textarea name="mensagem" placeholder="Escreva sua mensagem..." rows="6" required />
              </label>
              <button className={styles.submitButton} type="submit">
                Enviar<i className="fa-solid fa-paper-plane" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
