import { Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { forwardRef, type ReactNode } from 'react';

import { getSubtree, hasReactNode } from '../../helpers';
import { useButtonLikeProps, usePlatform } from '../../hooks';
import { type InnerClassNamesProp } from '../../types.ts';
import { EllipsisText } from '../EllipsisText';
import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import { Ripple } from '../Ripple';
import styles from './Button.module.scss';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonMode = 'primary' | 'secondary' | 'tertiary' | 'link';
export type ButtonAppearance = 'accent' | 'negative' | 'neutral' | 'contrast-static';
export type ButtonInnerElementKey = 'iconBefore' | 'iconAfter' | 'indicator' | 'content';

export interface ButtonProps extends FatherComponentProps {
  size?: ButtonSize
  mode?: ButtonMode
  appearance?: ButtonAppearance
  disabled?: boolean
  stretched?: boolean
  iconBefore?: ReactNode
  iconAfter?: ReactNode
  indicator?: ReactNode
  innerClassNames?: InnerClassNamesProp<ButtonInnerElementKey>
}

export const Button = forwardRef<HTMLDivElement, ButtonProps>((props, forwardedRef) => {
  const {
    className,
    disabled,
    iconBefore,
    iconAfter,
    indicator,
    children,
    asChild = false,
    fallbackElement = 'button',
    innerClassNames,
    stretched = false,
    size = 'medium',
    mode = 'primary',
    appearance = 'accent',
    ...rest
  } = props;

  const platform = usePlatform();
  const buttonLikeProps = useButtonLikeProps({ asChild, children, disabled, fallbackElement });

  const withRipple = platform === 'android' && mode !== 'link';

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
    <FatherComponent
      ref={forwardedRef}
      className={rootClassName}
      asChild={asChild}
      fallbackElement={fallbackElement}
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

      {platform === 'android' && !disabled && <Ripple className={styles.Button__ripple} />}
    </FatherComponent>
  );
});

Button.displayName = 'Button';
