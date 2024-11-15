import { Slot, Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, type ReactNode } from 'react';

import { hasReactNode } from '../../helpers';
import { type AsChildProp } from '../../types.ts';
import styles from './ToolButton.module.scss';

export interface ToolButtonProps extends ComponentProps<'button'>, AsChildProp {
  icon?: ReactNode
  label?: ReactNode
}

export const ToolButton = forwardRef<HTMLButtonElement, ToolButtonProps>((props, forwardedRef) => {
  const {
    className,
    label,
    icon,
    children,
    asChild,
    ...rest
  } = props;

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={forwardedRef}
      className={clsx(styles.ToolButton, className)}
      {...rest}
    >
      {hasReactNode(icon) && <span className={styles.ToolButton__icon}>{icon}</span>}

      <Slottable>{children}</Slottable>

      {hasReactNode(label) && <span className={styles.ToolButton__label}>{label}</span>}
    </Comp>
  );
});

ToolButton.displayName = 'ToolButton';
