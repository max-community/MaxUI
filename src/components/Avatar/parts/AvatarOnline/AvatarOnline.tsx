import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import { useAvatarContainerContext } from '../AvatarContainer/AvatarContainerContext.tsx';
import styles from './AvatarOnline.module.scss';
import { getDotContainerSize } from './helpers.ts';

export interface AvatarOnlineProps extends ComponentProps<'span'> {}

// todo подумать над переименованием компонента в <Avatar.OnlineDot />
export const AvatarOnline = forwardRef<HTMLSpanElement, AvatarOnlineProps>((props, forwardedRef) => {
  const {
    className,
    ...rest
  } = props;

  const { size: avatarContainerSize } = useAvatarContainerContext();

  const size = getDotContainerSize(avatarContainerSize);

  const rootClassName = clsx(
    styles.AvatarOnline,
    styles[`AvatarOnline_size_${size}`],
    className
  );

  return (
    <span
      ref={forwardedRef}
      className={rootClassName}
      {...rest}
    >
      <span className={styles.AvatarOnline__dot} />
    </span>
  );
});

AvatarOnline.displayName = 'AvatarOnline';
