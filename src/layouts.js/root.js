import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </>;
};

export default Root;
