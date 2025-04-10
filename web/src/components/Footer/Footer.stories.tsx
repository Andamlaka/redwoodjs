// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/7/writing-stories/args

import type { Meta, StoryObj } from '@storybook/react'

import Footer from './Footer'

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Footer>

export const Primary: Story = {}
