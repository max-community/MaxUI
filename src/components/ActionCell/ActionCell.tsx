import { Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { forwardRef, isValidElement, type ReactNode } from 'react';

import { getSubtree, hasReactNode } from '../../helpers';
import { useButtonLikeProps } from '../../hooks';
import { Icon16Chevron } from '../../icons';
import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './ActionCell.module.scss';

export type ActionCellMode = 'primary' | 'destructive' | 'custom';
export type ActionCellHeight = 'compact' | 'normal';

export interface ActionCellProps extends FatherComponentProps {
  mode?: ActionCellMode
  height?: ActionCellHeight
  before?: ReactNode
  showChevron?: boolean
  disabled?: boolean
}

export const ActionCell = forwardRef<HTMLDivElement, ActionCellProps>((props, forwardedRef) => {
  const {
    className,
    before,
    children,
    asChild = false,
    mode = 'primary',
    height = 'normal',
    showChevron = false,
    disabled = false,
    fallbackElement = 'button',
    ...rest
  } = props;

  const buttonLikeProps = useButtonLikeProps({ asChild, children, disabled, fallbackElement });

  const hasHover = !!rest?.onClick || (isValidElement(children) && 'href' in children.props);

  const rootClassName = clsx(
    styles.ActionCell,
    styles[`ActionCell_mode_${mode}`],
    styles[`ActionCell_height_${height}`],
    {
      [styles.ActionCell_disabled]: disabled,
      [styles.ActionCell_withHover]: hasHover
    },
    className
  );

  return (
    <FatherComponent
      ref={forwardedRef}
      className={rootClassName}
      asChild={asChild}
      fallbackElement={fallbackElement}
      {...buttonLikeProps}
      {...rest}
    >
      {hasReactNode(before) && (
        <div className={clsx(styles.ActionCell__before)}>
          {before}
        </div>
      )}

      <Slottable>
        {getSubtree({ asChild, children }, (children) => (
          <span key="subtree-container" className={clsx(styles.ActionCell__content)}>
            {children}
          </span>
        ))}
      </Slottable>

      {showChevron && (
        <Icon16Chevron className={clsx(styles.Cell__chevron)} />
      )}
    </FatherComponent>
  );
});

ActionCell.displayName = 'ActionCell';
