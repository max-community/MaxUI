import type { Meta, StoryObj } from '@storybook/react';

import { CellInput, type CellInputProps } from './CellInput.tsx';

const meta = {
  title: 'Common/CellInput',
  component: CellInput,
  argTypes: {
    before: { type: 'string' }
  },
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
} satisfies Meta<CellInputProps>;

export default meta;
type Story = StoryObj<CellInputProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return <CellInput {...args} />;
  }
};
