import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, type CSSProperties, forwardRef } from 'react';

import { type AsChildProp } from '../../types.ts';
import styles from './Container.module.scss';

export interface ContainerProps extends ComponentProps<'div'>, AsChildProp {
  gap?: number
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>((props, forwardedRef) => {
  const {
    gap = 0,
    style,
    className,
    asChild,
    ...rest
  } = props;

  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      ref={forwardedRef}
      className={clsx(styles.Container, className)}
      style={{
        '--OneMe-Container_gap': gap,
        ...style
      } as CSSProperties}
      {...rest}
    />
  );
});

Container.displayName = 'Container';
