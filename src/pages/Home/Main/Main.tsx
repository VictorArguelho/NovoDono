import styles from './Main.module.css';

import Filters from './Filters/Filters';
import AdsSection from './AdsSection/AdsSection';

export default function Main() {
  return (
    <main className={styles.main}>
      <div>
        <Filters />
        <AdsSection />
      </div>
    </main>
  );
}
