import styles from './Header.module.css';

import LogoButton from './Logo/Logo';
import NavBar from './NavButtons/NavButtons';
import AuthButtons from './AuthButtons/AuthButtons';

export default function Header() {
  return (
    <header className={styles.header}>
      <LogoButton />
      <NavBar className={styles.navBar} />
      <AuthButtons />
    </header>
  );
}
