// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const LatestPage = () => {
  return (
    <>
      <Metadata title="Latest" description="Latest page" />

      <h1>LatestPage</h1>
      <p>
        Find me in <code>./web/src/pages/LatestPage/LatestPage.tsx</code>
      </p>
      {/*
          My default route is named `latest`, link to me with:
          `<Link to={routes.latest()}>Latest</Link>`
      */}
    </>
  )
}

export default LatestPage
