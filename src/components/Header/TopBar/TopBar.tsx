import styles from './TopBar.module.css';

import TripleSection from '@components/layout/TripleSection/TripleSection';
import LogoButton from './LogoButton/LogoButton';
import SearchBar from './SearchBar/SearchBar';
import AuthButtons from './AuthButtons/AuthButtons';

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <TripleSection
        left={<LogoButton />}
        center={<SearchBar />}
        right={<AuthButtons />}
      />
    </div>
  );
}
