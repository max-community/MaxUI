import type { Meta, StoryObj } from '@storybook/react';

import Icon24Placeholder from '../../../../../.storybook/assets/icons/icon-24-placeholder.svg';
import { Avatar, type AvatarOnlineProps } from '../../index';
import { AvatarOnline } from './AvatarOnline.tsx';

const meta = {
  title: 'Common/Avatar/Avatar.Online',
  component: AvatarOnline,
  tags: ['autodocs']
} satisfies Meta<AvatarOnlineProps>;

export default meta;
type Story = StoryObj<AvatarOnlineProps>;

export const Playground: Story = {
  render: ({ ...props }) => {
    return (
      <Avatar.Container
        rightBottomCorner={<Avatar.Online {...props} />}
      >
        <Avatar.Icon>
          <Icon24Placeholder />
        </Avatar.Icon>
      </Avatar.Container>
    );
  }
};
