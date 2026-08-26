import { useState } from 'react';

import styles from './AdGallery.module.css';
import buttonStyles from '@styles/buttons.module.css';

import Button from '@components/Button/Button';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from '@components/Icons/Icons';

import { cx } from '@utils/classNames';

import type { AdGalleryProps } from '@models/props';

const previewCount = 5;

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

        {getArrowButton(-1, false)}
        {getArrowButton(1, false)}
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
          className={cx(
            styles.fullMainContainer,
            isClosing && styles.fullMainContainerClosing,
          )}
        >
          <Button
            className={styles.closeFullMain}
            raised={false}
            shadow={false}
            onClick={handleCloseFullscreen}
          >
            <CloseIcon />
          </Button>

          {getArrowButton(-1, true)}

          <img
            className={styles.fullMain}
            src={images[curMainImg]}
            alt="Imagem principal"
            role="button"
            onClick={handleCloseFullscreen}
          />

          {getArrowButton(1, true)}
        </div>
      ) : null}
    </div>
  );

  function getArrowButton(direction: -1 | 1, fullscreen: boolean) {
    const offset = fullscreen ? '24px' : '10px';
    return (
      <Button
        className={cx(styles.arrowButton, fullscreen && styles.fullscreenArrow)}
        raised={false}
        shadow={false}
        style={direction === -1 ? { left: offset } : { right: offset }}
        onClick={() => changeCurMainImg(direction)}
      >
        {direction === -1 ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </Button>
    );
  }

  function getPreviewImage(index: number) {
    if (index >= images.length || index < 0) return null;
    const isSelected = index === curMainImg;
    return (
      <img
        className={cx(
          isSelected && styles.mainPrev,
          styles.prev,
          buttonStyles.button,
        )}
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
      setPreviewStart(images.length - previewCount);
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
