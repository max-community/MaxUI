import { clsx } from 'clsx';
import { type CSSProperties, forwardRef } from 'react';

import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './Container.module.scss';

export interface ContainerProps extends FatherComponentProps {
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
    <FatherComponent
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
