import type { Meta, StoryObj } from '@storybook/react';

import { Grid, type GridProps } from './Grid';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  args: {
    gapX: 30,
    gapY: 10,
    cols: 3
  },
  tags: ['autodocs']
} satisfies Meta<GridProps>;

export default meta;
type Story = StoryObj<GridProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return (
      <Grid {...args}>
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
      </Grid>
    );
  }
};
