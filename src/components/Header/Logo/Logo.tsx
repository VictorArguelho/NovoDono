import styles from './Logo.module.css';
import buttonStyles from '@styles/buttons.module.css';
import effectsStyles from '@styles/effects.module.css';

import logo from '@assets/images/logo.png';

export default function Logo() {
  return (
    <button
      className={`${styles.logo} ${buttonStyles.button} ${buttonStyles.divButton} ${effectsStyles.shadow}`}
      type="button"
    >
      <img className={styles.logoImg} src={logo} alt="Logo Novo Dono" />
    </button>
  );
}
