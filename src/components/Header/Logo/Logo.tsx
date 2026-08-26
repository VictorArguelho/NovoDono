import styles from './Logo.module.css';

import Button from '@components/Button/Button';

import { useNavigate } from "react-router-dom";

import logo from '@assets/images/logo.png';

export default function Logo() {
  const navigate = useNavigate();

  return (
    <Button
      className={styles.logo}
      raised={false}
      transparent
      onClick={() => navigate('/home')}
    >
      <img className={styles.logoImg} src={logo} alt="Logo Novo Dono" />
    </Button>
  );
}
