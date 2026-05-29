import styles from './Header.module.css';
import NavBar from './NavBar/NavBar';
import TopBar from './TopBar/TopBar';

export default function Header() {
  return (
    <header className={styles.header}>
      <TopBar />
      <NavBar />
    </header>
  );
}
