
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const phrases = [
  'Analista de Suporte de TI.',
  'Desenvolvedor  Full Stack',
  'Estudante',
  'Apaixonado por tecnologia',
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const phrase = phrases[phraseIndex];

      if (!deleting) {
        charIndex += 1;
        setTypedText(phrase.slice(0, charIndex));

        if (charIndex >= phrase.length) {
          deleting = true;
          timeoutId = window.setTimeout(tick, 1300);
          return;
        }

        timeoutId = window.setTimeout(tick, 72);
        return;
      }

      charIndex -= 1;
      setTypedText(phrase.slice(0, charIndex));

      if (charIndex <= 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timeoutId = window.setTimeout(tick, 280);
        return;
      }

      timeoutId = window.setTimeout(tick, 34);
    };

    timeoutId = window.setTimeout(tick, 450);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section
      className={styles.hero}
      id="home"
      aria-label="Apresentação de Saulo Silva"
    >
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.intro}>Olá Mundo, me chamo</p>

          <h1>Saulo Silva</h1>

          <p className={styles.role}>
            E eu sou <span>{typedText}</span>
            <span className={styles.caret} aria-hidden="true">
              |
            </span>
          </p>

          <div className={styles.socialMedia} aria-label="Redes sociais">
            <a
              href="https://github.com/ssillva1413"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" aria-hidden="true" />
            </a>

            <a
              href="https://discord.com/app"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
            >
              <i className="fa-brands fa-discord" aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/saulo-silva-2196811a9/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin" aria-hidden="true" />
            </a>

            <a
              href="https://www.instagram.com/saulo__silva/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={styles.avatarWrap}>
          <div className={styles.avatarHalo} />

          <img
            className={styles.avatar}
            src="/images/cartoon.jpeg"
            alt="Ilustração de perfil de Saulo Silva"
          />
        </div>
      </div>

      <a
        className={styles.scrollHint}
        href="#about"
        aria-label="Rolar para a seção Sobre mim"
      >
        <span />
      </a>
    </section>
  );
}
