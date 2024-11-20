import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './CellHeader.module.scss';

export type CellHeaderTitleStyle = 'caps' | 'normal';

export interface CellHeaderProps extends ComponentProps<'div'> {
  titleStyle?: CellHeaderTitleStyle
}

export const CellHeader = forwardRef<HTMLDivElement, CellHeaderProps>((props, forwardedRef) => {
  const {
    className,
    titleStyle = 'caps',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.CellHeader,
    styles[`CellHeader_titleStyle_${titleStyle}`],
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

CellHeader.displayName = 'CellHeader';
