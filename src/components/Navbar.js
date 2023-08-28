import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => (
  <nav>
    <div className="NavbarFirstSection">
      <img src="" alt="" />
      <h2>Space Travelers&#39; Hub</h2>
    </div>
    <ul>
      <li>
        <NavLink exact to="/">
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/missions">
          Missions
        </NavLink>
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
