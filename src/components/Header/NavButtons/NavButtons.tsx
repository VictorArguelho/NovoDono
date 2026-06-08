import styles from './NavButtons.module.css';
import buttonStyles from '@styles/buttons.module.css';
import effectsStyles from '@styles/effects.module.css';

import doar from '@assets/images/header/doar.png';
import chat from '@assets/images/header/chats.png';
import sobre from '@assets/images/header/sobre.png';
import contribuir from '@assets/images/header/contribuir.png';

type NavButtonsProps = {
  className: string;
}

export default function NavButtons({className} : NavButtonsProps) {
  return (
    <nav className={`${styles.navButtons} ${className ?? ''}`}>
      <NavButton text="ANUNCIAR" img={doar} />

      <NavButton text="CONVERSAS" img={chat} />

      <NavButton text="SOBRE" img={sobre} />

      <NavButton text="CONTRIBUIR" img={contribuir} />
    </nav>
  );
}

type NavButtonProps = {
  text: string;
  img: string;
};

function NavButton({ text, img }: NavButtonProps) {
  return (
    <button
      className={`${styles.button} ${buttonStyles.button} ${buttonStyles.divButton} ${effectsStyles.shadow}`}
      type="button"
    >
      <img className={styles.image} src={img} alt="" />
      <span className={styles.text}>{text}</span>
    </button>
  );
}
