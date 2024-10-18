import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './AvatarOverlay.module.scss';

export interface AvatarOverlayProps extends ComponentProps<'span'> {}

export const AvatarOverlay = forwardRef<HTMLSpanElement, AvatarOverlayProps>((props, forwardedRef) => {
  const {
    className,
    ...rest
  } = props;

  return (
    <span
      ref={forwardedRef}
      className={clsx(styles.AvatarOverlay, className)}
      {...rest}
    />
  );
});

AvatarOverlay.displayName = 'AvatarOverlay';
