import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterGroup from './FilterGroup';

const title = 'Conservação';
const options = ['Novo', 'Bom', 'Mediano', 'Desgastado'];

describe('FilterGroup', () => {
  it('renders the title and all options', () => {
    render(<FilterGroup title={title} options={options} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    for (const option of options) {
      expect(screen.getByText(option)).toBeInTheDocument();
    }
    expect(screen.getAllByRole('checkbox')).toHaveLength(options.length);
  });

  it('starts collapsed and expands when the title is clicked', async () => {
    const user = userEvent.setup();
    render(<FilterGroup title={title} options={options} />);

    expect(screen.getByText('V')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: new RegExp(title) }));

    expect(screen.getByText('⋀')).toBeInTheDocument();
    expect(screen.queryByText('V')).not.toBeInTheDocument();
  });

  it('collapses again when the title is clicked twice', async () => {
    const user = userEvent.setup();
    render(<FilterGroup title={title} options={options} />);

    const toggle = screen.getByRole('button', { name: new RegExp(title) });
    await user.click(toggle);
    await user.click(toggle);

    expect(screen.getByText('V')).toBeInTheDocument();
  });

  it('allows checking an option', async () => {
    const user = userEvent.setup();
    render(<FilterGroup title={title} options={options} />);

    const [firstCheckbox] = screen.getAllByRole('checkbox');
    expect(firstCheckbox).not.toBeChecked();

    await user.click(firstCheckbox);

    expect(firstCheckbox).toBeChecked();
  });
});
