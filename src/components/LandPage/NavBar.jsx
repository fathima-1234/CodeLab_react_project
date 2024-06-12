import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/images/logo.png';
import sitting from '../../assests/images/sitting.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-customBackground shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-200.69px h-60px" />
                </div>
                <div className="hidden md:flex space-x-3">
                    <Link to="/" className="text-gray-800 hover:text-blue-400">Home</Link>
                    <span className="text-gray-500">|</span>
                    <Link to="/about" className="text-black hover:text-gray-600">About</Link>
                    <span className="text-gray-500">|</span>
                    <Link to="/blog" className="text-black hover:text-gray-600">Blog</Link>
                    <span className="text-gray-500">|</span>
                    <Link to="/get-app" className="text-black hover:text-gray-600">Get the App</Link>
                    <span className="text-gray-500">|</span>
                    <Link to="/add-lab" className="text-black hover:text-gray-600">Add Lab</Link>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <Link to="/login" className="text-black hover:text-blue-400">Login</Link>

                    <span className="text-gray-800">/</span>
                    <Link to="/signup" className="text-black hover:text-blue-400">Sign Up</Link>
                    <img src={sitting} alt="Popular Lab" className="w-10 h-10 bg-slate-50 rounded-full" />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <Link to="/" className="block px-4 py-2 text-gray-800 hover:text-gray-600">Home</Link>
                    <Link to="/about" className="block px-4 py-2 text-gray-800 hover:text-gray-600">About</Link>
                    <Link to="/blog" className="block px-4 py-2 text-gray-800 hover:text-gray-600">Blog</Link>
                    <Link to="/get-app" className="block px-4 py-2 text-gray-800 hover:text-gray-600">Get the App</Link>
                    <Link to="/add-lab" className="block px-4 py-2 text-gray-800 hover:text-gray-600">Add Lab</Link>
                    <Link to="/login" className="block px-4 py-2 text-blue-500 hover:text-blue-400">Login</Link>
                    <Link to="/signup" className="block px-4 py-2 text-blue-500 hover:text-blue-400">Sign Up</Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
