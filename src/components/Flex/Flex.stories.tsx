import type { Meta, StoryObj } from '@storybook/react';

import { Flex, type FlexProps } from './Flex';

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    asChild: { table: { disable: true } },
    fallbackElement: { table: { disable: true } }
  },
  args: {
    gap: 12
  },
  tags: ['autodocs']
} satisfies Meta<FlexProps>;

export default meta;
type Story = StoryObj<FlexProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return (
      <Flex {...args}>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'var(--background-surface-ground)',
              width: 75,
              height: 75
            }}
          />
        ))}
      </Flex>
    );
  }
};
