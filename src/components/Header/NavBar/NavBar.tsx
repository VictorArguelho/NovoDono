import styles from './NavBar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <button className={styles.navButton} type="button">
        ANUNCIAR
      </button>

      <button className={styles.navButton} type="button">
        CHAT
      </button>

      <button className={styles.navButton} type="button">
        SOBRE
      </button>

      <button className={styles.navButton} type="button">
        CONTRIBUIR
      </button>
    </nav>
  );
}
