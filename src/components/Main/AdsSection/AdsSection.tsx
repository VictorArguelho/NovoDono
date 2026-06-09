import styles from './AdsSection.module.css';

import AdCard from './AdCard/AdCard';

export default function AdsSection() {
  return (
    <section className={styles.adsSection}>
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
    </section>
  );
}
