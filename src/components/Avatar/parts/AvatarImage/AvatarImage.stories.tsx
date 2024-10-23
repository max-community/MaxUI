import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, type AvatarImageProps } from '../../index';
import { AvatarImage } from './AvatarImage';

const meta = {
  title: 'Common/Avatar/Avatar.Image',
  component: AvatarImage,
  // todo вынести в общий кофиг сторибука
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    src: 'https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg',
    fallback: 'VT'
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: 24 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<AvatarImageProps>;

export default meta;
type Story = StoryObj<AvatarImageProps>;

export const Playground: Story = {
  render: ({ ...props }) => {
    return (
      <Avatar.Container>
        <Avatar.Image {...props} alt="Vadim Tregubenko" />
      </Avatar.Container>
    );
  }
};
