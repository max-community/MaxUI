import { type Decorator } from '@storybook/react';

import { AppearanceProvider } from '../../src';

export const withConfigProvider: Decorator = (Story, context) => {
  return (
    <AppearanceProvider platform={context.globals.platform} colorScheme={context.globals.theme}>
      <Story />
    </AppearanceProvider>
  );
};
