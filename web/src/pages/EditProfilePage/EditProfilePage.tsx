// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const EditProfilePage = () => {
  return (
    <>
      <Metadata title="EditProfile" description="EditProfile page" />

      <h1>EditProfilePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/EditProfilePage/EditProfilePage.tsx</code>
      </p>
      {/*
          My default route is named `editProfile`, link to me with:
          `<Link to={routes.editProfile()}>EditProfile</Link>`
      */}
    </>
  )
}

export default EditProfilePage
