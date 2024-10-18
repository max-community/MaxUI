import type { Meta, StoryObj } from '@storybook/react';

import { EllipsisText } from '../EllipsisText';
import { Paragraph, type ParagraphProps } from './Paragraph';

const meta = {
  title: 'Typography/Paragraph',
  component: Paragraph,
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
} satisfies Meta<ParagraphProps>;

export default meta;
type Story = StoryObj<ParagraphProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return <Paragraph {...args} />;
  }
};

export const EllipsizedParagraph: Story = {
  name: 'Ellipsized Paragraph as H3',
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  render: ({ children, ...args }) => {
    return (
      <Paragraph
        {...args}
        asChild
      >
        <EllipsisText asChild>
          <h3>{children}</h3>
        </EllipsisText>
      </Paragraph>
    );
  }
};
