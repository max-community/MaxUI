import type { Meta, StoryObj } from '@storybook/react';

import { Cell } from '../Cell';
import { Switch, type SwitchProps } from './Switch.tsx';

const meta = {
  title: 'Forms/Switch',
  component: Switch,
  args: {
    disabled: false
  }
} satisfies Meta<SwitchProps>;

export default meta;
type Story = StoryObj<SwitchProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return (
      <Switch
        {...args}
        defaultChecked={false}
      />
    );
  }
};

export const WithCell: Story = {
  name: 'Cell with Switch',
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    )
  ],
  render: ({ ...args }) => {
    return (
      <Cell
        fallbackElement="label"
        after={(
          <Switch
            {...args}
            defaultChecked={false}
          />
        )}
        heading="Cell"
        subtitle="Description"
      />
    );
  }
};
