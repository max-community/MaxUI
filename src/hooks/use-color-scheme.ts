import { useAppearance } from '../components';
import { type ColorSchemeType } from '../types.ts';

export const useColorScheme = (): ColorSchemeType => {
  const { colorScheme } = useAppearance();

  return colorScheme;
};
