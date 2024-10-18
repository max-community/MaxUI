import { createContext, useContext } from 'react';

import { type PlatformType, type ThemeType } from '../../types';

export interface AppearanceProviderContextInterface {
  platform: PlatformType
  theme: ThemeType
}

export const AppearanceProviderContext = createContext<AppearanceProviderContextInterface>({
  platform: 'ios',
  theme: 'light'
});

export const useAppearanceProvider = (): AppearanceProviderContextInterface => useContext(AppearanceProviderContext);
