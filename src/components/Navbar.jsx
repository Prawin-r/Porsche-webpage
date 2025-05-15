import { useState, useEffect } from "react";
import { Menu, User } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 👇 Automatically close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <nav className=" top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black bg-opacity-100 text-white backdrop-blur-md">
      {/* Left: Hamburger Icon */}
      <div className="flex items-center">
        <button onClick={toggleMenu} className="p-2 focus:outline-none">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-black text-white p-6 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-6 mt-16 text-lg font-light">
          <li>
            <a href="#home" onClick={toggleMenu} className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#models" onClick={toggleMenu} className="hover:underline">
              Models
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu} className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu} className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Center: Porsche Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img
          src="/models/porsche.png"
          alt="Porsche Logo"
          className="h-2 md:h-8"
        />
      </div>

      {/* Right: User Icon */}
      <div>
        <User className="h-5 w-5" />
      </div>
    </nav>
  );
}
