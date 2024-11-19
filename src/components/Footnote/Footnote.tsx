import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import { type AsChildProp } from '../../types';
import styles from './Footnote.module.scss';

export type FootnoteVariant = 'footnote' | 'footnote-medium' | 'footnote-caps';

export interface FootnoteProps extends ComponentProps<'span'>, AsChildProp {
  /** Внешний вид, в соответствии с дизайн-системой */
  variant?: FootnoteVariant
}

export const Footnote = forwardRef<HTMLSpanElement, FootnoteProps>((props, forwardedRef) => {
  const {
    className,
    variant = 'footnote',
    asChild,
    ...rest
  } = props;

  const Comp = asChild ? Slot : 'span';

  const rootClassName = clsx(
    styles.Footnote,
    styles[`Footnote_variant_${variant}`],
    className
  );

  return (
    <Comp
      ref={forwardedRef}
      className={rootClassName}
      {...rest}
    />
  );
});

Footnote.displayName = 'Footnote';
