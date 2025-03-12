import { Sprout, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sprout className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              <span className="ml-2 text-lg sm:text-xl font-bold text-gray-900">AgriGPT</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
            <Link to="/farming-types" className="text-gray-700 hover:text-green-600">Farming Types</Link>
            <Link to="/faq" className="text-gray-700 hover:text-green-600">FAQ</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-green-600 px-2 py-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-green-600 px-2 py-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/farming-types" 
                className="text-gray-700 hover:text-green-600 px-2 py-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Farming Types
              </Link>
              <Link 
                to="/faq" 
                className="text-gray-700 hover:text-green-600 px-2 py-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}