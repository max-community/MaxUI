import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './Footnote.module.scss';

export type FootnoteVariant = 'footnote' | 'footnote-medium' | 'footnote-caps';

export interface FootnoteProps extends FatherComponentProps {
  /** Внешний вид, в соответствии с дизайн-системой */
  variant?: FootnoteVariant
}

export const Footnote = forwardRef<HTMLDivElement, FootnoteProps>((props, forwardedRef) => {
  const {
    className,
    variant = 'footnote',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Footnote,
    styles[`Footnote_variant_${variant}`],
    className
  );

  return (
    <FatherComponent
      ref={forwardedRef}
      className={rootClassName}
      {...rest}
    />
  );
});

Footnote.displayName = 'Footnote';
