import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../Avatar';
import { Cell } from '../Cell';
import { CellList } from '../CellList';
import { Panel } from '../Panel';
import { CellHeader, type CellHeaderProps } from './CellHeader';

const meta = {
  title: 'Common/CellHeader',
  component: CellHeader,
  args: {
    children: 'Пользователь',
    titleStyle: 'caps'
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375, height: 375 }}>
        <Panel mode="secondary" centeredY>
          <Story />
        </Panel>
      </div>
    )
  ]
} satisfies Meta<CellHeaderProps>;

export default meta;
type Story = StoryObj<CellHeaderProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return (
      <CellList
        header={<CellHeader {...args} />}
        mode="island"
      >
        <Cell
          title="Vadim Tregubenko"
          before={(
            <Avatar.Container size={40}>
              <Avatar.Image src="https://sun9-67.userapi.com/s/v1/ig2/CY_xDesKnMtl0OiJynK0oc7QnxQVJUgeciJSi_MpZUiE3EHSCNltr76jugXaygGd2Xh0M8-61v7Jwfl1kO87YWVe.jpg?quality=95&crop=0,0,1440,1440&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440&ava=1&u=SpmuDKJYdLKKRYYDgjLVQdEn6QnBonR3kSYxCSkCnm4&cs=200x200" />
            </Avatar.Container>
          )}
          showChevron
          onClick={() => {}}
        />
      </CellList>
    );
  }
};
