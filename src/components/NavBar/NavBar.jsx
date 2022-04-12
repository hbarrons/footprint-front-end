import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link to="/myprofile" class="navbar-brand">my Footprint</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className='container-fluid'>
              <ul className='navbar-nav'>
                <li nav-item><Link to="/footprints/new" className='nav-link active'>Add Footprint</Link></li>
                <li nav-item><Link to="/footprints" className='nav-link active'>My Footprints</Link></li>
                <li nav-item><Link to="/profiles" className='nav-link active'>Profiles</Link></li>
                <li nav-item><Link to="" onClick={handleLogout} className='nav-link active'>LOG OUT</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      :
        <nav>
          <ul>
            <li className='nav-item'><Link to="/login" className='nav-link active'>Log In</Link></li>
            <li className='nav-item'><Link to="/signup" className='nav-link active'>Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
