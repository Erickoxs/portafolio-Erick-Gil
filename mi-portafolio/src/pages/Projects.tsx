import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../hooks/LanguagueContext"; // Importa el hook de contexto

// Traducciones estáticas
const translations = {
  es: {
    title: "Proyectos",
    eCommerce: {
      title: "E-commerce de Camisetas",
      description: "Tienda en línea para camisetas de fútbol con carrito de compras.",
    },
    taskManager: {
      title: "Gestor de Tareas",
      description: "Aplicación para organizar tareas y mejorar la productividad.",
    },
    eventPlatform: {
      title: "Plataforma de Eventos",
      description: "Sistema para gestionar eventos con inscripción en línea.",
    },
    sportMingle: {
      title: "SportMingle",
      description: "Plataforma para organizar partidos, torneos y clubes deportivos.",
    },
  },
  en: {
    title: "Projects",
    eCommerce: {
      title: "Football Jersey E-commerce",
      description: "Online store for football jerseys with a shopping cart.",
    },
    taskManager: {
      title: "Task Manager",
      description: "Application to organize tasks and boost productivity.",
    },
    eventPlatform: {
      title: "Event Platform",
      description: "System to manage events with online registration.",
    },
    sportMingle: {
      title: "SportMingle",
      description: "Platform to organize matches, tournaments, and sports clubs.",
    },
  },
};

const Projects: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { englishMode } = useLanguage(); // Usamos el estado global de englishMode

  // Obtener las traducciones según el idioma actual
 const { title, eCommerce, taskManager, eventPlatform, sportMingle } = englishMode
  ? translations.en
  : translations.es;

  const handleBackClick = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
      window.location.href = "/";
    }, 500);
  };

  const projects = [
    {
  title: sportMingle.title,
  description: sportMingle.description,
  image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Soccer_ball_animated.svg", // Cambia por una mejor si tienes
  link: "https://sportmingle-1.onrender.com/", // Usa el link correcto
},
    {
      title: eCommerce.title,
      description: eCommerce.description,
      image: "https://camisetasfutbolsorpresa.myshopify.com/es/products/caja-camiseta-futbol-sorpresa",
      link: "https://proyecto-practicas-1.onrender.com",
    },
    {
      title: taskManager.title,
      description: taskManager.description,
      image: "https://www.inabaweb.com/las-10-mejores-herramientas-para-la-gestion-de-tareas/",
      link: "https://ejercicio-tecnico-1.onrender.com",
    },
    {
      title: eventPlatform.title,
      description: eventPlatform.description,
      image: "https://www.clicksvipcabine.com.br/plataforma-360/",
      link: "https://gestion-de-eventos-1vri.onrender.com",
    },
    
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      <button
        onClick={handleBackClick}
        className="absolute top-4 left-4 p-3 bg-[#BFA181] text-[#1b1b1b] rounded-full shadow-lg hover:bg-[#0A1828] hover:text-[#fafafa] transition"
      >
        <ArrowLeft size={24} />
      </button>
      
      <h2 className="text-4xl font-bold text-[#f5f5f5] mb-12 text-center">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="bg-[#BFA181] text-[#f5f5f5] p-4 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-[#0A1828] transition-transform transform hover:scale-105 overflow-hidden"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
          </motion.a>
        ))}
      </div>
      
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="fixed inset-0 bg-[#178582]"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
