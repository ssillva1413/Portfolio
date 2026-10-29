import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, subtitle, dark = false }) {
  return (
    <div className={`${styles.wrapper} ${dark ? styles.dark : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle ? <span className={styles.subtitle}>{subtitle}</span> : null}
    </div>
  );
}
