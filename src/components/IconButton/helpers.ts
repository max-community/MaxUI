import { type SpinnerAppearance } from '../Spinner/Spinner';
import { type IconButtonAppearance, type IconButtonMode, type IconButtonSize } from './IconButton';

export const getIconButtonSpinnerSize = (iconButtonSize: IconButtonSize): number => {
  if (iconButtonSize === 'small') {
    return 20;
  }
  return 24;
};

export const getIconButtonSpinnerAppearance = (iconButtonAppearance: IconButtonAppearance, iconButtonMode: IconButtonMode): SpinnerAppearance => {
  if (iconButtonMode === 'primary') {
    return 'contrast-static';
  } else if (iconButtonAppearance === 'accent') {
    return 'themed';
  } else if (iconButtonAppearance === 'negative') {
    return 'negative';
  } else if (iconButtonAppearance === 'neutral') {
    return 'primary';
  } else if (iconButtonAppearance === 'contrast-static') {
    return 'primary-static';
  }
  return 'themed';
};
