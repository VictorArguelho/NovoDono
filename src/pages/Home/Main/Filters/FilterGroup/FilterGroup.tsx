import { useState } from 'react';
import styles from './FilterGroup.module.css';
import surfaceStyles from '@styles/surfaces.module.css';

import Button from '@components/Button/Button';

import { cx } from '@utils/classNames';

import type { FilterGroupProps } from '@models/props';

export default function FilterGroup({ title, options }: FilterGroupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <fieldset className={cx(styles.filterGroup, surfaceStyles.card)}>
      <Button
        className={styles.title}
        raised={false}
        transparent
        shadow={false}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.titleText}>{title}</span>
        <span className={styles.expandIcon}>{isOpen ? '⋀' : 'V'}</span>
      </Button>

      <div className={cx(styles.content, isOpen && styles.contentOpen)}>
        <div>
          {options.map((option) => (
            <label className={styles.option} key={option}>
              <input className={styles.optionCheck} type="checkbox" />
              <span className={styles.optionName}>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </fieldset>
  );
}
