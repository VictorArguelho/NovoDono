import styles from './AuthButtons.module.css';

import Button from '@components/Button/Button';

import { cx } from '@utils/classNames';

import type { AuthButtonProps } from '@models/props';

export default function AuthButtons() {
  return (
    <div className={styles.authButtons}>
      <AuthButton text="CADASTRAR-SE" variantClass={styles.signup} />
      <AuthButton text="ENTRAR" variantClass={styles.login} />
    </div>
  );
}

function AuthButton({ text, variantClass }: AuthButtonProps) {
  return <Button className={cx(variantClass, styles.button)}>{text}</Button>;
}
