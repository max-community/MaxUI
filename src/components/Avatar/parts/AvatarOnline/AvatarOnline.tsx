import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './AvatarOnline.module.scss';

export interface AvatarOnlineProps extends ComponentProps<'span'> {}

export const AvatarOnline = forwardRef<HTMLSpanElement, AvatarOnlineProps>((props, forwardedRef) => {
  const {
    className,
    ...rest
  } = props;

  return (
    <span
      ref={forwardedRef}
      className={clsx(styles.AvatarOnline, className)}
      {...rest}
    >
      <span className={styles.AvatarOnline__dot} />
    </span>
  );
});

AvatarOnline.displayName = 'AvatarOnline';
