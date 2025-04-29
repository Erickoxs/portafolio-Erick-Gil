import React from "react";
import { useLanguage } from "../hooks/LanguagueContext";

const LanguageToggle: React.FC = () => {
  const { englishMode, toggleLanguage } = useLanguage();

  const flags: { [key: string]: string } = {
    "true": "/colombia.png", // Bandera de Colombia para inglés
    "false": "/USA.png", // Bandera de USA para español
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-4 left-4 w-12 h-12 rounded-full shadow-md border border-gray-300 hover:scale-105 transition-transform"
      title="Cambiar idioma"
    >
      <img
        src={flags[englishMode.toString()]} // Convierte el booleano a string
        alt="Language Flag"
        className="object-cover w-full h-full rounded-full" // Uso de object-cover para que la imagen cubra el círculo sin distorsión
      />
    </button>
  );
};

export default LanguageToggle;
