import type { Meta, StoryObj } from '@storybook/react';

import { SB_ARGTYPES_RESETS } from '../../../.storybook/shared/args-resets.ts';
import { Flex, type FlexProps } from './Flex';

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  argTypes: {
    ...SB_ARGTYPES_RESETS
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
