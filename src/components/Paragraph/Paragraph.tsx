import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { FatherComponent, type FatherComponentProps } from '../FatherComponent';
import styles from './Paragraph.module.scss';

export interface ParagraphProps extends FatherComponentProps {}

export const Paragraph = forwardRef<HTMLDivElement, ParagraphProps>((props, forwardedRef) => {
  const {
    className,
    ...rest
  } = props;

  return (
    <FatherComponent
      ref={forwardedRef}
      className={clsx(styles.Paragraph, className)}
      {...rest}
    />
  );
});

Paragraph.displayName = 'Paragraph';
