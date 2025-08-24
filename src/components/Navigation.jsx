import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-beig text-dark px-6 w-full font-utah border border-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-dark">
        
        {/* Left: Search Icon */}
        <button className="text-lg hover:opacity-70 hidden md:flex">
          <FaSearch />
        </button>

        {/* Center: Brand Name */}
        <Link to="/" className="text-[32px] md:text-[40px] font-bold tracking-wider">
          AMINLABS
        </Link>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <Link to="/cart" className="hover:opacity-70 hidden md:flex">
            <FaShoppingCart className="text-black text-lg" />
          </Link>
          {/* Wishlist */}
          <Link to="/wishlist" className="hover:opacity-70 hidden md:flex">
            <FaHeart className="text-black text-lg" />
          </Link>
          {/* Account */}
          <Link to="/account" className="hover:opacity-70 hidden md:flex">
            <FaUser className="text-black text-lg" />
          </Link>

          {/* Hamburger (mobile) */}
          <button
            className="hover:opacity-70 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="text-black text-xl" />
            ) : (
              <FaBars className="text-black text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-beig border-t border-dark px-6 py-4 flex flex-col gap-4 text-black">
          <button className="flex items-center gap-2 hover:opacity-70">
            <FaSearch /> Search
          </button>
          <Link
            to="/cart"
            className="flex items-center gap-2 hover:opacity-70"
            onClick={() => setIsOpen(false)}
          >
            <FaShoppingCart /> Cart
          </Link>
          <Link
            to="/wishlist"
            className="flex items-center gap-2 hover:opacity-70"
            onClick={() => setIsOpen(false)}
          >
            <FaHeart /> Wishlist
          </Link>
          <Link
            to="/account"
            className="flex items-center gap-2 hover:opacity-70"
            onClick={() => setIsOpen(false)}
          >
            <FaUser /> Account
          </Link>
        </div>
      )}
    </nav>
  );
}
