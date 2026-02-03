import React from "react";
import { Outlet, Link } from "react-router-dom";

const MainLayout: React.FC = () => {
  const djaevil = "<djaevil.dev />";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold font-mono">
            {djaevil}
          </Link>
          <div className="space-x-8 text-sm font-semibold">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Me
            </Link>
            <Link to="/socials" className="nav-link">
              Socials
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
