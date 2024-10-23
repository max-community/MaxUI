import { clsx } from 'clsx';
import { type CSSProperties, forwardRef } from 'react';

import { getCssSizeValue } from '../../helpers';
import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './Grid.module.scss';

export type GridDisplay = 'grid' | 'inline-grid';
export type GridAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type GridJustify = 'start' | 'center' | 'end' | 'between';

export interface GridProps extends FatherComponentProps {
  display?: GridDisplay
  align?: GridAlign
  justify?: GridJustify
  gap?: number | string
  gapX?: number | string
  gapY?: number | string
  cols?: number
  rows?: number
}

export const Grid = forwardRef<HTMLDivElement, GridProps>((props, forwardedRef) => {
  const {
    className,
    style,
    display = 'grid',
    align = 'start',
    justify = 'start',
    gap,
    gapX,
    gapY,
    cols,
    rows,
    ...rest
  } = props;

  return (
    <FatherComponent
      ref={forwardedRef}
      className={clsx(styles.Grid, className)}
      style={{
        justifyContent: justify,
        alignItems: align,
        ...style,
        display,

        '--OneMe-Grid_gapX': getCssSizeValue(gapX ?? gap ?? 0),
        '--OneMe-Grid_gapY': getCssSizeValue(gapY ?? gap ?? 0),
        '--OneMe-Grid_cols': cols ?? 0,
        '--OneMe-Grid_rows': rows ?? 0
      } as CSSProperties}
      {...rest}
    />
  );
});

Grid.displayName = 'Grid';
