import styles from './Ad.module.css';

import { getAdById } from '@services/AdsService';
import { Navigate, useParams } from "react-router-dom";

import Header from '@components/Header/Header';
import AdCard from './AdCard/AdCard';

export default function Ad() {
  const { id } = useParams();

  const ad = id ? getAdById(id) : undefined;

  if (!ad) {
    return <Navigate to="/error/400" replace />;
  }

  return (
    <div className={styles.ad}>
      <Header />
      <AdCard ad={ad} />
    </div>
  );
}
