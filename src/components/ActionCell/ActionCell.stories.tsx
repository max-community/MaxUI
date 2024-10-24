import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Icon28Placeholder from '../../../.storybook/assets/icons/icon-28-placeholder.svg';
import { SB_ARGTYPES_RESETS } from '../../../.storybook/shared/args-resets.ts';
import { ActionCell, type ActionCellProps } from './ActionCell';

const meta = {
  title: 'Common/ActionCell',
  component: ActionCell,
  argTypes: {
    ...SB_ARGTYPES_RESETS,

    before: {
      options: [0, 1],
      mapping: [
        undefined,
        <Icon28Placeholder key="icon" />
      ],
      control: {
        type: 'select',
        labels: ['None', 'Icon']
      }
    }
  },
  args: {
    children: 'Action',
    showChevron: true,
    before: 1,
    mode: 'primary',
    height: 'normal',
    disabled: false,
    onClick: fn()
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<ActionCellProps>;

export default meta;
type Story = StoryObj<ActionCellProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return <ActionCell {...args} />;
  }
};

export const AsLink: Story = {
  name: 'ActionCell as link',
  render: ({ children, ...args }) => {
    return (
      <ActionCell {...args} asChild>
        <a
          href="https://i.imgur.com/u4gmFU3.png"
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      </ActionCell>
    );
  }
};
