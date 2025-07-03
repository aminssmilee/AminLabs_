import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/aminss.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation(); // Tambahkan ini

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-transparent  px-6 py-3 fixed top-0 left-0 w-full z-50 font-amsi backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xl font-medium tracking-wider">
          <Link
            to="/"
            className={` transition ${
              isActive('/') ? 'underline underline-offset-4 text-black' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/product"
            className={`transition ${
              isActive('/product') ? 'underline underline-offset-4 text-black' : ''
            }`}
          >
            Product
          </Link>
        </div>

        {/* Right Icon */}
        <div className="hidden md:flex items-center gap-5 text-xl">
          <button title="Menu" className=" transition">☰</button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 font-medium uppercase text-center">
          <Link
            to="/"
            onClick={toggleMenu}
            className={`block hover:text-primary transition ${
              isActive('/') ? 'underline underline-offset-4 text-primary' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/product"
            onClick={toggleMenu}
            className={`block hover:text-primary transition ${
              isActive('/product') ? 'underline underline-offset-4 text-primary' : ''
            }`}
          >
            Product
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
