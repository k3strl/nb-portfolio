// import link and useLocation to allow user to move to different page components and know which page they are currently on
import { Link, useLocation } from 'react-router-dom';

// typical navbar with links to different page components
const Nav = () => {
  // establist a variable that hold current page location information
  const navLocation = useLocation();

  // return nav component
  return (
    <nav className='nav'>
      <Link key={1} to="/" className={navLocation.pathname === '/' ? 'nav-item nav-link active' : 'nav-item nav-link'}>
        Home
      </Link>
      <Link key={2} to="/Projects" className={navLocation.pathname === '/projects' ? 'nav-item nav-link active' : 'nav-item nav-link'}>
        Projects
      </Link>
      <Link key={2} to="/Resume" className={navLocation.pathname === '/resume' ? 'nav-item nav-link active' : 'nav-item nav-link'}>
        Resume
      </Link>
    </nav>
  )
};

// export nav component to be used in other files
export default Nav;