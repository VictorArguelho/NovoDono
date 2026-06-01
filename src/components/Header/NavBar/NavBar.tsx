import styles from './NavBar.module.css';
import buttonStyles from '@styles/buttons.module.css';
import effectsStyles from '@styles/effects.module.css';

import doar from '@images/header/doar.png';
import chat from '@images/header/chats.png';
import sobre from '@images/header/sobre.png';
import contribuir from '@images/header/contribuir.png';

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
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
      className={`${styles.navButton} ${buttonStyles.button} ${buttonStyles.divButton} ${effectsStyles.shadow}`}
      type="button"
    >
      <img className={styles.imgButton} src={img} alt="" />
      <span className={styles.textButton}>{text}</span>
    </button>
  );
}
