import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, type ReactNode, useRef, useState } from 'react';

import { dispatchChangeNativeEvent, mergeRefs } from '../../helpers';
import { usePlatform } from '../../hooks';
import { Icon16CloseIos, Icon16SearchOutline, Icon24CloseAndroid } from '../../icons';
import { type PlatformType } from '../../types.ts';
import { SvgButton } from '../SvgButton';
import styles from './SearchInput.module.scss';

const clearIconsMapping: Record<PlatformType, ReactNode> = {
  ios: <Icon16CloseIos />,
  android: <Icon24CloseAndroid />
};

export interface SearchInputProps extends ComponentProps<'input'> {}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>((props, forwardedRef) => {
  const {
    className,
    placeholder = 'Поиск',
    onChange: onChangeProp,
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
    styles.SearchInput,
    styles[`SearchInput_platform_${platform}`],
    className
  );

  return (
    <div className={rootClassName}>
      <Icon16SearchOutline className={styles.SearchInput__icon} />

      <input
        ref={mergeRefs(inputRef, forwardedRef)}
        className={styles.SearchInput__input}
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          onChangeProp?.(e);
          setIsEmpty(!e.target.value);
        }}
        {...rest}
      />

      {!isEmpty && (
        <SvgButton
          className={styles.SearchInput__clearButton}
          onClick={clearValue}
          aria-label="Очистить"
        >
          {clearIconsMapping[platform]}
        </SvgButton>
      )}
    </div>
  );
});

SearchInput.displayName = 'SearchInput';
