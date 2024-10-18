import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './AvatarText.module.scss';

export type AvatarTextGradient = 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'custom';

export interface AvatarTextProps extends ComponentProps<'span'> {
  gradient?: AvatarTextGradient
}

export const AvatarText = forwardRef<HTMLSpanElement, AvatarTextProps>((props, forwardedRef) => {
  const {
    className,
    children,
    gradient = 'red',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.AvatarText,
    {
      [styles[`AvatarText_gradient_${gradient}`]]: gradient !== 'custom'
    },
    className
  );

  return (
    <span
      ref={forwardedRef}
      className={rootClassName}
      {...rest}
    >
      <span className={styles.AvatarText__in}>{children}</span>
    </span>
  );
});

AvatarText.displayName = 'AvatarText';
