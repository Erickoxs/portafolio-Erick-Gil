import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/LanguagueContext"; // Importa el hook de contexto

// Traducciones estáticas
const translations = {
  es: {
    hero: {
      welcome: "¡Bienvenido a mi portafolio!",
      description:
        "Soy un desarrollador Full Stack, apasionado por crear soluciones eficientes y escalables. Tengo habilidades en JavaScript, TypeScript, React, Node.js y bases de datos relacionales y NoSQL.",
      viewProjects: "Ver mis proyectos",
    },
    projects: {
      title: "Proyectos",
      ecommerceTitle: "E-commerce de Camisetas de Fútbol",
      ecommerceDescription: "Tienda en línea para camisetas de fútbol con carrito de compras.",
      taskManagerTitle: "Gestor de Tareas",
      taskManagerDescription: "Aplicación para organizar tareas y mejorar la productividad.",
      eventPlatformTitle: "Plataforma de Eventos",
      eventPlatformDescription: "Sistema para gestionar eventos con inscripción en línea.",
    },
  },
  en: {
    hero: {
      welcome: "Welcome to my Portfolio!",
      description:
        "I’m a Full Stack developer, passionate about creating efficient and scalable solutions. I have skills in JavaScript, TypeScript, React, Node.js, and relational and NoSQL databases.",
      viewProjects: "View my projects",
    },
    projects: {
      title: "Projects",
      ecommerceTitle: "Football Jersey E-commerce",
      ecommerceDescription: "Online store for football jerseys with a shopping cart.",
      taskManagerTitle: "Task Manager",
      taskManagerDescription: "Application to organize tasks and boost productivity.",
      eventPlatformTitle: "Event Platform",
      eventPlatformDescription: "System to manage events with online registration.",
    },
  },
};

const Home: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { englishMode } = useLanguage(); // Usamos el estado global de englishMode

  // Obtener las traducciones según el idioma actual
  const { hero, projects } = englishMode ? translations.en : translations.es;

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
        {hero.welcome}
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center font-light">
        {hero.description}
      </p>
      <button
        onClick={handleClick}
        className="mt-6 px-6 py-3 bg-[#BFA181] text-[#1b1b1b] font-semibold rounded-lg shadow-lg hover:bg-[#0A1828] hover:text-[#fafafa] transition"
      >
        {hero.viewProjects}
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
