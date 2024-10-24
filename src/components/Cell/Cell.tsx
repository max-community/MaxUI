import { Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { forwardRef, isValidElement, type ReactNode } from 'react';

import { getSubtree, hasReactNode } from '../../helpers';
import { Icon16Chevron } from '../../icons';
import { type InnerClassNamesProp } from '../../types';
import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './Cell.module.scss';

export type CellHeight = 'compact' | 'normal';
export type CellInnerElementKey = 'before' | 'after' | 'chevron' | 'content' | 'heading' | 'subtitle';

export interface CellProps extends FatherComponentProps {
  height?: CellHeight
  innerClassNames?: InnerClassNamesProp<CellInnerElementKey>
  heading?: ReactNode
  subtitle?: ReactNode
  before?: ReactNode
  after?: ReactNode
  showChevron?: boolean
}

export const Cell = forwardRef<HTMLDivElement, CellProps>((props, forwardedRef) => {
  const {
    height = 'normal',
    className,
    heading,
    subtitle,
    showChevron = false,
    before,
    innerClassNames,
    after,
    children,
    ...rest
  } = props;

  // todo вынести в отдельную функцию и расширить перечень проверок
  const hasHover = !!rest?.onClick || (isValidElement(children) && 'href' in children.props);

  const rootClassName = clsx(
    styles.Cell,
    styles[`Cell_height_${height}`],
    {
      [styles.Cell_withHover]: hasHover
    },
    className
  );

  return (
    <FatherComponent
      ref={forwardedRef}
      className={rootClassName}
      {...rest}
    >
      {hasReactNode(before) && (
        <div className={clsx(styles.Cell__before, innerClassNames?.before)}>
          {before}
        </div>
      )}

      <Slottable>
        {getSubtree({ asChild: props.asChild, children }, (children) => (
          <span key="subtree-container" className={clsx(styles.Cell__content, innerClassNames?.content)}>
            {hasReactNode(heading) && (
              <div className={clsx(styles.Cell__heading, innerClassNames?.heading)}>
                {heading}
              </div>
            )}

            {hasReactNode(subtitle) && (
              <div className={clsx(styles.Cell__subtitle, innerClassNames?.subtitle)}>
                {subtitle}
              </div>
            )}

            {children}
          </span>
        ))}
      </Slottable>

      {(hasReactNode(after) || showChevron) && (
        <div className={clsx(styles.Cell__after, innerClassNames?.after)}>
          {after}
          {showChevron && <Icon16Chevron className={clsx(styles.Cell__chevron, innerClassNames?.chevron)} />}
        </div>
      )}
    </FatherComponent>
  );
});

Cell.displayName = 'Cell';
