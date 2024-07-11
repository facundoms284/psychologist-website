import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full h-20 flex items-center justify-between bg-indigo-600 px-5 py-2 md:px-10 rounded-b-sm">
      <div className="flex items-center gap-5">
        <img
          className="w-10 h-10 rounded-full"
          src="https://avatars.githubusercontent.com/u/104315951?v=4"
          alt="avatar"
        />
        <h1 className="text-white text-2xl font-bold">VMS</h1>
      </div>
      <nav className="hidden md:flex gap-5 items-center">
        <Link to="/" className="text-white font-bold hover:text-pink-300">
          Inicio
        </Link>
        <Link to="/about" className="text-white font-bold hover:text-pink-300">
          Sobre mi
        </Link>
        <Link to="/services" className="text-white font-bold hover:text-pink-300">
          Servicios
        </Link>
        <Link to="/contact" className="text-white font-bold hover:text-pink-300">
          Contacto
        </Link>
      </nav>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
        </button>
      </div>
      {menuOpen && (
        <nav className="absolute top-20 left-0 w-full bg-indigo-600 flex flex-col items-center md:hidden">
          <Link to="/" className="text-white hover:text-pink-300 border-b-2 border-white w-full px-1 text-center">
          Inicio
        </Link>
          <Link
            to="/about"
            className="text-white py-2 hover:text-pink-300 border-b-2 border-white w-full px-1 text-center"
            onClick={toggleMenu}
          >
            Sobre mi
          </Link>
          <Link
            to="/services"
            className="text-white py-2 hover:text-pink-300 border-b-2 border-white w-full px-1 text-center"
            onClick={toggleMenu}
          >
            Servicios
          </Link>
          <Link
            to="/contact"
            className="text-white py-2 hover:text-pink-300 border-b-2 border-white w-full px-1 text-center"
            onClick={toggleMenu}
          >
            Contacto
          </Link>
        </nav>
      )}
    </header>
  );
}