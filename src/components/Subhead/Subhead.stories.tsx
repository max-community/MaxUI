import type { Meta, StoryObj } from '@storybook/react';

import { hideArgsControl } from '../../../.storybook/shared/args-manager.ts';
import { EllipsisText } from '../EllipsisText';
import { Subhead, type SubheadProps } from './Subhead';

const meta = {
  title: 'Typography/Subhead',
  component: Subhead,
  argTypes: {
    ...hideArgsControl(['asChild', 'fallbackElement'])
  },
  args: {
    children: 'Hello world',
    variant: 'subhead'
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<SubheadProps>;

export default meta;
type Story = StoryObj<SubheadProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return <Subhead {...args} />;
  }
};

export const SubheadAsP: Story = {
  name: 'Subhead as p',
  args: {
    children: 'Я — абзац!'
  },
  render: ({ children, ...args }) => {
    return (
      <Subhead
        {...args}
        asChild
      >
        <p>{children}</p>
      </Subhead>
    );
  }
};

export const EllipsizedSubhead: Story = {
  name: 'Ellipsized Subhead as H3',
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  render: ({ children, ...args }) => {
    return (
      <Subhead
        {...args}
        asChild
      >
        <EllipsisText asChild>
          <h3>{children}</h3>
        </EllipsisText>
      </Subhead>
    );
  }
};
