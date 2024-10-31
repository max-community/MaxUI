import { useAppearance } from '../components';
import { type PlatformType } from '../types.ts';

export const usePlatform = (): PlatformType => {
  const { platform } = useAppearance();

  return platform;
};
