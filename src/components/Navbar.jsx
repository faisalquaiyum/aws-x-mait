import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // useEffect(() => {
  //   // Check for saved theme preference or default to dark mode
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme === "light") {
  //     setIsDarkMode(false);
  //     document.documentElement.classList.remove("dark");
  //   } else {
  //     setIsDarkMode(true);
  //     document.documentElement.classList.add("dark");
  //   }
  // }, []);

  // const toggleTheme = () => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //     setIsDarkMode(false);
  //   } else {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //     setIsDarkMode(true);
  //   }
  // };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/teams", label: "Teams" },
    { path: "/about-aws", label: "AWS" },
    { path: "/about-mait", label: "MAIT" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[#1a1d23]/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-[#2a2e35]">
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
                className={`py-2 font-medium text-base relative transition-all duration-200 inline-block ${
                  location.pathname === item.path
                    ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white"
                    : "text-[#aab7b8] hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            {/* <button
              onClick={toggleTheme}
              className="hidden md:flex items-center justify-center w-11 h-11 rounded-full border-[2px] border-gray-800/40 bg-gray-900/60 backdrop-blur-xl text-gray-300 font-medium text-base hover:border-white/50 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)]"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FaSun className="text-lg" />
              ) : (
                <FaMoon className="text-lg" />
              )}
            </button> */}

            {/* Login Button */}
            <a
              href="#"
              className="hidden md:flex items-center px-6 py-2.5 rounded-full border-[2px] border-[#2a2e35] bg-[#1a1d23] backdrop-blur-xl text-[#aab7b8] font-medium text-base hover:border-white/50 hover:text-white hover:scale-105 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)]"
            >
              Login
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-full border-[2px] border-[#2a2e35] bg-[#1a1d23] backdrop-blur-xl text-[#aab7b8] hover:border-white/50 hover:text-white hover:scale-105 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)]"
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
          <div className="mx-4 mt-2 mb-4 p-6 rounded-3xl bg-[#1a1d23]/95 backdrop-blur-2xl border border-[#2a2e35] shadow-2xl flex flex-col space-y-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 font-medium text-base relative transition-all duration-200 inline-block ${
                  location.pathname === item.path
                    ? "text-white after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white"
                    : "text-[#aab7b8] hover:text-white after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Login button in mobile */}
            <a
              href="#"
              className="px-6 py-3 rounded-full border-[2px] border-[#2a2e35] bg-[#1a1d23] backdrop-blur-xl text-[#aab7b8] font-medium text-base hover:border-white/50 hover:text-white transition-all duration-200 text-center hover:shadow-[0_0_15px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)]"
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
