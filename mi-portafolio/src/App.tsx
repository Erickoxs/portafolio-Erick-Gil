import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Asegúrate de que el archivo CSS esté importado
import Home from './pages/home';
import Projects from './pages/Projects';
import SocialLinks from './components/SocialLinks';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen">
        {/* Fondo animado con gradiente */}
        <div className="background-animated"></div>

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects/>}/>
          </Routes>

          <SocialLinks/>
        </div>
      </div>
    </Router>
  );
};

export default App;
