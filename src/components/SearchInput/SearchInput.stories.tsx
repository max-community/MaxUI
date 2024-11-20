import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput, type SearchInputProps } from './SearchInput';

const meta = {
  title: 'Common/SearchInput',
  component: SearchInput,
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<SearchInputProps>;

export default meta;
type Story = StoryObj<SearchInputProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return (
      <SearchInput
        {...args}
        defaultValue=""
      />
    );
  }
};
