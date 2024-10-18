import {
  AvatarCloseButton,
  AvatarContainer,
  AvatarIcon,
  AvatarImage,
  AvatarOnline,
  AvatarOverlay,
  AvatarText
} from './parts';

const AvatarNamespace = Object.assign({}, {
  Container: AvatarContainer,
  Image: AvatarImage,
  Overlay: AvatarOverlay,
  Icon: AvatarIcon,
  Text: AvatarText,
  Online: AvatarOnline,
  CloseButton: AvatarCloseButton
});

export { AvatarNamespace as Avatar };
export type { AvatarCloseButtonProps, AvatarContainerProps, AvatarIconProps, AvatarImageProps, AvatarOnlineProps, AvatarOverlayProps, AvatarTextGradient, AvatarTextProps } from './parts';
