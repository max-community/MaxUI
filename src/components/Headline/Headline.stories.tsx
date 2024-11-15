import type { Meta, StoryObj } from '@storybook/react';

import { hideArgsControl } from '../../../.storybook/shared/args-manager.ts';
import { EllipsisText } from '../EllipsisText';
import { Headline, type HeadlineProps } from './Headline';

const meta = {
  title: 'Typography/Headline',
  component: Headline,
  argTypes: {
    ...hideArgsControl(['asChild'])
  },
  args: {
    children: 'Hello world',
    variant: 'headline1'
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<HeadlineProps>;

export default meta;
type Story = StoryObj<HeadlineProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return <Headline {...args} />;
  }
};

export const HeadlineAsH1: Story = {
  name: 'Headline as H1',
  args: {
    children: 'Я — заголовок первого уровня'
  },
  render: ({ children, ...args }) => {
    return (
      <Headline
        {...args}
        asChild
      >
        <h1>{children}</h1>
      </Headline>
    );
  }
};

export const EllipsizedHeadline: Story = {
  name: 'Ellipsized Headline as H2',
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  render: ({ children, ...args }) => {
    return (
      <Headline
        {...args}
        asChild
      >
        <EllipsisText asChild>
          <h2>{children}</h2>
        </EllipsisText>
      </Headline>
    );
  }
};
