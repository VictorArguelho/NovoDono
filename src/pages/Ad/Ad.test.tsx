import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import Ad from './Ad';
import { createAd } from '@services/AdsService';
import type { Ad as AdModel } from '@models/Ad';

const ad: AdModel = {
  id: '1',
  category: 'Vestido',
  description: 'Vestido preto novinho.',
  imagesUrl: ['image-1.jpg', 'image-2.jpg'],
  conservation: 'Novo',
  size: 'P',
  location: 'Maringá, PR',
};

function renderAtPath(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/ad/:id" element={<Ad />} />
        <Route path="/error/:code" element={<p>error page</p>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('Ad', () => {
  it('renders the ad details for a valid id', () => {
    createAd(ad);

    renderAtPath('/ad/1');

    expect(
      screen.getByRole('heading', { name: 'Vestido' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Vestido preto novinho.')).toBeInTheDocument();
  });

  it('redirects to the error page when the ad does not exist', () => {
    renderAtPath('/ad/999');

    expect(screen.getByText('error page')).toBeInTheDocument();
  });
});
