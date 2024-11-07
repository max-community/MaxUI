import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './Textarea.module.scss';

export type TextareaMode = 'primary' | 'secondary';

export interface TextareaProps extends ComponentProps<'textarea'> {
  mode?: TextareaMode
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, forwardedRef) => {
  const {
    className,
    mode = 'primary',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Textarea,
    styles[`Textarea_mode_${mode}`],
    {
      [styles.Textarea_disabled]: rest.disabled
    },
    className
  );

  return (
    <div className={rootClassName}>
      <textarea
        ref={forwardedRef}
        className={styles.Textarea__textarea}
        {...rest}
      />
    </div>
  );
});

Textarea.displayName = 'Textarea';
