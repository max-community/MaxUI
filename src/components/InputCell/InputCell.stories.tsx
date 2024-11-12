import type { Meta, StoryObj } from '@storybook/react';

import { InputCell, type InputCellProps } from './InputCell';

const meta = {
  title: 'Common/InputCell',
  component: InputCell,
  args: {
    before: 'First name',
    height: 'normal',
    placeholder: 'Иван Иванов'
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<InputCellProps>;

export default meta;
type Story = StoryObj<InputCellProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return <InputCell {...args} />;
  }
};
