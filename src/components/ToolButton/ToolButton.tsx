import { Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { forwardRef, type ReactNode } from 'react';

import { hasReactNode } from '../../helpers';
import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './ToolButton.module.scss';

export interface ToolButtonProps extends FatherComponentProps {
  icon?: ReactNode
  label?: ReactNode
}

export const ToolButton = forwardRef<HTMLDivElement, ToolButtonProps>((props, forwardedRef) => {
  const {
    className,
    label,
    icon,
    children,
    ...rest
  } = props;

  return (
    <FatherComponent
      ref={forwardedRef}
      fallbackElement="button"
      className={clsx(styles.ToolButton, className)}
      {...rest}
    >
      {hasReactNode(icon) && <span className={styles.ToolButton__icon}>{icon}</span>}

      <Slottable>{children}</Slottable>

      {hasReactNode(label) && <span className={styles.ToolButton__label}>{label}</span>}
    </FatherComponent>
  );
});

ToolButton.displayName = 'ToolButton';
