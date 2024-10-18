import type { Meta, StoryObj } from '@storybook/react';

import Icon16Placeholder from '../../../.storybook/assets/icons/icon-16-placeholder.svg';
import Icon24Placeholder from '../../../.storybook/assets/icons/icon-24-placeholder.svg';
import { IconButton } from '../IconButton';
import { Avatar } from '.';

const meta = {
  title: 'Avatar',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {}
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ImageAvatar: Story = {
  name: 'Image avatar',
  render: ({ ...args }) => {
    return (
      <Avatar.Container
        rightBottomCorner={<Avatar.Online />}
      >
        <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
      </Avatar.Container>
    );
  }
};

export const IconAvatar: Story = {
  name: 'Icon avatar with IconButton',
  render: ({ ...args }) => {
    return (
      <Avatar.Container
        size={96}
        rightBottomCorner={(
          <IconButton
            aria-label="Добавить"
            size="small"
            appearance="neutral"
          >
            <Icon16Placeholder />
          </IconButton>
        )}
      >
        <Avatar.Icon>
          <Icon24Placeholder />
        </Avatar.Icon>
      </Avatar.Container>
    );
  }
};

export const TextAvatar: Story = {
  name: 'Text avatar',
  render: ({ ...args }) => {
    return (
      <Avatar.Container
        rightTopCorner={(
          <Avatar.CloseButton aria-label="Закрыть" />
        )}
      >
        <Avatar.Text gradient="red">
          ME
        </Avatar.Text>
      </Avatar.Container>
    );
  }
};

export const WithOverlay: Story = {
  name: 'Avatar with overlay',
  render: ({ ...args }) => {
    return (
      <Avatar.Container
        overlay={(
          <Avatar.Overlay>
            <Icon24Placeholder />
          </Avatar.Overlay>
        )}
      >
        <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
      </Avatar.Container>
    );
  }
};

export const FallbackImageAvatar: Story = {
  name: 'Image avatar with fallback',
  render: ({ ...args }) => {
    return (
      <Avatar.Container>
        <Avatar.Image
          fallback="ME"
          fallbackGradient="green"
        />
      </Avatar.Container>
    );
  }
};

export const ImageAsLink: Story = {
  name: 'Image as link',
  render: ({ ...args }) => {
    return (
      <Avatar.Container asChild>
        <a
          href="https://i.imgur.com/UCtRwFE.jpeg"
          target="_blank"
          rel="noreferrer"
        >
          <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" alt="Волк из Ну-погоди!" />
        </a>
      </Avatar.Container>
    );
  }
};
