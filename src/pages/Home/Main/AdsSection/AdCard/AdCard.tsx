import type { AdCardProps } from "@models/props";
import styles from "./AdCard.module.css";
import buttonStyles from "@styles/buttons.module.css";
import { useNavigate } from "react-router-dom";
import placeholder from "@assets/images/placeholder.jpg";

export default function AdCard({ ad }: AdCardProps) {
  const navigate = useNavigate();

  return (
    <article
      className={`${styles.adCard} ${buttonStyles.button}`}
      role="button"
      onClick={() => navigate(`/ad/${ad.id}`)}
    >
      <div className={styles.imageContainer}>
        <img className={styles.image} src={ad.imagesUrl[0] ?? placeholder} alt="" />
        <span className={styles.state}>{ad.conservation}</span>
      </div>

      <div className={styles.info}>
        <h1 className={styles.title}>{ad.category}</h1>
        <h2 className={styles.location}>{ad.location}</h2>
      </div>
    </article>
  );
}
