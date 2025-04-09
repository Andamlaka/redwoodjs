import { render, screen } from '@redwoodjs/testing/web'

import Nav from './Nav'
import { routes } from '@redwoodjs/router'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Nav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Nav />)
    }).not.toThrow()
  })
  it('links to the home page', () => {
    render(<Nav />)
    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveAttribute('href', '/')
  })
  
  describe('when a user is not logged in', () => {
  it.skip('links to the submit a link page page', () => {})
  it.skip('links to the login page', () => {})
})

describe('when a user is logged in', () => {
  it.skip('links to the sign up page', () => {})
  it.skip('links to the logout page', () => {})
  it.skip('links to the profile page', () => {})
})

})  
