import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <i className="fa-regular fa-copyright" aria-hidden="true" /> {new Date().getFullYear()} <span>Saulo Silva</span>. Todos os direitos reservados.
      </p>
      <a href="#home" className={styles.backToTop}>Voltar ao início <i className="fa-solid fa-arrow-up" aria-hidden="true" /></a>
    </footer>
  );
}
