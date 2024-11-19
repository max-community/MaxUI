import {
  AvatarCloseButton,
  AvatarContainer,
  AvatarIcon,
  AvatarImage,
  AvatarOnlineDot,
  AvatarOverlay,
  AvatarText
} from './parts';

const AvatarNamespace = Object.assign({}, {
  Container: AvatarContainer,
  Image: AvatarImage,
  Overlay: AvatarOverlay,
  Icon: AvatarIcon,
  Text: AvatarText,
  OnlineDot: AvatarOnlineDot,
  CloseButton: AvatarCloseButton
});

export { AvatarNamespace as Avatar };
export type { AvatarCloseButtonProps, AvatarContainerProps, AvatarIconProps, AvatarImageProps, AvatarOnlineDotProps, AvatarOverlayProps, AvatarTextGradient, AvatarTextProps } from './parts';
