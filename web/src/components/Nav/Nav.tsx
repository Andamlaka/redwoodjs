import { Link } from '@redwoodjs/router'

interface NavProps {
  routes?: {
    feed: () => string
    latest: () => string
    submitLink: () => string
    profile: (props: { nickname: string }) => string
  }
}

const Nav: React.FC<NavProps> = ({ routes }) => {
  if (!routes) {
    console.error('Routes object is undefined');
    return <div>Loading...</div>;  // Fallback UI
  }

  return (
    <nav className='top-bar sticky-bar fixed left-0 right-0 top-0 z-50 flex justify-between bg-cinder px-6 py-3 shadow-md'>
      {/* left side */}
      <ul>
        <li>
          <Link to={routes.feed()}>Home</Link>
        </li>
        <li>
          <Link to={routes.latest()}>Latest</Link>
        </li>
        <li>
          <Link to={routes.submitLink()}>Submit a Link</Link>
        </li>
      </ul>
      {/* right side */}
      <ul>
        <li><a href="#">Sign Up</a></li>
        <li><a href="#" className='button'>Login</a></li>
        <li><button>Logout</button></li>
        <li>
          <Link to={routes.profile({ nickname: 'any' })} className='button'>My Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
