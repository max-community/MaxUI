import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import { type AsChildProp } from '../../types.ts';
import styles from './Subhead.module.scss';

export type SubheadVariant = 'subhead' | 'subhead-medium';

export interface SubheadProps extends ComponentProps<'span'>, AsChildProp {
  /** Внешний вид, в соответствии с дизайн-системой */
  variant?: SubheadVariant
}

export const Subhead = forwardRef<HTMLSpanElement, SubheadProps>((props, forwardedRef) => {
  const {
    className,
    variant = 'subhead',
    asChild,
    ...rest
  } = props;

  const Comp = asChild ? Slot : 'span';

  const rootClassName = clsx(
    styles.Subhead,
    styles[`Subhead_variant_${variant}`],
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

Subhead.displayName = 'Subhead';
