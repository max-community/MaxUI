import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './Text.module.scss';

export interface TextProps extends FatherComponentProps {}

export const Text = forwardRef<HTMLDivElement, TextProps>((props, forwardedRef) => {
  const {
    className,
    ...rest
  } = props;

  return (
    <FatherComponent
      ref={forwardedRef}
      className={clsx(styles.Text, className)}
      {...rest}
    />
  );
});

Text.displayName = 'Text';
