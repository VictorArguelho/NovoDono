import styles from './LogoButton.module.css';
import buttonStyles from '@styles/buttons.module.css';
import effectsStyles from '@styles/effects.module.css';

import logo from '@images/logo.png';

export default function LogoButton() {
  return (
    <button
      className={`${styles.logoButton} ${buttonStyles.divButton} ${buttonStyles.button} ${effectsStyles.shadow}`}
      type="button"
    >
        <img className={styles.logo} src={logo} alt="Logo Novo Dono" />
    </button>
  );
}
