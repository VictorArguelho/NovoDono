import type { Ad } from '@models/Ad';
import styles from './AdCard.module.css';

import AdGallery from './AdGallery/AdGallery';
import AdInfo from './AdInfo/AdInfo';

type AdCardProps = {
  ad: Ad;
};

export default function AdCard({ ad }: AdCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <AdGallery images={ad.imagesUrl} />
      </div>

      <AdInfo ad={ad} />
    </div>
  );
}
