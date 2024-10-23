import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, type AvatarTextProps } from '../../index';
import { AvatarText } from './AvatarText.tsx';

const meta = {
  title: 'Common/Avatar/Avatar.Text',
  component: AvatarText,
  // todo вынести в общий кофиг сторибука
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    children: 'VT'
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: 24 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<AvatarTextProps>;

export default meta;
type Story = StoryObj<AvatarTextProps>;

export const Playground: Story = {
  render: ({ ...props }) => {
    return (
      <Avatar.Container>
        <Avatar.Text {...props} />
      </Avatar.Container>
    );
  }
};
