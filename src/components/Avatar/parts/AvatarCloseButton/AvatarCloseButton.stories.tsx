import type { Meta, StoryObj } from '@storybook/react';

import Icon24Placeholder from '../../../../../.storybook/assets/icons/icon-24-placeholder.svg';
import { Avatar, type AvatarCloseButtonProps } from '../../index';
import { AvatarCloseButton } from './AvatarCloseButton.tsx';

const meta = {
  title: 'Common/Avatar/Avatar.CloseButton',
  component: AvatarCloseButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: 24 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<AvatarCloseButtonProps>;

export default meta;
type Story = StoryObj<AvatarCloseButtonProps>;

export const Playground: Story = {
  render: ({ ...props }) => {
    return (
      <Avatar.Container
        rightTopCorner={<Avatar.CloseButton {...props} />}
      >
        <Avatar.Icon>
          <Icon24Placeholder />
        </Avatar.Icon>
      </Avatar.Container>
    );
  }
};
