import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = isScrolled
    ? "bg-background shadow-lg"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-12 w-auto" src={logo} alt="Service WorldTour" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/book"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Book Service
            </Link>
            <Link
              to="/blog"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/book"
              className="bg-primary text-background font-bold px-5 py-2 rounded-md hover:bg-yellow-500 transition-transform transform hover:scale-105"
            >
              Reservar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-text-secondary hover:text-primary rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/book"
              className="block px-3 py-2 text-text-secondary hover:text-primary rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Book Service
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-text-secondary hover:text-primary rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/book"
              className="block w-full text-left bg-primary text-background font-bold mt-2 px-3 py-2 rounded-md hover:bg-yellow-500"
              onClick={() => setIsOpen(false)}
            >
              Reservar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
