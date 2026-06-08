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
        <img className={styles.image} src={adData.image} alt="" />
        <span className={styles.state}>{adData.state}</span>
      </div>

      <div className={styles.info}>
        <h1 className={styles.title}>{adData.name}</h1>
        <h2 className={styles.location}>{adData.location}</h2>
      </div>
    </article>
  );
}
