import { clsx } from 'clsx';
import { type CSSProperties, forwardRef } from 'react';

import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './EllipsisText.module.scss';

export interface EllipsisTextProps extends FatherComponentProps {
  /**
   * Максимальное количество видимых строк
   *
   * FIY: при `maxLines > 1` используется свойство line-clamp, которое поддерживается не всеми версиями браузеров
   *
   * https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp
   */
  maxLines?: number
}

export const EllipsisText = forwardRef<HTMLDivElement, EllipsisTextProps>((props, forwardedRef) => {
  const {
    className,
    maxLines = 1,
    style,
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.EllipsisText,
    {
      [styles.EllipsisText_multiline]: maxLines > 1,
      [styles.EllipsisText_singleLine]: maxLines === 1
    },
    className
  );

  return (
    <FatherComponent
      ref={forwardedRef}
      className={rootClassName}
      fallbackElement="span"
      style={{
        '--OneMe-EllipsisText_linesCount': maxLines,
        ...style
      } as CSSProperties}
      {...rest}
    />
  );
});

EllipsisText.displayName = 'EllipsisText';
