import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 flex space-x-4">
      <a
        href="https://github.com/Erickoxs"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#BFA181] text-3xl hover:text-[#f5f5f5] transition"
      >
        <FontAwesomeIcon icon={faGithub} style={{ color: "#bfa181" }} />
      </a>
      <a
        href="https://www.linkedin.com/in/erick-gil-940a86251/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#BFA181] text-3xl hover:text-[#f5f5f5] transition"
      >
        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#bfa181" }} />
      </a>
    </div>
  );
};

export default SocialLinks;
