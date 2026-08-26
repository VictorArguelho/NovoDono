import styles from "./AdsSection.module.css";
import { clearAds, getAds } from "@services/AdsService";
import type { Ad } from "@models/Ad";

import AdCard from "./AdCard/AdCard";

export default function AdsSection() {
  let ads: Ad[];

  try {
    ads = getAds();
  } catch (error) {
    console.error("Não foi possível carregar os anúncios:", error);
    return (
      <section className={styles.adsSection}>
        <div className={styles.feedback}>
          <p>Não foi possível carregar os anúncios.</p>
          <button
            className={styles.resetButton}
            type="button"
            onClick={handleReset}
          >
            Limpar dados e recarregar
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.adsSection}>
      {ads.length === 0 ? (
        <p className={styles.feedback}>Nenhum anúncio disponível no momento.</p>
      ) : (
        ads.map((ad) => <AdCard key={ad.id} ad={ad} />)
      )}
    </section>
  );
}

function handleReset() {
  try {
    clearAds();
  } catch (error) {
    console.error("Não foi possível limpar os anúncios:", error);
  }
  window.location.reload();
}
