import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import { type AsChildProp } from '../../types.ts';
import styles from './Headline.module.scss';

export type HeadlineVariant = 'headline1' | 'headline2';

export interface HeadlineProps extends ComponentProps<'span'>, AsChildProp {
  /** Внешний вид, в соответствии с дизайн-системой */
  variant?: HeadlineVariant
}

export const Headline = forwardRef<HTMLSpanElement, HeadlineProps>((props, forwardedRef) => {
  const {
    className,
    variant = 'headline1',
    asChild,
    ...rest
  } = props;

  const Comp = asChild ? Slot : 'span';

  const rootClassName = clsx(
    styles.Headline,
    styles[`Headline_variant_${variant}`],
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

Headline.displayName = 'Headline';
