import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { FiGithub, FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
  const socialItems = [
    { icon: <FiGithub size={20} />, label: "GitHub", onClick: () => window.open("https://github.com/dtrbinu-cloud", "_blank") },
    { icon: <FiInstagram size={20} />, label: "Instagram", onClick: () => window.open("https://www.instagram.com/vikqri/", "_blank") },
    { icon: <FiYoutube size={20} />, label: "YouTube", onClick: () => window.open("https://www.youtube.com/@Vikqri_", "_blank") },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10 gap-8">
      {/* Title */}
      <h1 className="text-2xl font-bold">Portofolio</h1>

      {/* Social Media Dock */}
      <div>
        <Dock
          items={socialItems}
          panelHeight={60}
          baseItemSize={50}
          magnification={80}
          distance={150}
        />
      </div>
    </div>
  );
};

export default Footer;
