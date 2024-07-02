import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;


