import { useState } from 'react';
import styles from './FilterGroup.module.css';

type FilterGroupProps = {
  title: string;
  options: string[];
};

export default function FilterGroup({ title, options }: FilterGroupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <fieldset className={styles.filterGroup}>
      <button
        className={styles.title}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.titleText}>{title}</span>
        <span className={styles.expandIcon}>{isOpen ? '⋀' : 'V'}</span>
      </button>

      <div className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}>
        <div>
          {options.map((option) => (
            <label className={`${styles.option}`}>
              <input className={styles.optionCheck} type="checkbox" />
              <span className={styles.optionName}>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </fieldset>
  );
}
