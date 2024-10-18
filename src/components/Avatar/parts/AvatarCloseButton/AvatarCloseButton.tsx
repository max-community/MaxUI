import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import { Icon20CloseFilled } from '../../../../icons';
import styles from './AvatarCloseButton.module.scss';

export interface AvatarCloseButtonProps extends ComponentProps<'button'> {}

export const AvatarCloseButton = forwardRef<HTMLButtonElement, AvatarCloseButtonProps>((props, forwardedRef) => {
  const {
    className,
    ...rest
  } = props;

  return (
    <button
      ref={forwardedRef}
      className={clsx(styles.AvatarCloseButton, className)}
      {...rest}
    >
      <Icon20CloseFilled />
    </button>
  );
});

AvatarCloseButton.displayName = 'AvatarCloseButton';
