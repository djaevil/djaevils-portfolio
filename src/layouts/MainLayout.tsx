import React from "react";
import { Outlet, Link } from "react-router-dom";


const MainLayout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="text-lg font-semibold">
                        djaevil
                    </Link>
                    <div className="space-x-6 text-sm">
                        <Link to="/" className="hover:text-gray-300">
                            Home
                        </Link>
                        <Link to="/about" className="hover:text-gray-300">
                            About
                        </Link>
                        <Link to="/contact" className="hover:text-gray-300">
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>


            {/* Main content */}
            <main className="flex-1">
                <Outlet />
            </main>


            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400">
                <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm">
                    © {new Date().getFullYear()} djaevils portfolio. All rights reserved.
                </div>
            </footer>
        </div>
    );
};


export default MainLayout;