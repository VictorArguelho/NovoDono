import styles from './NavButtons.module.css';

import Button from '@components/Button/Button';

import { cx } from '@utils/classNames';

import type { NavButtonsProps, NavButtonProps } from '@models/props';

export default function NavButtons({className} : NavButtonsProps) {
  return (
    <nav className={cx(styles.navButtons, className)}>
      <NavButton text="ANUNCIAR" />

      <NavButton text="CONVERSAS" />

      <NavButton text="SOBRE" />

      <NavButton text="CONTRIBUIR" />
    </nav>
  );
}

function NavButton({ text }: NavButtonProps) {
  return (
    <Button className={styles.button} transparent>
      <span className={styles.text}>{text}</span>
    </Button>
  );
}
