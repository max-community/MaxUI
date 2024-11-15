import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import { type AsChildProp } from '../../types.ts';
import styles from './Title.module.scss';

export type TitleVariant = 'title1' | 'title2' | 'title2-regular' | 'title3' | 'title3-regular';

export interface TitleProps extends ComponentProps<'span'>, AsChildProp {
  /** Внешний вид, в соответствии с дизайн-системой */
  variant?: TitleVariant
}

export const Title = forwardRef<HTMLSpanElement, TitleProps>((props, forwardedRef) => {
  const {
    className,
    variant = 'title1',
    asChild,
    ...rest
  } = props;

  const Comp = asChild ? Slot : 'span';

  const rootClassName = clsx(
    styles.Title,
    styles[`Title_variant_${variant}`],
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

Title.displayName = 'Title';
