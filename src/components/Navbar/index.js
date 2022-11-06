import {HiOutlineGlobeAlt} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaUserCircle} from 'react-icons/fa'
import './index.css'

const Navbar = () => (
  <div className="nav-container">
    <div className="nav-items-container">
      <img
        src="https://res.cloudinary.com/ddb9gpwaj/image/upload/v1667707404/Airbnb-logo-vector-01_t0vhpv.svg"
        alt="website logo"
        className="website-logo"
      />
      <div className="nav-items">
        <p className="host">Become a host</p>
        <HiOutlineGlobeAlt className="browser-icon" />
        <button type="button" className="profile-button">
          <GiHamburgerMenu className="hamburger-icon" />
          <FaUserCircle className="profile-icon" />
        </button>
      </div>
    </div>
  </div>
)
export default Navbar
