import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import AdInfo from './AdInfo';
import type { Ad } from '@models/Ad';

const ad: Ad = {
  id: '1',
  category: 'Camiseta manga longa',
  description: 'Camiseta azul em um estado bom.',
  imagesUrl: ['image-1.jpg'],
  conservation: 'Bom',
  size: 'G',
  location: 'Maringá, PR',
};

describe('AdInfo', () => {
  it('renders all the ad information', () => {
    render(<AdInfo ad={ad} />);

    expect(
      screen.getByRole('heading', { name: 'Camiseta manga longa' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Camiseta azul em um estado bom.'),
    ).toBeInTheDocument();
    expect(screen.getByText('Tamanho: G')).toBeInTheDocument();
    expect(
      screen.getByText('Estado de conservação: Bom'),
    ).toBeInTheDocument();
    expect(screen.getByText('Localização: Maringá, PR')).toBeInTheDocument();
  });
});
