import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 bg-[#FAF5E4] h-[10vh] w-full flex items-center justify-between px-4 md:px-8 shadow-md z-50">
            <h1 className="text-2xl font-bold text-green-800">Amrutan</h1>
            
            {/* Hamburger Icon for Small Screens */}
            <button className="text-green-800 md:hidden" onClick={toggleMenu}>
                <i className="fa-solid fa-bars text-2xl hover:text-green-600 text-green-800"></i>
            </button>

            {/* Navigation Links */}
            <ul className={`absolute md:static top-[10vh] left-0 w-full md:w-auto bg-[#FAF5E4] md:bg-transparent md:flex md:gap-6 px-4 py-4 md:py-0 transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                <li className="text-green-800 font-semibold hover:text-green-600 cursor-pointer">Home</li>
                <li className="text-green-800 font-semibold hover:text-green-600 cursor-pointer">About</li>
                <li className="text-green-800 font-semibold hover:text-green-600 cursor-pointer">Services</li>
                <li className="text-green-800 font-semibold hover:text-green-600 cursor-pointer">Contact</li>
            </ul>
        </nav>
    );
};

export default NavBar;
