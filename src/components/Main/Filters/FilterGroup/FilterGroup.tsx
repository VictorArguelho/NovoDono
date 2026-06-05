import styles from './FilterGroup.module.css';

type FilterGroupProps = {
  title: string;
  options: Array<string>;
};

export default function FilterGroup({ title, options }: FilterGroupProps) {
  return (
    <details className={styles.filterGroup}>
      <summary className={styles.title}>{title}</summary>

      {options.map((option) => (
        <label className={styles.option}>
          <input type="checkbox" className={styles.optionCheck} />
          <span className={styles.optionName}>{option}</span>
        </label>
      ))}
    </details>
  );
}
