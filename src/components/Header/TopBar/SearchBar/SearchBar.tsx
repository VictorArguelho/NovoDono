import styles from './SearchBar.module.css';
import buttonStyles from '@styles/buttons.module.css';
import effectsStyles from '@styles/effects.module.css'

import searchIcon from '@images/header/search-icon.png';

export default function SearchBar() {
  return (
    <form className={`${styles.searchBar} ${effectsStyles.shadow}`}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Busque por roupas"
      />

      <button
        className={`${styles.searchButton} ${buttonStyles.divButton} ${buttonStyles.button}`}
        type="button"
      >
        <img
          className={styles.searchIcon}
          src={searchIcon}
          alt="Ícone de pesquisa"
        />
      </button>
    </form>
  );
}
