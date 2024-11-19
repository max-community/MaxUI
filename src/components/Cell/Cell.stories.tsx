import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Icon24Placeholder from '../../../.storybook/assets/icons/icon-24-placeholder.svg';
import { hideArgsControl } from '../../../.storybook/shared/args-manager.ts';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Counter } from '../Counter';
import { EllipsisText } from '../EllipsisText';
import { Cell, type CellProps } from './Cell';

const meta = {
  title: 'Common/Cell',
  component: Cell,
  argTypes: {
    ...hideArgsControl(['asChild', 'innerClassNames', 'onClick', 'as']),

    title: { type: 'string' },
    subtitle: { type: 'string' },
    before: {
      options: [0, 1, 2],
      mapping: [
        undefined,
        <Icon24Placeholder key="icon" />,
        <Avatar.Container key="avatar" rightBottomCorner={<Avatar.OnlineDot />} size={40}>
          <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
        </Avatar.Container>
      ],
      control: {
        type: 'select',
        labels: ['None', 'Icon', 'Avatar']
      }
    },
    after: {
      options: [0, 1, 2],
      mapping: [undefined, <Button mode="secondary" size="small" key="icon">Открыть</Button>, <Counter key="counter" value={1200} />],
      control: {
        type: 'select',
        labels: ['None', 'Button', 'Counter']
      }
    }
  },
  args: {
    title: 'Cell title',
    subtitle: 'Cell subtitle',
    height: 'normal',
    showChevron: false,
    before: 1,
    after: 1
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<CellProps>;

export default meta;
type Story = StoryObj<CellProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return <Cell {...args} />;
  }
};

export const TappableCell: Story = {
  name: 'Tappable',
  args: {
    showChevron: true,
    after: <Counter key="counter" value={1200} />,
    onClick: fn()
  },
  render: ({ ...args }) => {
    return <Cell {...args} />;
  }
};

export const AsLink: Story = {
  name: 'As link',
  args: {
    title: 'Я — ссылка!',
    subtitle: undefined,
    after: undefined
  },
  render: ({ children, ...args }) => {
    return (
      <Cell {...args} asChild>
        <a
          href="https://imgur.com/fJDSm0v"
          target="_blank"
          rel="noreferrer"
        />
      </Cell>
    );
  }
};

export const EllipsizedTitle: Story = {
  name: 'Ellipsized title',
  args: {
    title: 'Я — ячейка с очень длинным заголовком, поэтому люди не смогут дочитать меня до конца',
    subtitle: 'Подпись тоже очень длинная, но в этом примере она будет выводиться полностью'
  },
  render: ({ title, children, ...args }) => {
    return (
      <Cell
        title={<EllipsisText>{title}</EllipsisText>}
        {...args}
      />
    );
  }
};

export const EllipsizedSubtitle: Story = {
  name: 'Ellipsized subtitle',
  args: {
    title: 'Я — ячейка с очень длинным заголовком, но в этот раз текст не будет обрезан',
    subtitle: 'Чего не скажешь о длинной подписи, в этом примере она будет обрезан'
  },
  render: ({ subtitle, children, ...args }) => {
    return (
      <Cell
        subtitle={<EllipsisText>{subtitle}</EllipsisText>}
        {...args}
      />
    );
  }
};
