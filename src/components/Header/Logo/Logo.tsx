import styles from './Logo.module.css';
import buttonStyles from '@styles/buttons.module.css';
import effectsStyles from '@styles/effects.module.css';

import { useNavigate } from "react-router-dom";

import logo from '@assets/images/logo.png';

export default function Logo() {
  const navigate = useNavigate();

  return (
    <button
      className={`${styles.logo} ${buttonStyles.divButton} ${effectsStyles.shadow}`}
      type="button"
      onClick={() => navigate('/home')}
    >
      <img className={styles.logoImg} src={logo} alt="Logo Novo Dono" />
    </button>
  );
}
