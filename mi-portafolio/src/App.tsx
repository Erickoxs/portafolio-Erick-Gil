import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Asegúrate de que el archivo CSS esté importado
import Home from './pages/home';
import Projects from './pages/Projects';
import SocialLinks from './components/SocialLinks';
import LanguageToggle from './components/toggleLanguage';
import { LanguageProvider } from './hooks/LanguagueContext';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen">
        {/* Fondo animado con gradiente */}
        <div className="background-animated"></div>

        <div className="flex-grow">
          {/* Envuelve los componentes que necesitan acceder al contexto LanguageProvider */}
          <LanguageProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
            {/* El LanguageToggle ahora está dentro del proveedor y puede acceder al contexto */}
            <LanguageToggle />
          </LanguageProvider>
          <SocialLinks />
        </div>
      </div>
    </Router>
  );
};

export default App;
