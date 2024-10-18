import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './Panel.module.scss';

export type PanelMode = 'primary' | 'secondary';

export interface PanelProps extends ComponentProps<'div'> {
  mode?: PanelMode
  centered?: boolean
}

export const Panel = forwardRef<HTMLDivElement, PanelProps>((props, forwardedRef) => {
  const {
    className,
    mode = 'primary',
    centered,
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Panel,
    styles[`Panel_mode_${mode}`],
    {
      [styles.Panel_centered]: centered
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

Panel.displayName = 'Panel';
