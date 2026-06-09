import styles from './Ad.module.css';

import { getAdById } from '@services/AdsService';
import { useParams } from 'react-router-dom';

import Header from '@components/Header/Header';
import AdCard from './AdCard/AdCard';

export default function Ad() {
  const { id } = useParams();
  if (!id) {
    return <h1>ID inválido</h1>;
  }

  const ad = getAdById(id);
  if (!ad) {
    return <h1>ID inválido</h1>;
  }

  return (
    <div className={styles.ad}>
      <Header />
      <AdCard ad={ad} />
    </div>
  );
}
