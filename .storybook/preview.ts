import type { Preview } from '@storybook/react';

import { withConfigProvider } from './decorators';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [withConfigProvider]
};

export default preview;
