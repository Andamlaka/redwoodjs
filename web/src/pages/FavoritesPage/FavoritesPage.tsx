// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const FavoritesPage = () => {
  return (
    <>
      <Metadata title="Favorites" description="Favorites page" />

      <h1>FavoritesPage</h1>
      <p>
        Find me in <code>./web/src/pages/FavoritesPage/FavoritesPage.tsx</code>
      </p>
      {/*
          My default route is named `favorites`, link to me with:
          `<Link to={routes.favorites()}>Favorites</Link>`
      */}
    </>
  )
}

export default FavoritesPage
