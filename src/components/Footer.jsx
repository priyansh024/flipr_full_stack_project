import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">MediTrust</h2>
                        <p className="text-gray-400 text-sm">© 2025 MediTrust. All rights reserved.</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
