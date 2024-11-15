import { Slot, Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, type ElementType, forwardRef, type ReactNode } from 'react';

import { getSubtree, hasReactNode } from '../../helpers';
import { useButtonLikeProps, usePlatform } from '../../hooks';
import { type AsChildProp, type InnerClassNamesProp } from '../../types.ts';
import { EllipsisText } from '../EllipsisText';
import { Ripple } from '../Ripple';
import styles from './Button.module.scss';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonMode = 'primary' | 'secondary' | 'tertiary' | 'link';
export type ButtonAppearance = 'accent' | 'negative' | 'neutral' | 'contrast-static';
export type ButtonInnerElementKey = 'iconBefore' | 'iconAfter' | 'indicator' | 'content';

export interface ButtonProps extends ComponentProps<'button'>, AsChildProp {
  size?: ButtonSize
  mode?: ButtonMode
  appearance?: ButtonAppearance
  stretched?: boolean
  iconBefore?: ReactNode
  iconAfter?: ReactNode
  indicator?: ReactNode
  innerClassNames?: InnerClassNamesProp<ButtonInnerElementKey>
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  const {
    className,
    disabled,
    iconBefore,
    iconAfter,
    indicator,
    children,
    asChild = false,
    innerClassNames,
    stretched = false,
    size = 'medium',
    mode = 'primary',
    appearance = 'accent',
    ...rest
  } = props;

  const rootElement: ElementType = 'button';
  const Comp = asChild ? Slot : rootElement;

  const platform = usePlatform();
  const buttonLikeProps = useButtonLikeProps({ asChild, children, disabled, rootElement });
  const withRipple = platform === 'android' && mode !== 'link' && !disabled;

  const rootClassName = clsx(
    styles.Button,
    styles[`Button_appearance_${appearance}`],
    styles[`Button_mode_${mode}`],
    styles[`Button_size_${size}`], {
      [styles.Button_disabled]: disabled,
      [styles.Button_stretched]: stretched,
      [styles.Button_activeMode_highlight]: !withRipple,
      [styles.Button_activeMode_ripple]: withRipple
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
      {hasReactNode(iconBefore) && (
        <span className={clsx(styles.Button__iconBefore, innerClassNames?.iconBefore)}>
          {iconBefore}
        </span>
      )}

      <Slottable>
        {getSubtree({ asChild, children }, (children) => (
          <EllipsisText
            key="subtree-container"
            className={clsx(styles.Button__content, innerClassNames?.content)}
          >
            {children}
          </EllipsisText>
        ))}
      </Slottable>

      {hasReactNode(indicator) && (
        <span className={clsx(styles.Button__indicator, innerClassNames?.indicator)}>
          {indicator}
        </span>
      )}

      {hasReactNode(iconAfter) && (
        <span className={clsx(styles.Button__iconAfter, innerClassNames?.iconAfter)}>
          {iconAfter}
        </span>
      )}

      {platform === 'android' && <Ripple className={styles.Button__ripple} />}
    </Comp>
  );
});

Button.displayName = 'Button';
