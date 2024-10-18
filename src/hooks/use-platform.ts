import { useAppearanceProvider } from '../components/AppearanceProvider/AppearanceProviderContext.tsx';
import { type PlatformType } from '../types.ts';

export const usePlatform = (): PlatformType => {
  const { platform } = useAppearanceProvider();

  return platform;
};
