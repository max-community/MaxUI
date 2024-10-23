import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../Avatar';
import { Cell } from '../Cell';
import { Paragraph } from '../Paragraph';
import { Section } from '../Section';
import { Panel, type PanelProps } from './Panel';

const meta = {
  title: 'Common/Panel',
  component: Panel,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    mode: 'primary',
    centered: false
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375, height: 375 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<PanelProps>;

export default meta;
type Story = StoryObj<PanelProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return (
      <Panel {...args}>
        <Paragraph>Panel body</Paragraph>
      </Panel>
    );
  }
};

export const PrimaryExample: Story = {
  name: 'Primary example',
  args: {
    mode: 'primary',
    centered: true
  },
  render: ({ ...args }) => {
    return (
      <Panel {...args}>
        <Section>
          <Cell
            heading="Igor Foxik"
            before={(
              <Avatar.Container size={40}>
                <Avatar.Image src="https://sun9-67.userapi.com/s/v1/ig2/JsDOGxKlelRtyPp3DgWYYxPbSMfsENZjZdWiDANWbV7MEmsJjdIivjgHhWTH5JlNJCJVX-KBKhIYahjkbjzvxxhD.jpg?quality=95&crop=344,13,854,854&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&cs=100x100" />
              </Avatar.Container>
            )}
            showChevron
            onClick={() => {}}
          />
          <Cell
            heading="Vadim Tregubenko"
            before={(
              <Avatar.Container size={40}>
                <Avatar.Image src="https://sun9-67.userapi.com/s/v1/ig2/CY_xDesKnMtl0OiJynK0oc7QnxQVJUgeciJSi_MpZUiE3EHSCNltr76jugXaygGd2Xh0M8-61v7Jwfl1kO87YWVe.jpg?quality=95&crop=0,0,1440,1440&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440&ava=1&u=SpmuDKJYdLKKRYYDgjLVQdEn6QnBonR3kSYxCSkCnm4&cs=200x200" />
              </Avatar.Container>
            )}
            showChevron
            onClick={() => {}}
          />
          <Cell
            heading="Ira Grishina"
            before={(
              <Avatar.Container size={40}>
                <Avatar.Image src="https://sun9-22.userapi.com/s/v1/ig2/GIx9ixLIVcH_Cu_E5hwjYXqHSDGEO6XkE33wfKgVvs1c33VaMO24otPJ_nrgWHt7dOP1B3kWEYxoIezkFxu9ygxZ.jpg?quality=95&crop=100,579,1010,1010&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&cs=100x100" />
              </Avatar.Container>
            )}
            showChevron
            onClick={() => {}}
          />
          <Cell
            heading="Misha Zubkov"
            before={(
              <Avatar.Container size={40}>
                <Avatar.Image src="https://sun9-47.userapi.com/s/v1/ig2/-DYTYLapJ8r0r9wLZfAYI1OrgscIeYSwQd4o-xSzEmp0hFisghOOWRYkEwn-ZHguTPnTVvb5weq3kwAhlgPqAfWi.jpg?quality=95&crop=0,145,1800,1800&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440&ava=1&cs=100x100" />
              </Avatar.Container>
            )}
            showChevron
            onClick={() => {}}
          />
        </Section>
      </Panel>
    );
  }
};

export const SecondaryExample: Story = {
  name: 'Secondary example',
  args: {
    mode: 'secondary',
    centered: true
  },
  render: ({ ...args }) => {
    return (
      <Panel {...args}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Section mode="island">
            <Cell
              heading="Igor Foxik"
              before={(
                <Avatar.Container size={40}>
                  <Avatar.Image src="https://sun9-67.userapi.com/s/v1/ig2/JsDOGxKlelRtyPp3DgWYYxPbSMfsENZjZdWiDANWbV7MEmsJjdIivjgHhWTH5JlNJCJVX-KBKhIYahjkbjzvxxhD.jpg?quality=95&crop=344,13,854,854&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&cs=100x100" />
                </Avatar.Container>
              )}
              showChevron
              onClick={() => {}}
            />
            <Cell
              heading="Vadim Tregubenko"
              before={(
                <Avatar.Container size={40}>
                  <Avatar.Image src="https://sun9-67.userapi.com/s/v1/ig2/CY_xDesKnMtl0OiJynK0oc7QnxQVJUgeciJSi_MpZUiE3EHSCNltr76jugXaygGd2Xh0M8-61v7Jwfl1kO87YWVe.jpg?quality=95&crop=0,0,1440,1440&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440&ava=1&u=SpmuDKJYdLKKRYYDgjLVQdEn6QnBonR3kSYxCSkCnm4&cs=200x200" />
                </Avatar.Container>
              )}
              showChevron
              onClick={() => {}}
            />
            <Cell
              heading="Ira Grishina"
              before={(
                <Avatar.Container size={40}>
                  <Avatar.Image src="https://sun9-22.userapi.com/s/v1/ig2/GIx9ixLIVcH_Cu_E5hwjYXqHSDGEO6XkE33wfKgVvs1c33VaMO24otPJ_nrgWHt7dOP1B3kWEYxoIezkFxu9ygxZ.jpg?quality=95&crop=100,579,1010,1010&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&cs=100x100" />
                </Avatar.Container>
              )}
              showChevron
              onClick={() => {}}
            />
            <Cell
              heading="Misha Zubkov"
              before={(
                <Avatar.Container size={40}>
                  <Avatar.Image src="https://sun9-47.userapi.com/s/v1/ig2/-DYTYLapJ8r0r9wLZfAYI1OrgscIeYSwQd4o-xSzEmp0hFisghOOWRYkEwn-ZHguTPnTVvb5weq3kwAhlgPqAfWi.jpg?quality=95&crop=0,145,1800,1800&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440&ava=1&cs=100x100" />
                </Avatar.Container>
              )}
              showChevron
              onClick={() => {}}
            />
          </Section>
        </div>
      </Panel>
    );
  }
};
