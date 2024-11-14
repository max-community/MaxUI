import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import {
  type AllHTMLAttributes, type ElementType,
  forwardRef,
  isValidElement
} from 'react';

import { useButtonLikeProps, usePlatform } from '../../hooks';
import { type AsChildProp, type MergeProps } from '../../types';
import { Ripple } from '../Ripple';
import styles from './Tappable.module.scss';

type TappableOwnProps = {
  as?: ElementType
} & AsChildProp;

export type TappableProps = MergeProps<AllHTMLAttributes<HTMLElement>, TappableOwnProps>;

export const Tappable = forwardRef<HTMLElement, TappableProps>((props, forwardedRef) => {
  const {
    className,
    disabled,
    asChild,
    children,
    as = 'div',
    ...rest
  } = props;

  const Comp = asChild ? Slot : as;

  const platform = usePlatform();
  const buttonLikeProps = useButtonLikeProps({ asChild, children, disabled, fallbackElement: as });
  const hasAction = !!rest?.onClick || !!rest.href || (isValidElement(children) && ('href' in children.props || 'onClick' in children.props));
  const withRipple = platform === 'android' && hasAction && !disabled;

  const rootClassName = clsx(
    styles.Tappable,
    {
      [styles.Tappable_interactive]: hasAction,
      [styles.Tappable_disabled]: disabled,
      [styles.Tappable_activeMode_highlight]: !withRipple,
      [styles.Tappable_activeMode_ripple]: withRipple
    },
    className
  );

  return (
    <Comp
      ref={forwardedRef}
      className={rootClassName}
      asChild={asChild}
      {...buttonLikeProps}
      {...rest}
    >
      {children}

      {withRipple && <Ripple className={styles.Tappable__ripple} />}
    </Comp>
  );
});

Tappable.displayName = 'Tappable';
