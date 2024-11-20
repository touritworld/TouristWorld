import React from "react";
import { Link } from "react-router-dom";
import { Car, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                NOMBRE EMPRESA
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link to="/book" className="text-gray-600 hover:text-blue-600">
              Book Service
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600">
              Blog
            </Link>
            <Link
              to="/book"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Reservar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/book"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Book Service
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
