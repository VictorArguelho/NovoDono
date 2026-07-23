import { useState } from 'react';

import styles from './AdGallery.module.css';
import buttonStyles from '@styles/buttons.module.css';

import next from '@assets/images/next.png';
import back from '@assets/images/back.png';

const previewCount = 5;

import type { AdGalleryProps } from '@models/props';

export default function AdGallery({ images }: AdGalleryProps) {
  const [curMainImg, setMainImg] = useState(0);
  const [previewStart, setPreviewStart] = useState(0);
  const [mainFullscreen, setMainFullscreen] = useState(false);

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
          className={`${styles.back} ${buttonStyles.divButton}`}
          onClick={() => changeCurMainImg(-1)}
        >
          <img className={styles.navigator} src={back} alt="Próxima imagem" />
        </button>
        <button
          className={`${styles.next} ${buttonStyles.divButton}`}
          onClick={() => changeCurMainImg(1)}
        >
          <img className={styles.navigator} src={next} alt="Imagem anterior" />
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
        <div className={styles.fullMainContainer}>
          <button
            className={styles.closeFullMain}
            onClick={() => setMainFullscreen(false)}
          >
            X
          </button>

          <button
            className={`${styles.back} ${buttonStyles.divButton}`}
            onClick={() => changeCurMainImg(-1)}
          >
            <img className={styles.navigator} src={back} alt="Próxima imagem" />
          </button>

          <img
            className={styles.fullMain}
            src={images[curMainImg]}
            alt="Imagem principal"
            role="button"
            onClick={() => setMainFullscreen(true)}
          />

          <button
            className={`${styles.next} ${buttonStyles.divButton}`}
            onClick={() => changeCurMainImg(1)}
          >
            <img
              className={styles.navigator}
              src={next}
              alt="Imagem anterior"
            />
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
