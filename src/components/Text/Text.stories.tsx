import type { Meta, StoryObj } from '@storybook/react';

import { EllipsisText } from '../EllipsisText';
import { Text, type TextProps } from './Text';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    fallbackElement: { table: { disable: true } },
    asChild: { table: { disable: true } }
  },
  args: {
    children: 'Hello world'
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<TextProps>;

export default meta;
type Story = StoryObj<TextProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return <Text {...args} />;
  }
};

export const EllipsizedText: Story = {
  name: 'Ellipsized Text as span',
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  render: ({ children, ...args }) => {
    return (
      <Text
        {...args}
        asChild
      >
        <EllipsisText asChild>
          <span>{children}</span>
        </EllipsisText>
      </Text>
    );
  }
};
