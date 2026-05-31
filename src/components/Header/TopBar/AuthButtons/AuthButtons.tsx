import styles from './AuthButtons.module.css';
import buttonStyles from '@styles/buttons.module.css';
import effectStyles from '@styles/effects.module.css';

export default function AuthButtons() {
  return (
    <div className={styles.authButtons}>
      <AuthButton text="CADASTRAR-SE" variantClass={styles.signupButton} />
      <AuthButton text="ENTRAR" variantClass={styles.loginButton} />
    </div>
  );
}

type AuthButtonProps = {
  text: string;
  variantClass: string;
};

function AuthButton({ text, variantClass }: AuthButtonProps) {
  return (
    <button
      className={`${variantClass} ${styles.authButton} ${buttonStyles.button} ${effectStyles.shadow}`}
      type="button"
    >
      {text}
    </button>
  );
}
