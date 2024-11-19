import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import { type AsChildProp } from '../../types';
import styles from './Text.module.scss';

export interface TextProps extends ComponentProps<'span'>, AsChildProp {}

export const Text = forwardRef<HTMLSpanElement, TextProps>((props, forwardedRef) => {
  const {
    className,
    asChild,
    ...rest
  } = props;

  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      ref={forwardedRef}
      className={clsx(styles.Text, className)}
      {...rest}
    />
  );
});

Text.displayName = 'Text';
