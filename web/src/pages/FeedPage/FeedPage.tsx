
import { Metadata } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router';
const FeedPage = () => {
  return (
    <>
      <Metadata title="Feed" description="Feed page" />

      <h1>FeedPage</h1>
      <p>
        Find me in <code>./web/src/pages/FeedPage/FeedPage.tsx</code>
      </p>
      <p>
          My default route is named `feed`, link to me with:
          `<Link to={routes.link({id: 'any'})}>Individual Link</Link>`
          </p>
    </>
  )
}

export default FeedPage
