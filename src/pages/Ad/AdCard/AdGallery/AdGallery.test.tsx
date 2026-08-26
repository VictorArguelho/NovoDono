import { describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AdGallery from './AdGallery';

const images = Array.from({ length: 6 }, (_, i) => `image-${i + 1}.jpg`);

function getMainImage() {
  return screen.getByAltText('Imagem principal') as HTMLImageElement;
}

describe('AdGallery', () => {
  it('renders the first image as main with a position counter', () => {
    render(<AdGallery images={images} />);

    expect(getMainImage().src).toContain('image-1.jpg');
    expect(screen.getByText('1 / 6')).toBeInTheDocument();
  });

  it('renders at most five preview thumbnails', () => {
    render(<AdGallery images={images} />);

    const previews = screen.getAllByAltText(/^Imagem \d+$/);
    expect(previews).toHaveLength(5);
  });

  it('advances to the next image when the right arrow is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<AdGallery images={images} />);

    const [, rightArrow] = container.querySelectorAll('button');
    await user.click(rightArrow);

    expect(getMainImage().src).toContain('image-2.jpg');
    expect(screen.getByText('2 / 6')).toBeInTheDocument();
  });

  it('wraps to the last image when going back from the first', async () => {
    const user = userEvent.setup();
    const { container } = render(<AdGallery images={images} />);

    const [leftArrow] = container.querySelectorAll('button');
    await user.click(leftArrow);

    expect(getMainImage().src).toContain('image-6.jpg');
    expect(screen.getByText('6 / 6')).toBeInTheDocument();
  });

  it('wraps to the first image when advancing past the last', async () => {
    const user = userEvent.setup();
    const { container } = render(<AdGallery images={images} />);

    const [leftArrow, rightArrow] = container.querySelectorAll('button');
    await user.click(leftArrow);
    expect(screen.getByText('6 / 6')).toBeInTheDocument();

    await user.click(rightArrow);

    expect(getMainImage().src).toContain('image-1.jpg');
    expect(screen.getByText('1 / 6')).toBeInTheDocument();
  });

  it('selects a preview image as the new main image on click', async () => {
    const user = userEvent.setup();
    render(<AdGallery images={images} />);

    await user.click(screen.getByAltText('Imagem 3'));

    expect(getMainImage().src).toContain('image-3.jpg');
    expect(screen.getByText('3 / 6')).toBeInTheDocument();
  });

  it('opens fullscreen when the main image is clicked', async () => {
    const user = userEvent.setup();
    render(<AdGallery images={images} />);

    await user.click(getMainImage());

    expect(screen.getAllByAltText('Imagem principal')).toHaveLength(2);
  });

  it('closes fullscreen after the close button is clicked', async () => {
    const user = userEvent.setup();
    render(<AdGallery images={images} />);

    await user.click(getMainImage());
    const [closeButton] = screen
      .getAllByRole('button')
      .filter((button) => button.querySelector('line'));
    await user.click(closeButton);

    await waitFor(() =>
      expect(screen.getAllByAltText('Imagem principal')).toHaveLength(1),
    );
  });

  it('keeps fullscreen mounted during the closing delay', async () => {
    vi.useFakeTimers();
    try {
      render(<AdGallery images={images} />);

      fireEvent.click(getMainImage());
      const fullscreenImage = screen
        .getAllByAltText('Imagem principal')
        .at(-1)!;
      fireEvent.click(fullscreenImage);

      expect(screen.getAllByAltText('Imagem principal')).toHaveLength(2);

      await act(async () => {
        vi.advanceTimersByTime(200);
      });

      expect(screen.getAllByAltText('Imagem principal')).toHaveLength(1);
    } finally {
      vi.useRealTimers();
    }
  });
});
