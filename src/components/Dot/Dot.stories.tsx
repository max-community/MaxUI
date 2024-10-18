import type { Meta, StoryObj } from '@storybook/react';

import { OverlayContainer } from '../../../.storybook/components/OverlayContainer';
import { Button } from '../Button';
import { Dot, type DotProps } from './Dot';

const meta = {
  title: 'Dot',
  component: Dot,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    appearance: 'themed'
  },
  decorators: [
    (Story, context) => (
      <OverlayContainer
        style={{ width: 375 }}
        appearance={context.args.appearance === 'contrast-pinned' ? 'dark' : 'light'}
      >
        <Story />
      </OverlayContainer>
    )
  ]
} satisfies Meta<DotProps>;

export default meta;
type Story = StoryObj<DotProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return (
      <Dot {...args} />
    );
  }
};

export const DotInButton: Story = {
  name: 'Dot in Button',
  args: {
    appearance: 'inherit'
  },
  render: ({ ...args }) => {
    return (
      <Button
        indicator={<Dot {...args} />}
      >
        Messages
      </Button>
    );
  }
};
