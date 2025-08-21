import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import TopBar from "./TopBar";

export default function Navigation() {
  return (
      <nav className="bg-beig text-dark px-6 w-full font-utah border border-dark sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-dark">

          {/* Left: Search Icon */}
          <button className="text-lg hover:opacity-70 hidden md:flex">
            <FaSearch />
          </button>

          {/* Center: Brand Name */}
          <h1 className="text-[32px] md:text-[40px] font-bold tracking-wider">
            AMINLABS
          </h1>

          {/* Right: Icons */}
          <div className="flex items-center gap-5">
            <button className="hover:opacity-70 hidden md:flex">
              <FaShoppingCart className="text-black text-lg" />
            </button>
            <button className="hover:opacity-70 hidden md:flex">
              <FaHeart className="text-black text-lg" />
            </button>
            <button className="hover:opacity-70 hidden md:flex">
              <FaUser className="text-black text-lg" />
            </button>
            <button className="hover:opacity-70">
              <FaBars className="text-black text-lg" />
            </button>
          </div>
        </div>
      </nav>
  );
}
