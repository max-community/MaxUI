import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, useMemo } from 'react';

import { isIos } from '../../helpers';
import { useSystemColorScheme } from '../../hooks';
import styles from './OneMeUI.module.scss';
import { OneMeUIContext, type OneMeUIContextInterface } from './OneMeUIContext.tsx';

export interface OneMeUIProps extends Partial<OneMeUIContextInterface> {
  children: ComponentProps<'div'>['children']

  className?: ComponentProps<'div'>['className']
}

export const OneMeUI = forwardRef<HTMLDivElement, OneMeUIProps>((props, ref) => {
  const {
    children,
    className,
    colorScheme: colorSchemeProp,
    platform = isIos() ? 'ios' : 'android'
  } = props;

  const systemColorScheme = useSystemColorScheme({
    listenChanges: !colorSchemeProp
  });
  const colorScheme = colorSchemeProp ?? systemColorScheme;

  const config = useMemo<OneMeUIContextInterface>(() => ({
    colorScheme,
    platform
  }), []);

  const rootClassName = clsx(
    styles.OneMeUI,
    styles[`OneMeUI_colorScheme_${colorScheme}`],
    styles[`OneMeUI_platform_${platform}`],
    className
  );

  return (
    <OneMeUIContext.Provider value={config}>
      <div ref={ref} className={rootClassName}>
        {children}
      </div>
    </OneMeUIContext.Provider>
  );
});

OneMeUI.displayName = 'OneMeUI';
