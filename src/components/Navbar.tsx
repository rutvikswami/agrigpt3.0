import { Sprout, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';
import { LanguageSelector } from './LanguageSelector';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
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
            <Link to="/" className="text-gray-700 hover:text-green-600">{t('home', language)}</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">{t('about', language)}</Link>
            <Link to="/farming-types" className="text-gray-700 hover:text-green-600">{t('farmingTypes', language)}</Link>
            <Link to="/faq" className="text-gray-700 hover:text-green-600">{t('faq', language)}</Link>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <LanguageSelector />
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
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-green-600 px-2 py-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home', language)}
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-green-600 px-2 py-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about', language)}
              </Link>
              <Link 
                to="/farming-types" 
                className="text-gray-700 hover:text-green-600 px-2 py-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('farmingTypes', language)}
              </Link>
              <Link 
                to="/faq" 
                className="text-gray-700 hover:text-green-600 px-2 py-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('faq', language)}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}