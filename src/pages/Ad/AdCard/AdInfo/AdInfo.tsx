import type { Ad } from '@models/Ad';
import styles from './AdInfo.module.css';

type AdInfoProps = {
  ad: Ad;
};

export default function AdInfo({ ad }: AdInfoProps) {
  return (
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
  );
}
