import { clsx } from 'clsx';
import {
  type ComponentProps,
  forwardRef,
  type ReactNode,
  useRef, useState
} from 'react';

import { dispatchChangeNativeEvent, hasReactNode, mergeRefs } from '../../helpers';
import { usePlatform } from '../../hooks';
import { Icon16CloseIos, Icon20CloseAndroid } from '../../icons';
import { type PlatformType } from '../../types.ts';
import { SvgButton } from '../SvgButton';
import styles from './Input.module.scss';

const clearIconsMapping: Record<PlatformType, ReactNode> = {
  ios: <Icon16CloseIos />,
  android: <Icon20CloseAndroid />
};

export type InputMode = 'primary' | 'secondary';

export interface InputProps extends ComponentProps<'input'> {
  mode?: InputMode
  compact?: boolean // todo здесь проп называется compact, а у Cell проп height: 'compact' | 'normal'
  iconBefore?: ReactNode
  iconAfter?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const {
    className,
    iconBefore,
    iconAfter,
    onChange: onChangeProp,
    compact = false,
    mode = 'primary',
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [isEmpty, setIsEmpty] = useState(!rest.value && !rest.defaultValue);

  const platform = usePlatform();

  const clearValue = (): void => {
    if (!inputRef.current) return;
    dispatchChangeNativeEvent(inputRef.current);
  };

  const rootClassName = clsx(
    styles.Input,
    styles[`Input_mode_${mode}`],
    {
      [styles.Input_compact]: compact,
      [styles.Input_disabled]: rest.disabled
    },
    className
  );

  return (
    <div ref={forwardedRef} className={rootClassName}>
      {hasReactNode(iconBefore) && <div className={styles.Input__iconBefore}>{iconBefore}</div>}

      <input
        ref={mergeRefs(inputRef, forwardedRef)}
        className={styles.Input__input}
        onChange={(e) => {
          onChangeProp?.(e);
          setIsEmpty(!e.target.value);
        }}
        {...rest}
      />

      {!isEmpty && (
        <SvgButton
          className={styles.Input__clearButton}
          onClick={clearValue}
        >
          {clearIconsMapping[platform]}
        </SvgButton>
      )}

      {hasReactNode(iconAfter) && <div className={styles.Input__iconAfter}>{iconAfter}</div>}
    </div>
  );
});

Input.displayName = 'Input';
