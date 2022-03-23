import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/common.css';
//import Navbar from './components/Navbar';
//import Intro from './pages/Home';
//import Projects from './pages/Projects';
//import Resume from './pages/Resume';
//import About from './pages/About';
//import Sidebar from './components/Sidebar';
import Home from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
      </Routes>
    </Router>
  );
}

export default App;
