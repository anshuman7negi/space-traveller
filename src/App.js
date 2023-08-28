import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/pages/Rockets';
import Mission from './components/pages/Mission';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
      </Routes>
    </div>
  );
}

export default App;
