import type { Meta, StoryObj } from '@storybook/react';

import { OverlayContainer } from '../../../.storybook/components/OverlayContainer';
import { useColorScheme } from '../../hooks';
import { Button } from '../Button';
import { Counter, type CounterProps } from '../Counter';

const meta = {
  title: 'Common/Counter',
  component: Counter,
  args: {
    appearance: 'themed',
    value: 1200,
    rounded: false
  },
  decorators: [
    (Story, context) => {
      const colorScheme = useColorScheme();

      return (
        <OverlayContainer
          style={{ width: 375 }}
          appearance={context.args.appearance === 'contrast-static' || colorScheme === 'dark' ? 'dark' : 'light'}
        >
          <Story />
        </OverlayContainer>
      );
    }
  ]
} satisfies Meta<CounterProps>;

export default meta;
type Story = StoryObj<CounterProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return <Counter {...args} />;
  }
};

export const CounterInButton: Story = {
  name: 'Counter in Button',
  args: {
    appearance: 'inherit',
    value: 32
  },
  render: ({ ...args }) => {
    return (
      <Button
        indicator={<Counter {...args} />}
      >
        Messages
      </Button>
    );
  }
};
