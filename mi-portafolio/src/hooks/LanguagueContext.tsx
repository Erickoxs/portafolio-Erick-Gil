// src/hooks/LanguageContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Definir el contexto
const LanguageContext = createContext<any>(null);

// Tipar correctamente la propiedad `children` en el provider
interface LanguageProviderProps {
  children: ReactNode; // Definimos que `children` puede ser cualquier cosa que se pueda renderizar en React
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [englishMode, setEnglishMode] = useState<boolean>(false);

  // Cargar el idioma desde localStorage al iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage === "en") {
      setEnglishMode(true);
    } else {
      setEnglishMode(false);
    }
  }, []);

  // Cambiar el idioma y guardar la preferencia en localStorage
  const toggleLanguage = () => {
    setEnglishMode((prev) => {
      const newLanguage = !prev;
      localStorage.setItem("language", newLanguage ? "en" : "es");
      return newLanguage;
    });
  };

  return (
    <LanguageContext.Provider value={{ englishMode, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
