import type { Preview } from '@storybook/react';

import { withConfigProvider } from './decorators';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [withConfigProvider]
};

export default preview;
