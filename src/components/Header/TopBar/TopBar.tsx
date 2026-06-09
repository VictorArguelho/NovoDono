import styles from './TopBar.module.css';

import LogoButton from './LogoButton/LogoButton';
import SearchBar from './SearchBar/SearchBar';
import AuthButtons from './AuthButtons/AuthButtons';

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={`${styles.section} ${styles.logoSection} `}>
        <LogoButton />
      </div>
      <div className={`${styles.section} ${styles.searchBarSection}`}>
        <SearchBar />
      </div>
      <div className={`${styles.section} ${styles.authButtonsSection}`}>
        <AuthButtons />
      </div>
    </div>
  );
}
