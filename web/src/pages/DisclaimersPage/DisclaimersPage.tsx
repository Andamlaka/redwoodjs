// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const DisclaimersPage = () => {
  return (
    <>
      <Metadata title="Disclaimers" description="Disclaimers page" />

      <h1 className='font-condensed text-telemagenta'>DisclaimersPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/DisclaimersPage/DisclaimersPage.tsx</code>
      </p>
      {/*
          My default route is named `disclaimers`, link to me with:
          `<Link to={routes.disclaimers()}>Disclaimers</Link>`
      */}
    </>
  )
}

export default DisclaimersPage
