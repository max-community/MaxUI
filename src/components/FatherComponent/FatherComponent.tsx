import { Slot } from '@radix-ui/react-slot';
import { type ComponentProps, type ElementType, forwardRef } from 'react';

export interface FatherComponentProps extends ComponentProps<'div'> {
  asChild?: boolean
  fallbackElement?: ElementType
}

export const FatherComponent = forwardRef<HTMLDivElement, FatherComponentProps>((props, forwardedRef) => {
  const {
    asChild = false,
    fallbackElement = 'div',
    ...rest
  } = props;

  const Component = asChild ? Slot : fallbackElement;

  return (
    <Component ref={forwardedRef} {...rest} />
  );
});

FatherComponent.displayName = 'FatherComponent';
