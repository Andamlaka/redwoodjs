// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const TermsPage = () => {
  return (
    <>
      <Metadata title="Terms" description="Terms page" />

      <h1>TermsPage</h1>
      <p>
        Find me in <code>./web/src/pages/TermsPage/TermsPage.tsx</code>
      </p>
      {/*
          My default route is named `terms`, link to me with:
          `<Link to={routes.terms()}>Terms</Link>`
      */}
    </>
  )
}

export default TermsPage
