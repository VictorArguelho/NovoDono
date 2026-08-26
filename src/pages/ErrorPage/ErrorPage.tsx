import styles from './ErrorPage.module.css';
import buttonStyles from '@styles/buttons.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { cx } from '@utils/classNames';

const messages: Record<number, string> = {
  400: "ID de anúncio inválido",
  404: "Página não encontrada",
  500: "Erro interno da aplicação",
};

export default function ErrorPage() {
  const { code } = useParams();
  const parsedCode = code !== undefined ? Number.parseInt(code, 10) : Number.NaN;
  const knownCode = Number.isInteger(parsedCode) && parsedCode in messages;

  return (
    <div className={styles.container}>
      <h1 className={styles.error}>{knownCode ? parsedCode : "Erro"}</h1>
      <p className={styles.text}>
        {knownCode ? messages[parsedCode] : "Erro desconhecido"}
      </p>
      <Link to="/" className={cx(styles.homeLink, buttonStyles.pill, buttonStyles.button)}>Voltar para página inicial</Link>
    </div>
  );
}
