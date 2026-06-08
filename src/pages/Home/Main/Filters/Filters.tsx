import { useState } from 'react';
import styles from './Filters.module.css';
import buttonStyles from '@styles/buttons.module.css'

import FilterGroup from './FilterGroup/FilterGroup';

export default function Filters() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={styles.filters}>
      <button
        className={`${styles.colapseButton} ${buttonStyles.button}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Filtros <' : 'Filtros >'}
      </button>

      <div className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}>
        <FilterGroup
          title="Conservação"
          options={['Novo', 'Bom', 'Mediano', 'Desgastado']}
        />

        <FilterGroup
          title="Gênero"
          options={['Feminino', 'Masculino', 'Neutro']}
        />

        <FilterGroup
          title="Roupas de cima"
          options={[
            'Camiseta manga curta',
            'Camiseta manga longa',
            'Blusa',
            'Regata',
            'Vestido',
          ]}
        />

        <FilterGroup
          title="Roupas de baixo"
          options={['Calça', 'Shorts', 'Bermuda', 'Saia']}
        />

        <FilterGroup
          title="Calçados"
          options={['Chinelo', 'Tênis', 'Sandália', 'Crocs', 'Salto', 'Bota']}
        />

        <FilterGroup
          title="Tamanhos Recém Nascido"
          options={[
            'RN - P',
            'RN - M',
            'RN - G',
            'RN - GG',
            'RN - 1',
            'RN - 2',
            'RN - 3',
          ]}
        />

        <FilterGroup
          title="Tamanhos Infanto Juvenil"
          options={['4', '6', '8', '10', '12', '14', '16', '18', '20']}
        />

        <FilterGroup
          title="Tamanhos Adulto"
          options={['PPP', 'PP', 'P', 'M', 'G', 'GG', 'GGG']}
        />
      </div>
    </aside>
  );
}
