import styles from './TopBar.module.css';
import logo from '@images/logo.png';
import searchIcon from '@images/search-icon.png';

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={`${styles.wrapper} ${styles.wrapperLeft}`}>
        <img className={styles.logo} src={logo} alt="Logo Novo Dono" />
      </div>

      <div className={`${styles.wrapper} ${styles.wrapperCenter}`}>
        <form className={styles.searchBar}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Busque por roupas"
          />

          <button className={styles.searchButton} type="button">
            <img
              className={styles.searchIcon}
              src={searchIcon}
              alt="Ícone de pesquisa"
            />
          </button>
        </form>
      </div>

      <div className={`${styles.wrapper} ${styles.wrapperRight}`}>
        <div className={styles.authButtons}>
          <button
            className={`${styles.authButton} ${styles.signupButton}`}
            type="button"
          >
            CADASTRAR-SE
          </button>
          <button
            className={`${styles.authButton} ${styles.loginButton}`}
            type="button"
          >
            ENTRAR
          </button>
        </div>
      </div>
    </div>
  );
}
