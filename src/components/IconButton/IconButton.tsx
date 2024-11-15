import { Slot, Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, type ElementType, forwardRef } from 'react';

import { getSubtree } from '../../helpers';
import { useButtonLikeProps, usePlatform } from '../../hooks';
import { type AsChildProp, type InnerClassNamesProp } from '../../types.ts';
import { Ripple } from '../Ripple';
import styles from './IconButton.module.scss';

export type IconButtonSize = 'small' | 'medium' | 'large';
export type IconButtonMode = 'primary' | 'secondary' | 'tertiary' | 'link';
export type IconButtonAppearance = 'accent' | 'negative' | 'neutral' | 'contrast-static';
export type IconButtonInnerElementKey = 'content';

export interface IconButtonProps extends ComponentProps<'button'>, AsChildProp {
  size?: IconButtonSize
  mode?: IconButtonMode
  appearance?: IconButtonAppearance
  disabled?: boolean
  innerClassNames?: InnerClassNamesProp<IconButtonInnerElementKey>
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, forwardedRef) => {
  const {
    children,
    className,
    disabled,
    innerClassNames,
    asChild = false,
    size = 'medium',
    mode = 'primary',
    appearance = 'accent',
    ...rest
  } = props;

  const rootElement: ElementType = 'button';
  const Comp = asChild ? Slot : rootElement;

  const platform = usePlatform();
  const buttonLikeProps = useButtonLikeProps({ asChild, children, disabled, fallbackElement: rootElement });

  const withRipple = platform === 'android' && mode !== 'link';

  const rootClassName = clsx(
    styles.IconButton,
    styles[`IconButton_appearance_${appearance}`],
    styles[`IconButton_mode_${mode}`],
    styles[`IconButton_size_${size}`], {
      [styles.IconButton_disabled]: disabled,
      [styles.IconButton_activeMode_highlight]: !withRipple,
      [styles.IconButton_activeMode_ripple]: withRipple
    },
    className
  );

  return (
    <Comp
      ref={forwardedRef}
      className={rootClassName}
      {...buttonLikeProps}
      {...rest}
    >
      <Slottable>
        {getSubtree({ asChild, children }, (children) => (
          <span
            key="subtree-container"
            className={clsx(styles.IconButton__content, innerClassNames?.content)}
          >
            {children}
          </span>
        ))}
      </Slottable>

      {platform === 'android' && !disabled && <Ripple className={styles.IconButton__ripple} />}
    </Comp>
  );
});

IconButton.displayName = 'IconButton';
