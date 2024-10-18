import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './Section.module.scss';

export type SectionMode = 'full-width' | 'island';

export interface SectionProps extends ComponentProps<'div'> {
  mode?: SectionMode
  filled?: boolean
}

export const Section = forwardRef<HTMLDivElement, SectionProps>((props, forwardedRef) => {
  const {
    className,
    mode = 'full-width',
    filled = mode === 'island',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Section,
    styles[`Section_mode_${mode}`], {
      [styles.Section_filled]: filled
    },
    className
  );

  return (
    <div
      ref={forwardedRef}
      className={rootClassName}
      {...rest}
    />
  );
});

Section.displayName = 'Section';
