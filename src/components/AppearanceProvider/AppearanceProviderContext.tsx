import { createContext, useContext } from 'react';

import { type ColorSchemeType, type PlatformType } from '../../types';

export interface AppearanceProviderContextInterface {
  platform: PlatformType
  colorScheme: ColorSchemeType
}

export const AppearanceProviderContext = createContext<AppearanceProviderContextInterface>({
  platform: 'ios',
  colorScheme: 'light'
});

export const useAppearance = (): AppearanceProviderContextInterface => useContext(AppearanceProviderContext);
