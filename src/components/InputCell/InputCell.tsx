import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, type ReactNode } from 'react';

import { hasReactNode } from '../../helpers';
import styles from './InputCell.module.scss';

export type InputCellHeight = 'compact' | 'normal';

export interface InputCellProps extends ComponentProps<'input'> {
  height?: InputCellHeight
  before?: ReactNode
}

export const InputCell = forwardRef<HTMLInputElement, InputCellProps>((props, forwardedRef) => {
  const {
    className,
    height = 'normal',
    before,
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.InputCell,
    styles[`InputCell_height_${height}`],
    className
  );

  return (
    <label className={rootClassName}>
      {hasReactNode(before) && (
        <span className={styles.InputCell__before}>
          {before}
        </span>
      )}

      <input
        ref={forwardedRef}
        className={styles.InputCell__input}
        type="text"
        {...rest}
      />
    </label>
  );
});

InputCell.displayName = 'InputCell';
