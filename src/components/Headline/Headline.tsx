import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './Headline.module.scss';

export type HeadlineVariant = 'headline1' | 'headline2';

export interface HeadlineProps extends FatherComponentProps {
  /** Внешний вид, в соответствии с дизайн-системой */
  variant?: HeadlineVariant
}

export const Headline = forwardRef<HTMLDivElement, HeadlineProps>((props, forwardedRef) => {
  const {
    className,
    variant = 'headline1',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Headline,
    styles[`Headline_variant_${variant}`],
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

Headline.displayName = 'Headline';
