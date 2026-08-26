import { useState } from 'react';

import styles from './AdGallery.module.css';
import buttonStyles from '@styles/buttons.module.css';

import type { AdGalleryProps } from '@models/props';

const previewCount = 5;

function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function AdGallery({ images }: AdGalleryProps) {
  const [curMainImg, setMainImg] = useState(0);
  const [previewStart, setPreviewStart] = useState(0);
  const [mainFullscreen, setMainFullscreen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function handleCloseFullscreen() {
    setIsClosing(true);
    setTimeout(() => {
      setMainFullscreen(false);
      setIsClosing(false);
    }, 200);
  }

  if (images.length === 0) {
    return (
      <div className={styles.adGallery}>
        <p>Este anúncio não possui imagens.</p>
      </div>
    );
  }

  return (
    <div className={styles.adGallery}>
      <div className={styles.mainContainer}>
        <img
          className={styles.main}
          src={images[curMainImg]}
          alt="Imagem principal"
          role="button"
          onClick={() => setMainFullscreen(true)}
        />

        <div className={styles.currentMain}>
          <span>{`${curMainImg + 1} / ${images.length}`}</span>
        </div>

        <button
          className={styles.arrowButton}
          style={{ left: '10px' }}
          onClick={() => changeCurMainImg(-1)}
        >
          <ChevronLeft />
        </button>
        <button
          className={styles.arrowButton}
          style={{ right: '10px' }}
          onClick={() => changeCurMainImg(1)}
        >
          <ChevronRight />
        </button>
      </div>

      <div
        className={styles.prevContainer}
        style={
          {
            '--preview-count': previewCount,
          } as React.CSSProperties
        }
      >
        {Array.from({ length: previewCount }, (_, i) =>
          getPreviewImage(previewStart + i),
        )}
      </div>

      {mainFullscreen ? (
        <div
          className={`${styles.fullMainContainer} ${isClosing ? styles.fullMainContainerClosing : ''}`}
        >
          <button className={styles.closeFullMain} onClick={handleCloseFullscreen}>
            <XIcon />
          </button>

          <button
            className={`${styles.arrowButton} ${styles.fullscreenArrow}`}
            style={{ left: '24px' }}
            onClick={() => changeCurMainImg(-1)}
          >
            <ChevronLeft />
          </button>

          <img
            className={styles.fullMain}
            src={images[curMainImg]}
            alt="Imagem principal"
            role="button"
            onClick={handleCloseFullscreen}
          />

          <button
            className={`${styles.arrowButton} ${styles.fullscreenArrow}`}
            style={{ right: '24px' }}
            onClick={() => changeCurMainImg(1)}
          >
            <ChevronRight />
          </button>
        </div>
      ) : null}
    </div>
  );

  function getPreviewImage(index: number) {
    if (index >= images.length || index < 0) return null;
    const isSelected = index === curMainImg;
    return (
      <img
        className={`${isSelected ? styles.mainPrev : ''} ${styles.prev} ${buttonStyles.button}`}
        key={images[index]}
        src={images[index]}
        alt={`Imagem ${index + 1}`}
        role="button"
        onClick={() => setMainImg(index)}
      />
    );
  }

  function changeCurMainImg(number: number) {
    if (curMainImg === 0 && number === -1) {
      setMainImg(images.length - 1);
      setPreviewStart(Math.max(images.length - previewCount, 0));
      return;
    }
    if (curMainImg === images.length - 1 && number === 1) {
      setMainImg(0);
      setPreviewStart(0);
      return;
    }
    const nextImg = curMainImg + number;

    setMainImg(nextImg);

    if (nextImg === previewStart && nextImg !== 0) {
      setPreviewStart((prev) => prev - 1);
    }

    if (
      nextImg === previewStart + (previewCount - 1) &&
      nextImg !== images.length - 1
    ) {
      setPreviewStart((prev) => prev + 1);
    }
  }
}