import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Rockets from './components/pages/Rockets';
import Missions from './components/pages/Missions';
import { getMissions } from './redux/missions/missionSlice';
import MyProfile from './components/profile';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
