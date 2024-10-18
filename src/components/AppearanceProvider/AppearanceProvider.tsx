import { clsx } from 'clsx';
import { type FC, type ReactNode } from 'react';

import styles from './AppearanceProvider.module.scss';
import { AppearanceProviderContext, type AppearanceProviderContextInterface } from './AppearanceProviderContext';

export interface AppearanceProviderProps extends AppearanceProviderContextInterface {
  children: ReactNode
}

export const AppearanceProvider: FC<AppearanceProviderProps> = ({ children, ...contextValue }) => {
  const rootClassName = clsx(
    styles.OneMeUI,
    styles[`OneMeUI_theme_${contextValue.theme}`],
    styles[`OneMeUI_platform_${contextValue.platform}`]
  );

  return (
    <div className={rootClassName}>
      <AppearanceProviderContext.Provider value={contextValue}>
        {children}
      </AppearanceProviderContext.Provider>
    </div>
  );
};
