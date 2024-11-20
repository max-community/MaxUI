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
    return 'contrast-static';
  } else if (buttonAppearance === 'accent') {
    return 'themed';
  } else if (buttonAppearance === 'negative') {
    return 'negative';
  } else if (buttonAppearance === 'neutral') {
    return 'primary';
  } else if (buttonAppearance === 'contrast-static') {
    return 'primary-static';
  }
  return 'themed';
};
