import { useState } from 'react';

import styles from './AdGallery.module.css';
import buttonStyles from '@styles/buttons.module.css';

import next from '@assets/images/next.png';
import back from '@assets/images/back.png';

type AdGalleryProps = {
  images: string[];
};

export default function AdGallery({ images }: AdGalleryProps) {
  const [curMainImg, setMainImg] = useState(0);
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

      <div className={styles.prevContainer}>
        {images.map((image, index) => (
          <img
            className={`${styles.prev} ${buttonStyles.button}`}
            key={image}
            src={image}
            alt={`Imagem ${index + 1}`}
            role="button"
            onClick={() => setMainImg(index)}
          />
        ))}
      </div>

      <FullMain />
    </div>
  );

  function changeCurMainImg(number: number) {
    if (curMainImg === 0 && number === -1) {
      setMainImg(images.length - 1);
      return;
    }
    if (curMainImg === images.length - 1 && number === 1) {
      setMainImg(0);
      return;
    }
    setMainImg(curMainImg + number);
  }

  function FullMain() {
    if (!mainFullscreen) return null;
    return (
      <div
        className={styles.fullMainContainer}
        onClick={() => setMainFullscreen(false)}
      >
        <img
          className={styles.fullMain}
          src={images[curMainImg]}
          alt="Imagem principal"
          role="button"
          onClick={() => setMainFullscreen(false)}
        />
      </div>
    );
  }
}
