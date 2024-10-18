import { clsx } from 'clsx';
import { type ComponentProps, type CSSProperties, forwardRef } from 'react';

import styles from './Container.module.scss';

export interface ContainerProps extends ComponentProps<'div'> {
  gap?: number
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>((props, forwardedRef) => {
  const {
    gap = 0,
    style,
    className,
    ...rest
  } = props;

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.Container, className)}
      style={{
        '--OneMe-Container__gap': gap,
        ...style
      } as CSSProperties}
      {...rest}
    />
  );
});

Container.displayName = 'Container';
