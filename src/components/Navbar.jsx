import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-aws", label: "AWS" },
    { path: "/about-mait", label: "MAIT" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200/20 dark:border-gray-700/30">
      <div className="container mx-auto px-8 md:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <span className="text-xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                AWS×MAIT
              </span>
            </Link>
          </div>

          {/* Centered Navigation */}
          <div className="hidden md:flex space-x-10 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-2 font-medium text-base relative transition-all duration-300 inline-block ${
                  location.pathname === item.path
                    ? "text-aws-orange after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-aws-orange after:shadow-[0_0_8px_rgba(255,107,53,0.6)]"
                    : "text-gray-300 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Login Button */}
            <a
              href="#"
              className="hidden md:flex items-center px-6 py-2.5 rounded-full border-[2px] border-gray-800/40 bg-gray-900/60 backdrop-blur-xl text-gray-300 font-medium text-base hover:border-white/50 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)]"
            >
              Login
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-full border-[2px] border-gray-800/40 bg-gray-900/60 backdrop-blur-xl text-gray-300 hover:border-white/50 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)]"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-4 mt-2 mb-4 p-6 rounded-3xl bg-gray-900/80 backdrop-blur-2xl border border-gray-800/30 shadow-2xl flex flex-col space-y-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 font-medium text-base relative transition-all duration-300 inline-block ${
                  location.pathname === item.path
                    ? "text-aws-orange after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-aws-orange after:shadow-[0_0_8px_rgba(255,107,53,0.6)]"
                    : "text-gray-300 hover:text-white after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Login button in mobile */}
            <a
              href="#"
              className="px-6 py-3 rounded-full border-[2px] border-gray-800/40 bg-gray-900/60 backdrop-blur-xl text-gray-300 font-medium text-base hover:border-white/50 transition-all duration-300 text-center hover:shadow-[0_0_15px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)]"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
