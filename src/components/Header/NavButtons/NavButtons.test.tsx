import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import NavButtons from './NavButtons';

describe('NavButtons', () => {
  it('renders all navigation buttons', () => {
    render(<NavButtons className="" />);

    for (const text of ['ANUNCIAR', 'CONVERSAS', 'SOBRE', 'CONTRIBUIR']) {
      expect(screen.getByRole('button', { name: text })).toBeInTheDocument();
    }
  });

  it('applies the given class to the nav element', () => {
    render(<NavButtons className="extra-class" />);

    expect(screen.getByRole('navigation')).toHaveClass('extra-class');
  });
});
