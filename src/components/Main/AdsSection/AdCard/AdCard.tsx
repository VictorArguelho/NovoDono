import styles from "./AdCard.module.css";
import buttonStyles from "@styles/buttons.module.css";

type AdDataType = {
  image: string;
  name: string;
  location: string;
  state: string;
};

export default function AdCard({ adData }: { adData: AdDataType }) {
  return (
    <article
      className={`${styles.adCard} ${buttonStyles.button}`}
      role="button"
    >
      <div className={styles.imageContainer}>
        <img className={styles.adImage} src={adData.image} alt="" />
        <span className={styles.adState}>{adData.state}</span>
      </div>

      <div className={styles.adInfo}>
        <h1 className={styles.adTitle}>{adData.name}</h1>
        <h2 className={styles.adLocation}>{adData.location}</h2>
      </div>
    </article>
  );
}
