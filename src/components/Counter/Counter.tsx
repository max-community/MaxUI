import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, useMemo } from 'react';

import styles from './Counter.module.scss';

export type CounterAppearance = 'themed' | 'contrast' | 'contrast-static' | 'neutral' | 'neutral-static' | 'neutral-fade' | 'accent-red' | 'inherit';

export interface CounterProps extends ComponentProps<'span'> {
  value: number

  rounded?: boolean
  appearance?: CounterAppearance
}

export const Counter = forwardRef<HTMLSpanElement, CounterProps>((props, ref) => {
  const {
    className,
    value,
    rounded,
    appearance = 'inherit',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Counter,
    styles[`Counter_appearance_${appearance}`],
    className
  );

  const formattedValue = useMemo(() => {
    return rounded
      ? Intl.NumberFormat('en', { notation: 'compact' }).format(value)
      : value;
  }, [rounded, value]);

  return (
    <span ref={ref} className={rootClassName} {...rest} role="">
      {formattedValue}
    </span>
  );
});

Counter.displayName = 'Counter';
