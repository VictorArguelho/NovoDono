import styles from './ErrorPage.module.css';
import buttonStyles from '@styles/buttons.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { cx } from '@utils/classNames';

export default function ErrorPage() {
  const { code } = useParams();

  return (
    <div className={styles.container}>
      <h1 className={styles.error}>{code}</h1>
      <p className={styles.text}>{GetMessage(Number.parseInt(code!, 10))}</p>
      <Link to="/" className={cx(styles.homeLink, buttonStyles.button)}>Voltar para página inicial</Link>
    </div>
  );
}

function GetMessage(code : number) : string {
  if (code === 404) return "Página não encontrada"
  if (code === 400) return "ID de anúncio iválido"
  return "Erro desconhecido"
}