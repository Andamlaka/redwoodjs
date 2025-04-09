// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ProfilePage = () => {
  return (
    <>
      <Metadata title="Profile" description="Profile page" />

      <h1>ProfilePage</h1>
      <p>
        Find me in <code>./web/src/pages/ProfilePage/ProfilePage.tsx</code>
      </p>
      {/*
          My default route is named `profile`, link to me with:
          `<Link to={routes.profile()}>Profile</Link>`
      */}
    </>
  )
}

export default ProfilePage
