import type { AdCardProps } from '@models/props';
import styles from './AdCard.module.css';

import AdGallery from './AdGallery/AdGallery';
import AdInfo from './AdInfo/AdInfo';

export default function AdCard({ ad }: AdCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <AdGallery images={ad.imagesUrl} />
      </div>

      <div className={styles.infoContainer}>
        <AdInfo ad={ad} />
      </div>
    </div>
  );
}
