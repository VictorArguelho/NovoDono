import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AdsSection from './AdsSection';
import { createAd } from '@services/AdsService';
import type { Ad } from '@models/Ad';

function makeAd(id: string, category: string): Ad {
  return {
    id,
    category,
    description: 'Descrição',
    imagesUrl: [`image-${id}.jpg`],
    conservation: 'Bom',
    size: 'M',
    location: 'Maringá, PR',
  };
}

describe('AdsSection', () => {
  it('renders a card for each stored ad', () => {
    createAd(makeAd('1', 'Camiseta'));
    createAd(makeAd('2', 'Vestido'));

    render(
      <MemoryRouter>
        <AdsSection />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Camiseta' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Vestido' })).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('renders nothing when there are no ads', () => {
    render(
      <MemoryRouter>
        <AdsSection />
      </MemoryRouter>,
    );

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
