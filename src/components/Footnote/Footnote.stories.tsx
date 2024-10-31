import type { Meta, StoryObj } from '@storybook/react';

import { hideArgsControl } from '../../../.storybook/shared/args-manager';
import { EllipsisText } from '../EllipsisText';
import { Footnote, type FootnoteProps } from './Footnote';

const meta = {
  title: 'Typography/Footnote',
  component: Footnote,
  argTypes: {
    ...hideArgsControl(['asChild', 'fallbackElement'])
  },
  args: {
    children: 'Hello world',
    variant: 'footnote'
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<FootnoteProps>;

export default meta;
type Story = StoryObj<FootnoteProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return <Footnote {...args} />;
  }
};

export const FootnoteAsP: Story = {
  name: 'Footnote as p',
  args: {
    children: 'Я — абзац!'
  },
  render: ({ children, ...args }) => {
    return (
      <Footnote
        {...args}
        asChild
      >
        <p>{children}</p>
      </Footnote>
    );
  }
};

export const EllipsizedFootnote: Story = {
  name: 'Ellipsized Footnote as p',
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  render: ({ children, ...args }) => {
    return (
      <Footnote
        {...args}
        asChild
      >
        <EllipsisText asChild>
          <p>{children}</p>
        </EllipsisText>
      </Footnote>
    );
  }
};
