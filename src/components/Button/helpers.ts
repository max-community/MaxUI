import { type SpinnerAppearance } from '../Spinner';
import { type ButtonAppearance, type ButtonMode, type ButtonSize } from './Button';

export const getButtonSpinnerSize = (buttonSize: ButtonSize): number => {
  if (buttonSize === 'small') {
    return 20;
  }
  return 24;
};

export const getButtonSpinnerAppearance = (buttonAppearance: ButtonAppearance, buttonMode: ButtonMode): SpinnerAppearance => {
  if (buttonMode === 'primary') {
    if (buttonAppearance === 'themed') {
      return 'contrast-static';
    } else if (buttonAppearance === 'negative') {
      return 'contrast-static';
    } else if (buttonAppearance === 'neutral') {
      return 'contrast';
    } else if (buttonAppearance === 'neutral-themed') {
      return 'contrast-static';
    } else if (buttonAppearance === 'contrast-static') {
      return 'primary-static';
    }
  }

  if (buttonAppearance === 'themed') {
    return 'themed';
  } else if (buttonAppearance === 'negative') {
    return 'negative';
  } else if (buttonAppearance === 'neutral') {
    return 'primary';
  } else if (buttonAppearance === 'neutral-themed') {
    return 'neutral-themed';
  } else if (buttonAppearance === 'contrast-static') {
    return 'contrast-static';
  }

  return 'themed';
};
