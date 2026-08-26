import styles from "./AdsSection.module.css";
import buttonStyles from "@styles/buttons.module.css";
import { clearAds, getAds } from "@services/AdsService";
import type { Ad } from "@models/Ad";

import AdCard from "./AdCard/AdCard";
import Button from "@components/Button/Button";

import { cx } from "@utils/classNames";

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
          <Button
            className={cx(styles.resetButton, buttonStyles.pill)}
            raised={false}
            shadow={false}
            onClick={handleReset}
          >
            Limpar dados e recarregar
          </Button>
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
