import { clsx } from 'clsx';
import { type CSSProperties, forwardRef } from 'react';

import { getCssSizeValue } from '../../helpers';
import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './Flex.module.scss';

export type FlexDisplay = 'flex' | 'inline-flex';
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export interface FlexProps extends FatherComponentProps {
  display?: FlexDisplay
  direction?: FlexDirection
  align?: FlexAlign
  justify?: FlexJustify
  wrap?: FlexWrap
  gap?: number | string
  gapX?: number | string
  gapY?: number | string
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>((props, forwardedRef) => {
  const {
    className,
    display = 'flex',
    direction = 'row',
    align = 'flex-start',
    justify = 'start',
    wrap,
    style,
    gap,
    gapX,
    gapY,
    ...rest
  } = props;

  return (
    <FatherComponent
      ref={forwardedRef}
      className={clsx(styles.Flex, className)}
      style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        ...style,
        display,

        '--OneMe-Flex_gapX': getCssSizeValue(gapX ?? gap ?? 0),
        '--OneMe-Flex_gapY': getCssSizeValue(gapY ?? gap ?? 0)
      } as CSSProperties}
      {...rest}
    />
  );
});

Flex.displayName = 'Flex';
