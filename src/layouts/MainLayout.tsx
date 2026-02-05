import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const MainLayout: React.FC = () => {
  const djaevil = "<djaevil.dev />";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold font-mono">
            {djaevil}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Me
            </Link>
            <Link to="/contact" className="nav-link">
              Get In Touch
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-48" : "max-h-0"
          }`}
        >
          <div className="px-6 pb-4 flex flex-col space-y-4 text-sm font-semibold">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About Me
            </Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Get In Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm">
          © {new Date().getFullYear()} djaevil.dev. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
