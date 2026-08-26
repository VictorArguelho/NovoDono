import styles from "./AdsSection.module.css";
import { getAds } from "@services/AdsService";

import AdCard from "./AdCard/AdCard";

export default function AdsSection() {
  return (
    <section className={styles.adsSection}>
      {getAds().map((ad) => (
        <AdCard ad={ad} key={ad.id} />
      ))}
    </section>
  );
}
