import { NavLink } from 'react-router-dom';
import image from '../assets/planet.png';
import '../style/Navbar.css';

const Navbar = () => (
  <nav>
    <div className="NavbarFirstSection">
      <img src={image} alt="" className=" image-logo" />
      <h2 className="space">Space Travelers&#39; Hub</h2>
    </div>
    <ul>
      <li>
        <NavLink to="/">
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/missions">
          Missions
        </NavLink>
      </li>
      <li>
        <div className="line" />
      </li>
      <li>
        <NavLink to="/profile">
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
