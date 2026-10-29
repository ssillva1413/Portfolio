import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre mim', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Conquistas', href: '#certificates' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        aria-label="Navegação principal"
      >
        <div className={styles.inner}>
          <a className={styles.logo} href="#home" onClick={closeMenu} aria-label="Saulo Silva, início">
            Portfo<span>lio.</span>
          </a>

          <button
            className={styles.menuToggle}
            type="button"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="portfolio-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
          </button>

          <ul
            id="portfolio-navigation"
            className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className={styles.menuLink} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
