import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => (
  <nav>
    <div className="NavbarFirstSection">
      <img src="" alt="" />
      <h2>Space Travelers&#39; Hub</h2>
    </div>
    <ul>
      <li>
        <Link to="/">Rockets</Link>
      </li>
      <li>
        <Link to="/">Missions</Link>
      </li>
      <li>
        <Link to="/">My Profile</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
