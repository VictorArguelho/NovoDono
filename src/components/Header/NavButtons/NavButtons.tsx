import styles from './NavButtons.module.css';
import buttonStyles from '@styles/buttons.module.css';
import effectsStyles from '@styles/effects.module.css';

import type { NavButtonsProps, NavButtonProps } from '@models/props';

export default function NavButtons({className} : NavButtonsProps) {
  return (
    <nav className={`${styles.navButtons} ${className ?? ''}`}>
      <NavButton text="ANUNCIAR" />

      <NavButton text="CONVERSAS" />

      <NavButton text="SOBRE" />

      <NavButton text="CONTRIBUIR" />
    </nav>
  );
}

function NavButton({ text }: NavButtonProps) {
  return (
    <button
      className={`${styles.button} ${buttonStyles.button} ${buttonStyles.divButton} ${effectsStyles.shadow}`}
      type="button"
    >
      <span className={styles.text}>{text}</span>
    </button>
  );
}
