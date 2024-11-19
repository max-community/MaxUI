import { Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, type ReactNode } from 'react';

import { getSubtree, hasReactNode } from '../../helpers';
import { type AsChildProp, type InnerClassNamesProp } from '../../types.ts';
import { Tappable } from '../Tappable';
import styles from './ToolButton.module.scss';

export type ToolButtonElementKey = 'label' | 'icon';

export interface ToolButtonProps extends ComponentProps<'button'>, AsChildProp {
  icon?: ReactNode
  innerClassNames?: InnerClassNamesProp<ToolButtonElementKey>
}

export const ToolButton = forwardRef<HTMLButtonElement, ToolButtonProps>((props, forwardedRef) => {
  const {
    className,
    icon,
    children,
    asChild,
    innerClassNames,
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.ToolButton,
    {
      [styles.ToolButton_withLabel]: hasReactNode(children)
    },
    className
  );

  return (
    <Tappable
      ref={forwardedRef}
      className={rootClassName}
      as="button"
      parentChildren={children}
      asChild={asChild}
      {...rest}
    >
      {hasReactNode(icon) && (
        <span className={clsx(styles.ToolButton__icon, innerClassNames?.icon)}>
          {icon}
        </span>
      )}

      {hasReactNode(children) && (
        <Slottable>
          {getSubtree({ asChild, children }, (children) => (
            <div key="subtree-container" className={clsx(styles.ToolButton__label, innerClassNames?.label)}>
              {children}
            </div>
          ))}
        </Slottable>
      )}
    </Tappable>
  );
});

ToolButton.displayName = 'ToolButton';
