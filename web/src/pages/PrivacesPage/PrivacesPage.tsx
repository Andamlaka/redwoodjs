// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PrivacesPage = () => {
  return (
    <>
      <Metadata title="Privaces" description="Privaces page" />

      <h1>PrivacesPage</h1>
      <p>
        Find me in <code>./web/src/pages/PrivacesPage/PrivacesPage.tsx</code>
      </p>
      {/*
          My default route is named `privaces`, link to me with:
          `<Link to={routes.privaces()}>Privaces</Link>`
      */}
    </>
  )
}

export default PrivacesPage
