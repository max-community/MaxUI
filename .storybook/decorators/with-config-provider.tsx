import { type Decorator } from '@storybook/react';

import { OneMeUI } from '../../src';

export const withConfigProvider: Decorator = (Story, context) => {
  return (
    <OneMeUI platform={context.globals.platform} colorScheme={context.globals.theme}>
      <Story />
    </OneMeUI>
  );
};
