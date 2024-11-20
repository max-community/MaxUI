import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './Spinner.module.scss';

export type SpinnerAppearance = 'primary' | 'themed' | 'primary-static' | 'contrast' | 'contrast-static' | 'negative';
export type SpinnerSize = 20 | 24 | number;

export interface SpinnerProps extends ComponentProps<'span'> {
  size?: SpinnerSize
  appearance?: SpinnerAppearance
}

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>((props, forwardedRef) => {
  const {
    className,
    size = 20,
    appearance = 'primary',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Spinner,
    styles[`Spinner_appearance_${appearance}`],
    className
  );

  return (
    <span
      ref={forwardedRef}
      role="status"
      className={rootClassName}
      {...rest}
    >
      {/* https://habr.com/ru/sandbox/227438/ */}
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
        <clipPath id="spinnerPath">
          <path
            d="M8.74228e-07 10C1.35705e-06 4.47715 4.47715 -1.35705e-06 10 -8.74228e-07C15.5228 -3.91405e-07 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 3.91405e-07 15.5228 8.74228e-07 10ZM18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10Z"
            fill="url(#spinner_gradient)"
          />
        </clipPath>

        <foreignObject id="spinner_gradient" x="0" y="0" width={size} height={size} clipPath="url(#spinnerPath)">
          <span className={styles.Spinner__spinner} />
        </foreignObject>
      </svg>

    </span>
  );
});

Spinner.displayName = 'Spinner';
