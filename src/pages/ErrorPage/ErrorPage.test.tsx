import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import ErrorPage from './ErrorPage';

function renderWithCode(code: string) {
  return render(
    <MemoryRouter initialEntries={[`/error/${code}`]}>
      <Routes>
        <Route path="/error/:code" element={<ErrorPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('ErrorPage', () => {
  it('shows the not found message for code 404', () => {
    renderWithCode('404');

    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();
    expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
  });

  it('shows the invalid ad id message for code 400', () => {
    renderWithCode('400');

    expect(screen.getByRole('heading', { name: '400' })).toBeInTheDocument();
    expect(screen.getByText('ID de anúncio iválido')).toBeInTheDocument();
  });

  it('shows an unknown error message for other codes', () => {
    renderWithCode('500');

    expect(screen.getByRole('heading', { name: '500' })).toBeInTheDocument();
    expect(screen.getByText('Erro desconhecido')).toBeInTheDocument();
  });

  it('renders a link back to the home page', () => {
    renderWithCode('404');

    const link = screen.getByRole('link', {
      name: 'Voltar para página inicial',
    });
    expect(link).toHaveAttribute('href', '/');
  });
});
