import styles from './AuthButtons.module.css';
import buttonStyles from '@styles/buttons.module.css';
import effectStyles from '@styles/effects.module.css';

export default function AuthButtons() {
  return (
    <div className={styles.authButtons}>
      <AuthButton text="CADASTRAR-SE" variantClass={styles.signup} />
      <AuthButton text="ENTRAR" variantClass={styles.login} />
    </div>
  );
}

import type { AuthButtonProps } from '@models/props';

function AuthButton({ text, variantClass }: AuthButtonProps) {
  return (
    <button
      className={`${variantClass} ${styles.button} ${buttonStyles.button} ${effectStyles.shadow}`}
      type="button"
    >
      {text}
    </button>
  );
}
