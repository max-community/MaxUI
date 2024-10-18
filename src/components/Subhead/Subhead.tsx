import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './Subhead.module.scss';

export type SubheadVariant = 'subhead' | 'subhead-medium';

export interface SubheadProps extends FatherComponentProps {
  /** Внешний вид, в соответствии с дизайн-системой */
  variant?: SubheadVariant
}

export const Subhead = forwardRef<HTMLDivElement, SubheadProps>((props, forwardedRef) => {
  const {
    className,
    variant = 'subhead',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Subhead,
    styles[`Subhead_variant_${variant}`],
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

Subhead.displayName = 'Subhead';
