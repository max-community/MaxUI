import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { type ReactNode } from 'react';

import Icon16Placeholder from '../../../.storybook/assets/icons/icon-16-placeholder.svg';
import Icon24Placeholder from '../../../.storybook/assets/icons/icon-24-placeholder.svg';
import { OverlayContainer } from '../../../.storybook/components/OverlayContainer';
import { Counter } from '../Counter';
import { Dot } from '../Dot';
import { Button, type ButtonProps, type ButtonSize } from './Button';

const iconsMapping: Record<ButtonSize, ReactNode> = {
  small: <Icon16Placeholder />,
  medium: <Icon24Placeholder />,
  large: <Icon24Placeholder />
};

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    iconBefore: { control: 'boolean' },
    iconAfter: { control: 'boolean' },
    innerClassNames: { table: { disable: true } },
    indicator: {
      options: [0, 1, 2],
      mapping: [undefined, <Counter key="counter" value={123456} />, <Dot key="dot" aria-label="Есть новые уведомления" />],
      control: {
        type: 'select',
        labels: ['None', 'Counter', 'Dot']
      }
    },
    fallbackElement: { table: { disable: true } },
    asChild: { table: { disable: true } },
    onClick: { table: { disable: true } }
  },
  args: {
    mode: 'primary',
    appearance: 'accent',
    size: 'medium',
    iconAfter: false,
    iconBefore: false,
    indicator: 0,
    children: 'Button',
    disabled: false,
    stretched: false,
    onClick: fn
  },
  decorators: [
    (Story, context) => (
      <OverlayContainer
        style={{ width: 375 }}
        appearance={context.args.appearance === 'contrast-static' ? 'dark' : 'light'}
      >
        <Story />
      </OverlayContainer>
    )
  ]
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Playground: Story = {
  render: ({ iconBefore, iconAfter, indicator, size = 'medium', ...args }) => {
    return (
      <Button
        {...args}
        size={size}
        iconBefore={Boolean(iconBefore) && iconsMapping[size]}
        iconAfter={Boolean(iconAfter) && iconsMapping[size]}
        indicator={indicator}
      />
    );
  }
};

export const LinkAsButton: Story = {
  name: 'Link as Button',
  args: {
    children: 'Я — ссылка!',
    onClick: undefined
  },
  render: ({ iconBefore, iconAfter, indicator, size = 'medium', children, ...args }) => {
    return (
      <Button
        {...args}
        size={size}
        iconBefore={Boolean(iconBefore) && iconsMapping[size]}
        iconAfter={Boolean(iconAfter) && iconsMapping[size]}
        indicator={indicator}
        asChild
      >
        <a
          href="https://imgur.com/KFEnxtU"
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      </Button>
    );
  }
};
