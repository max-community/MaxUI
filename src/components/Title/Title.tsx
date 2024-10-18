import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './Title.module.scss';

export type TitleVariant = 'title1' | 'title2' | 'title2-regular' | 'title3' | 'title3-regular';

export interface TitleProps extends FatherComponentProps {
  /** Внешний вид, в соответствии с дизайн-системой */
  variant?: TitleVariant
}

export const Title = forwardRef<HTMLDivElement, TitleProps>((props, forwardedRef) => {
  const {
    className,
    variant = 'title1',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Title,
    styles[`Title_variant_${variant}`],
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

Title.displayName = 'Title';
