import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Folder, Mail, Lock } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 glass-morphism bg-white/80 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold gradient-text">MediTrust</Link>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                            <Home size={16} /> Home
                        </Link>
                        <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                        <a href="#projects" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                            <Folder size={16} /> Projects
                        </a>
                        <a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                            <Users size={16} /> Testimonials
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                            <Mail size={16} /> Contact
                        </a>
                    </div>
                    <div>
                        <Link to="/admin" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-lg shadow-blue-500/30 flex items-center gap-2">
                            <Lock size={16} /> Admin
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
