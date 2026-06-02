import styles from './Home.module.css';
import Header from '@components/Header/Header';
import Main from '@components/Main/Main';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Main />
    </div>
  );
}
