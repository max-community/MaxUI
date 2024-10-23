import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Icon24Placeholder from '../../../.storybook/assets/icons/icon-24-placeholder.svg';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Counter } from '../Counter';
import { EllipsisText } from '../EllipsisText';
import { Cell, type CellProps } from './Cell';

const meta = {
  title: 'Common/Cell',
  component: Cell,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    fallbackElement: { table: { disable: true } },
    asChild: { table: { disable: true } },
    innerClassNames: { table: { disable: true } },
    onClick: { table: { disable: true } },
    before: {
      options: [0, 1, 2],
      mapping: [
        undefined,
        <Icon24Placeholder key="icon" />,
        <Avatar.Container key="avatar" rightBottomCorner={<Avatar.Online />} size={40}>
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
    heading: 'Cell heading',
    subtitle: 'Cell subtitle',
    height: 'normal',
    showChevron: true,
    before: 1,
    after: 2,
    onClick: fn
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

export const CellWithButton: Story = {
  name: 'Cell with button',
  args: {
    showChevron: false,
    after: <Button size="small" mode="secondary">Открыть</Button>,
    onClick: undefined
  },
  render: ({ ...args }) => {
    return <Cell {...args} />;
  }
};

export const CellAsLink: Story = {
  name: 'Cell as link',
  args: {
    heading: 'Я — ссылка!',
    subtitle: 'И у меня есть hover состояние'
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

export const EllipsizedHeading: Story = {
  name: 'Ellipsized heading',
  args: {
    heading: 'Я — ячейка с очень длинным заголовком, поэтому люди не смогут дочитать меня до конца',
    subtitle: 'Подпись тоже очень длинная, но в этом примере она будет выводиться полностью'
  },
  render: ({ heading, children, ...args }) => {
    return (
      <Cell
        heading={<EllipsisText>{heading}</EllipsisText>}
        {...args}
      />
    );
  }
};

export const EllipsizedSubtitle: Story = {
  name: 'Ellipsized subtitle',
  args: {
    heading: 'Я — ячейка с очень длинным заголовком, но в этот раз текст не будет обрезан',
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
