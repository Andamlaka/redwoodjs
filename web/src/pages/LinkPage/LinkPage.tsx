 import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const LinkPage = ({id}) => {
  return (
    <>
      <Metadata title="Link" description="Link page" />

      <h1>LinkPage {id}</h1>
      <p>
        Find me in <code>./web/src/pages/LinkPage/LinkPage.tsx</code>
      </p>
      
          My default route is named `link`, link to me with:
          `<Link to={routes.link({id:'any'})}>Link</Link>`
     
    </>
  )
}

export default LinkPage
