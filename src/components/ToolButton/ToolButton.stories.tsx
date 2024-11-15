import type { Meta, StoryObj } from '@storybook/react';

import Icon24Placeholder from '../../../.storybook/assets/icons/icon-24-placeholder.svg';
import { hideArgsControl } from '../../../.storybook/shared/args-manager';
import { Flex } from '../Flex';
import { Panel } from '../Panel';
import { ToolButton, type ToolButtonProps } from './ToolButton';

const meta = {
  title: 'Common/ToolButton',
  component: ToolButton,
  argTypes: {
    ...hideArgsControl(['asChild', 'innerClassNames', 'icon']),
    label: { type: 'string' }
  },
  args: {
    label: 'Button',
    icon: <Icon24Placeholder />
  },
  decorators: [
    (Story) => (
      <Panel mode="secondary" style={{ width: 375, padding: 16 }}>
        <Flex gap={8}>
          <Story />
          <Story />
          <Story />
          <Story />
        </Flex>
      </Panel>
    )
  ]
} satisfies Meta<ToolButtonProps>;

export default meta;
type Story = StoryObj<ToolButtonProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return (
      <ToolButton{...args} />
    );
  }
};

export const AsLink: Story = {
  name: 'As link',
  args: {
    label: 'Ссылка',
    onClick: undefined
  },
  render: ({ ...args }) => {
    return (
      <ToolButton {...args} asChild>
        <a
          href="https://imgur.com/KFEnxtU"
          target="_blank"
          rel="noreferrer"
        />
      </ToolButton>
    );
  }
};
