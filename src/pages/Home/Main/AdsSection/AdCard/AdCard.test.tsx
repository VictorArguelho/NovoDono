import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import AdCard from './AdCard';
import type { Ad } from '@models/Ad';

const ad: Ad = {
  id: '7',
  category: 'Regata',
  description: 'Regata preta quase nova.',
  imagesUrl: ['image-1.jpg'],
  conservation: 'Novo',
  size: 'M',
  location: 'Sarandi, PR',
};

function renderCard() {
  return render(
    <MemoryRouter initialEntries={['/home']}>
      <Routes>
        <Route path="/home" element={<AdCard ad={ad} />} />
        <Route path="/ad/:id" element={<p>ad page</p>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('AdCard (Home)', () => {
  it('renders the ad summary', () => {
    const { container } = renderCard();

    expect(screen.getByRole('heading', { name: 'Regata' })).toBeInTheDocument();
    expect(screen.getByText('Sarandi, PR')).toBeInTheDocument();
    expect(screen.getByText('Novo')).toBeInTheDocument();
    expect(container.querySelector('img')).toHaveAttribute('src', 'image-1.jpg');
  });

  it('navigates to the ad page when clicked', async () => {
    const user = userEvent.setup();
    renderCard();

    await user.click(screen.getByRole('button'));

    expect(screen.getByText('ad page')).toBeInTheDocument();
  });
});
