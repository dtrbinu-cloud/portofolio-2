import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  // ⛔ Saat hidden, jangan render apa pun
  if (hidden) return null;

  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll(); // init posisi saat mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${active ? "py-4 bg-white/10 backdrop-blur-md" : "py-7 bg-transparent"}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 gap-2 sm:gap-0">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-2xl sm:text-3xl font-bold text-white p-1 sm:bg-transparent sm:text-white">
            Portofolio
          </h1>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Menu */}
        <ul className={`navbar-menu flex flex-wrap justify-center items-center gap-4 sm:gap-10 ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(false)}>
          <li><a href="#home" className="text-xs sm:text-lg font-medium text-white hover:text-gray-300 transition-colors">Home</a></li>
          <li><a href="#about" className="text-xs sm:text-lg font-medium text-white hover:text-gray-300 transition-colors">About</a></li>
          <li><a href="#skills" className="text-xs sm:text-lg font-medium text-white hover:text-gray-300 transition-colors">Skills</a></li>
          <li><a href="#certificates" className="text-xs sm:text-lg font-medium text-white hover:text-gray-300 transition-colors">Certificates</a></li>
          <li><a href="#project" className="text-xs sm:text-lg font-medium text-white hover:text-gray-300 transition-colors">Project</a></li>
          <li><a href="#contact" className="text-xs sm:text-lg font-medium text-white hover:text-gray-300 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
