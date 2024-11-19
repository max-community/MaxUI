export const getDotContainerSize = (avatarContainerSize: number): 'xs' | 's' | 'm' | 'l' => {
  // 12 (dot size 6 + 2 border)
  // 16 от 40 (dot 8 + 2 border)
  // 20 от 54 (10 + 2)
  // 24 от 72 (12 + 3)
  if (avatarContainerSize < 40) {
    return 'xs';
  } else if (avatarContainerSize < 54) {
    return 's';
  } else if (avatarContainerSize < 72) {
    return 'm';
  } else {
    return 'l';
  }
};
