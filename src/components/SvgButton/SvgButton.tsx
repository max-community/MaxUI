import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './SvgButton.module.scss';

export interface SvgButtonProps extends FatherComponentProps {
  disabled?: boolean // todo HTMLButtonElement
}

export const SvgButton = forwardRef<HTMLDivElement, SvgButtonProps>((props, forwardedRef) => {
  const { className, ...rest } = props;

  return (
    <FatherComponent
      ref={forwardedRef}
      fallbackElement="button"
      className={clsx(styles.SvgButton, className)}
      {...rest}
    />
  );
});

SvgButton.displayName = 'SvgButton';
