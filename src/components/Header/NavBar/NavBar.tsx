import styles from './NavBar.module.css';
import buttonStyles from '@styles/buttons.module.css';
import effectStyles from '@styles/effects.module.css';
import typographyStyles from '@styles/typography.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <NavButton text="ANUNCIAR" />

      <NavButton text="CHAT" />

      <NavButton text="SOBRE" />

      <NavButton text="CONTRIBUIR" />
    </nav>
  );
}

type NavButtonProps = {
  text: string;
};

function NavButton({ text }: NavButtonProps) {
  return (
    <button
      className={`${styles.navButton} ${buttonStyles.button} ${effectStyles.shadow} ${typographyStyles.text}`}
      type="button"
    >
      {text}
    </button>
  );
}
