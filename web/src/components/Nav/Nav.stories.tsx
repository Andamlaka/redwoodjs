import { Meta, StoryObj } from '@storybook/react'
import Nav from './Nav'

const mockRoutes = {
  feed: () => '/feed',
  latest: () => '/latest',
  submitLink: () => '/submit',
  profile: ({ nickname }: { nickname: string }) => `/profile/${nickname}`,
}

const meta: Meta<typeof Nav> = {
  component: Nav,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Nav>

export const Primary: Story = {
  args: {
    
    routes: mockRoutes, // Ensure mockRoutes are passed here
  },
  render:() =>{
    return (
      <>
     <Nav routes={mockRoutes} />
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde nemo neque voluptatibus sunt, praesentium eveniet deleniti explicabo fuga quia inventore rem iure nulla accusantium similique hic et at temporibus.</p>
     </>
    ) 
  }
}
