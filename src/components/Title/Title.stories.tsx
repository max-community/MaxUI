import type { Meta, StoryObj } from '@storybook/react';

import { hideArgsControl } from '../../../.storybook/shared/args-manager.ts';
import { EllipsisText } from '../EllipsisText';
import { Title, type TitleProps } from './Title';

const meta = {
  title: 'Typography/Title',
  component: Title,
  argTypes: {
    ...hideArgsControl(['asChild', 'fallbackElement'])
  },
  args: {
    children: 'Hello world',
    variant: 'title1'
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<TitleProps>;

export default meta;
type Story = StoryObj<TitleProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return <Title {...args} />;
  }
};

export const TitleAsH1: Story = {
  name: 'Title as H1',
  args: {
    children: 'Я — заголовок первого уровня'
  },
  render: ({ children, ...args }) => {
    return (
      <Title
        {...args}
        asChild
      >
        <h1>{children}</h1>
      </Title>
    );
  }
};

export const EllipsizedTitle: Story = {
  name: 'Ellipsized Title as H2',
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  render: ({ children, ...args }) => {
    return (
      <Title
        {...args}
        asChild
      >
        <EllipsisText asChild>
          <h2>{children}</h2>
        </EllipsisText>
      </Title>
    );
  }
};
