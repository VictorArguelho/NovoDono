import styles from './Main.module.css';

import Filters from './Filters/Filters';
import AdsSection from './AdsSection/AdsSection';

export default function Main() {
  return (
    <main className={styles.main}>
      <Filters />
      <AdsSection />
    </main>
  );
}
