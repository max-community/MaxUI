import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, type MouseEventHandler } from 'react';

import { Icon20CloseFilled } from '../../../../icons';
import { SvgButton } from '../../../SvgButton';
import { useAvatarContainerContext } from '../AvatarContainer/AvatarContainerContext.tsx';
import styles from './AvatarCloseButton.module.scss';
import { getButtonSize } from './helpers.ts';

export interface AvatarCloseButtonProps extends ComponentProps<'div'> {}

export const AvatarCloseButton = forwardRef<HTMLDivElement, AvatarCloseButtonProps>((props, forwardedRef) => {
  const {
    className,
    onClick,
    ...rest
  } = props;

  const { size: containerSize } = useAvatarContainerContext();

  const buttonSize = getButtonSize(containerSize);

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    onClick?.(e);
  };

  return (
    <SvgButton
      ref={forwardedRef}
      className={clsx(styles.AvatarCloseButton, className)}
      onClick={clickHandler}
      {...rest}
    >
      <Icon20CloseFilled width={buttonSize} height={buttonSize} />
    </SvgButton>
  );
});

AvatarCloseButton.displayName = 'AvatarCloseButton';
