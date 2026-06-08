import type { Ad } from "@models/Ad";
import styles from "./AdCard.module.css";
import buttonStyles from "@styles/buttons.module.css";

type AdDataType = {
  ad: Ad
};

export default function AdCard({ ad }: AdDataType) {
  return (
    <article
      className={`${styles.adCard} ${buttonStyles.button}`}
      role="button"
    >
      <div className={styles.imageContainer}>
        <img className={styles.image} src={ad.imagesUrl[0]} alt="" />
        <span className={styles.state}>{ad.conservation}</span>
      </div>

      <div className={styles.info}>
        <h1 className={styles.title}>{ad.category}</h1>
        <h2 className={styles.location}>{ad.location}</h2>
      </div>
    </article>
  );
}
