import { render } from '@redwoodjs/testing/web'

import PrivacesPage from './PrivacesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrivacesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrivacesPage />)
    }).not.toThrow()
  })
})
