import type { Ad } from '@models/Ad';
import styles from './AdCard.module.css';

import AdGallery from './AdGallery/AdGallery';

type AdCardProps = {
  ad: Ad;
};

export default function AdCard({ ad }: AdCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <AdGallery images={ad.imagesUrl} />
      </div>

      <div className={styles.info}>
        <div className={styles.category}>
          <h1>{ad.category}</h1>
        </div>

        <div className={styles.description}>
          <h2>Descrição:</h2>
          <p>{ad.description}</p>
        </div>

        <div className={styles.moreInfo}>
          <h3>{`Tamanho: ${ad.size}`}</h3>
          <h3>{`Estado de conservação: ${ad.conservation}`}</h3>
          <h3>{`Localização: ${ad.location}`}</h3>
        </div>
      </div>
    </div>
  );
}
