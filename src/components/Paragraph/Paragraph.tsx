import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import { type AsChildProp } from '../../types.ts';
import styles from './Paragraph.module.scss';

export interface ParagraphProps extends ComponentProps<'span'>, AsChildProp {}

export const Paragraph = forwardRef<HTMLSpanElement, ParagraphProps>((props, forwardedRef) => {
  const {
    className,
    asChild,
    ...rest
  } = props;

  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      ref={forwardedRef}
      className={clsx(styles.Paragraph, className)}
      {...rest}
    />
  );
});

Paragraph.displayName = 'Paragraph';
