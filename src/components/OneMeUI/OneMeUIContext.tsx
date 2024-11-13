import { createContext, useContext } from 'react';

import { type ColorSchemeType, type PlatformType } from '../../types';

export interface OneMeUIContextInterface {
  platform: PlatformType
  colorScheme: ColorSchemeType
}

export const OneMeUIContext = createContext<OneMeUIContextInterface>({
  platform: 'ios',
  colorScheme: 'light'
});

export const useAppearance = (): OneMeUIContextInterface => useContext(OneMeUIContext);
