import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './CellList.module.scss';

export type CellListMode = 'full-width' | 'island';

export interface CellListProps extends ComponentProps<'div'> {
  mode?: CellListMode
  filled?: boolean
}

export const CellList = forwardRef<HTMLDivElement, CellListProps>((props, forwardedRef) => {
  const {
    className,
    mode = 'full-width',
    filled = mode === 'island',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.CellList,
    styles[`CellList_mode_${mode}`], {
      [styles.CellList_filled]: filled
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

CellList.displayName = 'CellList';
