import { clsx } from 'clsx';
import { type FC, type ReactNode } from 'react';

import { useSystemColorScheme } from '../../hooks/use-system-color-scheme.ts';
import styles from './AppearanceProvider.module.scss';
import { AppearanceProviderContext, type AppearanceProviderContextInterface } from './AppearanceProviderContext';

export interface AppearanceProviderProps extends Partial<AppearanceProviderContextInterface> {
  children: ReactNode
}

export const AppearanceProvider: FC<AppearanceProviderProps> = (props) => {
  const {
    children,
    colorScheme: colorSchemeProp,
    platform = 'ios' // todo сделать авто-детект платформы, если проп пустой
  } = props;

  const systemColorScheme = useSystemColorScheme({
    listenChanges: !colorSchemeProp
  });
  const colorScheme = colorSchemeProp ?? systemColorScheme;

  const rootClassName = clsx(
    styles.OneMeUI,
    styles[`OneMeUI_colorScheme_${colorScheme}`],
    styles[`OneMeUI_platform_${platform}`]
  );

  const appearanceConfig: AppearanceProviderContextInterface = {
    colorScheme,
    platform
  };

  return (
    <div className={rootClassName}>
      <AppearanceProviderContext.Provider value={appearanceConfig}>
        {children}
      </AppearanceProviderContext.Provider>
    </div>
  );
};
