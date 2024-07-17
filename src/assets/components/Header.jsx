import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full h-20 flex items-center justify-between bg-indigo-300 px-5 py-1 md:px-10 rounded-b-sm">
      <h1 className="text-white text-2xl font-bold font-great-vibes">VMS</h1>
      <nav className="hidden md:flex gap-5 items-center">
        <Link to="/" className="text-white font-bold hover:text-pink-200">
          Inicio
        </Link>
        <Link to="/about" className="text-white font-bold hover:text-pink-200">
          Acerca de
        </Link>
        <Link
          to="/services"
          className="text-white font-bold hover:text-pink-200"
        >
          Servicios
        </Link>
      </nav>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
        </button>
      </div>
      {menuOpen && (
        <nav className="z-40 absolute top-20 left-0 w-full bg-indigo-300 flex flex-col items-center md:hidden">
          <Link
            to="/"
            className="text-white mb-3 hover:text-pink-200 w-full text-center"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="text-white mb-3 hover:text-pink-200 w-full text-center"
            onClick={toggleMenu}
          >
            Acerca de
          </Link>
          <Link
            to="/services"
            className="text-white mb-3 hover:text-pink-200 w-full text-center"
            onClick={toggleMenu}
          >
            Servicios
          </Link>
        </nav>
      )}
    </header>
  );
}
