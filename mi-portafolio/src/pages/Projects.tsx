import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const projects = [
  {
    title: "E-commerce de Camisetas",
    description: "Tienda en línea para camisetas de fútbol con carrito de compras.",
    image: "https://camisetasfutbolsorpresa.myshopify.com/es/products/caja-camiseta-futbol-sorpresa",
    link: "https://proyecto-practicas-1.onrender.com",
  },
  {
    title: "Gestor de Tareas",
    description: "Aplicación para organizar tareas y mejorar la productividad.",
    image: "https://www.inabaweb.com/las-10-mejores-herramientas-para-la-gestion-de-tareas/",
    link: "https://ejercicio-tecnico-1.onrender.com",
  },
  {
    title: "Plataforma de Eventos",
    description: "Sistema para gestionar eventos con inscripción en línea.",
    image: "https://www.clicksvipcabine.com.br/plataforma-360/",
    link: "https://gestion-de-eventos-1vri.onrender.com",
  },
];

const Projects: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleBackClick = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
      window.location.href = "/";
    }, 500);
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      <button
        onClick={handleBackClick}
        className="absolute top-4 left-4 p-3 bg-[#BFA181] text-[#1b1b1b] rounded-full shadow-lg hover:bg-[#0A1828] hover:text-[#fafafa] transition"
      >
        <ArrowLeft size={24} />
      </button>
      
      <h2 className="text-4xl font-bold text-[#f5f5f5] mb-12 text-center">Proyectos</h2>
      
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
