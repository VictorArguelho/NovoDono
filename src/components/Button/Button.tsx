import buttonStyles from '@styles/buttons.module.css';
import effectsStyles from '@styles/effects.module.css';

import { cx } from '@utils/classNames';

import type { ButtonProps } from '@models/props';

export default function Button({
  className,
  raised = true,
  transparent = false,
  shadow = true,
  style,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={cx(
        className,
        raised && buttonStyles.button,
        transparent && buttonStyles.divButton,
        shadow && effectsStyles.shadow,
      )}
      type="button"
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
