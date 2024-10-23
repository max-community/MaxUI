import type { Meta, StoryObj } from '@storybook/react';

import Icon24Placeholder from '../../../../../.storybook/assets/icons/icon-24-placeholder.svg';
import { Avatar, type AvatarIconProps } from '../../index';
import { AvatarIcon } from './AvatarIcon';

const meta = {
  title: 'Common/Avatar/Avatar.Icon',
  component: AvatarIcon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: 24 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<AvatarIconProps>;

export default meta;
type Story = StoryObj<AvatarIconProps>;

export const Playground: Story = {
  render: ({ ...props }) => {
    return (
      <Avatar.Container>
        <Avatar.Icon {...props}>
          <Icon24Placeholder />
        </Avatar.Icon>
      </Avatar.Container>
    );
  }
};
