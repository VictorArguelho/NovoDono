import styles from './Ad.module.css';

import { getAdById } from '@services/AdsService';
import { Navigate, useParams } from "react-router-dom";

import Header from '@components/Header/Header';
import AdCard from './AdCard/AdCard';
import type { Ad as AdModel } from '@models/Ad';

export default function Ad() {
  const { id } = useParams();

  if (!id) {
    return <Navigate to="/error/400" replace />;
  }

  let ad: AdModel | undefined;
  try {
    ad = getAdById(id);
  } catch (error) {
    console.error(`Não foi possível carregar o anúncio "${id}":`, error);
    return <Navigate to="/error/500" replace />;
  }

  if (!ad) {
    return <Navigate to="/error/404" replace />;
  }

  return (
    <div className={styles.ad}>
      <Header />
      <AdCard ad={ad} />
    </div>
  );
}
