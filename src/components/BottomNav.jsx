import React from 'react';
import { Link, useLocation } from 'react-router-dom';
  
import { FaHome, FaCheckCircle, FaUser } from 'react-icons/fa';

const BottomNav = () => {
    const { pathname } = useLocation();

    return (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center gap-32 z-50">
            {/* Home Button */}
            <Link
                to="/"
                aria-label="Home"
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-transparent transition hover:bg-gray-100
                    ${pathname === '/' ? 'ring-2 ring-black' : ''}`}
            >
                <FaHome className="text-black text-xl" />
            </Link>

            {/* Authentic Button */}
            <Link
                to="/authentic"
                aria-label="Authentic"
                className={`w-20 h-20 flex items-center justify-center rounded-full bg-transparent transition hover:bg-gray-100
                    ${pathname === '/search' ? 'ring-2 ring-black' : ''}`}
            >
                <FaCheckCircle className="text-black text-4xl" />
            </Link>

            {/* Profile Button */}
            <Link
                to="/profile"
                aria-label="Profile"
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-transparent transition hover:bg-gray-100
                    ${pathname === '/profile' ? 'ring-2 ring-black' : ''}`}
            >
                <FaUser className="text-black text-xl" />
            </Link>
        </div>
    );
};

export default BottomNav;

