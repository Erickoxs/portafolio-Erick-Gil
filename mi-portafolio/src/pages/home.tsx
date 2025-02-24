import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
      window.location.href = "projects";
    }, 500);
  };

  return (
    <div className="relative min-h-screen text-[#f5f5f5] flex flex-col items-center justify-center px-4 font-sans overflow-hidden">
      {/* Fondo animado con gradiente */}
      <div className="background-animated"></div>
      
      <h1 className="absolute top-4 left-4 text-6xl md:text-8xl font-extrabold text-[#BFA181]">
        ERICK GIL 
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-[#BFA181] mb-4 mt-24">
        ¡Bienvenido a mi Portafolio!
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center font-light">
        Soy un desarrollador Full Stack, apasionado por la creación 
        de soluciones eficientes y escalables. Poseo habilidades en 
        JavaScript, TypeScript, React, Node.js, y bases de datos 
        relacionales y NoSQL.
      </p>
      <button
        onClick={handleClick}
        className="mt-6 px-6 py-3 bg-[#BFA181] text-[#1b1b1b] font-semibold rounded-lg shadow-lg hover:bg-[#0A1828] hover:text-[#fafafa] transition"
      >
        Ver mis proyectos
      </button>
      
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="fixed inset-0 bg-[#178582]"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
