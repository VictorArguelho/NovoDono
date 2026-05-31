import styles from './NavBar.module.css';
import buttonStyles from '@styles/buttons.module.css';
import effectsStyles from '@styles/effects.module.css';

import doar from '@images/doar.png';
import chat from '@images/chats.png';
import sobre from '@images/sobre.png';
import contribuir from '@images/contribuir.png';

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <NavButton text="ANUNCIAR" img={doar} />

      <NavButton text="CHAT" img={chat} />

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
