import { Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, type ElementType, forwardRef, type ReactNode } from 'react';

import { getSubtree, hasReactNode } from '../../helpers';
import { Icon16Chevron } from '../../icons';
import { type AsChildProp, type InnerClassNamesProp, type MergeProps } from '../../types';
import { Tappable } from '../Tappable';
import styles from './Cell.module.scss';

export type CellHeight = 'compact' | 'normal';
export type CellInnerElementKey = 'before' | 'after' | 'chevron' | 'content' | 'title' | 'subtitle';

interface CellOwnProps extends AsChildProp {
  height?: CellHeight
  innerClassNames?: InnerClassNamesProp<CellInnerElementKey>
  title?: ReactNode
  subtitle?: ReactNode
  before?: ReactNode
  after?: ReactNode
  showChevron?: boolean
  as?: ElementType
}

export type CellProps = MergeProps<ComponentProps<'div'>, CellOwnProps>;

export const Cell = forwardRef<HTMLDivElement, CellProps>((props, forwardedRef) => {
  const {
    className,
    title,
    subtitle,
    before,
    after,
    children,
    showChevron = false,
    asChild = false,
    innerClassNames,
    height = 'normal',
    as = 'div',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Cell,
    styles[`Cell_height_${height}`],
    className
  );

  return (
    <Tappable
      ref={forwardedRef}
      className={rootClassName}
      asChild={asChild}
      as={as}
      parentChildren={children}
      {...rest}
    >
      {hasReactNode(before) && (
        <div className={clsx(styles.Cell__before, innerClassNames?.before)}>
          {before}
        </div>
      )}

      <Slottable>
        {getSubtree({ asChild, children }, (children) => (
          <div key="subtree-container" className={clsx(styles.Cell__content, innerClassNames?.content)}>
            {hasReactNode(title) && (
              <div className={clsx(styles.Cell__title, innerClassNames?.title)}>
                {title}
              </div>
            )}

            {hasReactNode(subtitle) && (
              <div className={clsx(styles.Cell__subtitle, innerClassNames?.subtitle)}>
                {subtitle}
              </div>
            )}

            {children}
          </div>
        ))}
      </Slottable>

      {(hasReactNode(after) || showChevron) && (
        <div className={clsx(styles.Cell__after, innerClassNames?.after)}>
          {after}
          {showChevron && <Icon16Chevron className={clsx(styles.Cell__chevron, innerClassNames?.chevron)} />}
        </div>
      )}
    </Tappable>
  );
});

Cell.displayName = 'Cell';
