import type { ReactNode } from 'react';

import styles from './TripleSection.module.css';

type Props = {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
};

export default function TripleSection({ left, center, right }: Props) {
  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.left}`}>{left}</div>

      <div className={`${styles.section} ${styles.center}`}>{center}</div>

      <div className={`${styles.section} ${styles.right}`}>{right}</div>
    </div>
  );
}
