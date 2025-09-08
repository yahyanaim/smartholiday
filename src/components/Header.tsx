import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('voyage'), href: '/voyage' },
    { name: t('aboutUs'), href: '/about' },
    { name: t('contactUs'), href: '/contact' },
  ];

  const whatsappLink = "https://wa.me/1234567890?text=Hello%2C%20I%27d%20like%20to%20make%20a%20reservation";

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-sky-500 to-orange-500 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-orange-600 bg-clip-text text-transparent">
              WanderLux
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.href
                    ? 'text-sky-600 bg-sky-50 border-b-2 border-sky-600'
                    : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Book Now Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-xs font-medium transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-white text-sky-600 shadow-md'
                    : 'text-gray-600 hover:text-sky-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 rounded text-xs font-medium transition-all duration-300 ${
                  language === 'fr'
                    ? 'bg-white text-sky-600 shadow-md'
                    : 'text-gray-600 hover:text-sky-600'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 rounded text-xs font-medium transition-all duration-300 ${
                  language === 'es'
                    ? 'bg-white text-sky-600 shadow-md'
                    : 'text-gray-600 hover:text-sky-600'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`px-2 py-1 rounded text-xs font-medium transition-all duration-300 ${
                  language === 'de'
                    ? 'bg-white text-sky-600 shadow-md'
                    : 'text-gray-600 hover:text-sky-600'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage('it')}
                className={`px-2 py-1 rounded text-xs font-medium transition-all duration-300 ${
                  language === 'it'
                    ? 'bg-white text-sky-600 shadow-md'
                    : 'text-gray-600 hover:text-sky-600'
                }`}
              >
                IT
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2 py-1 rounded text-xs font-medium transition-all duration-300 ${
                  language === 'ar'
                    ? 'bg-white text-sky-600 shadow-md'
                    : 'text-gray-600 hover:text-sky-600'
                }`}
                style={{
                  fontFamily: language === 'ar' ? 'Arial, sans-serif' : 'inherit',
                  direction: language === 'ar' ? 'rtl' : 'ltr'
                }}
              >
                العربية
              </button>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              {t('bookNow')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex items-center space-x-0.5 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-xs font-medium ${
                  language === 'en' ? 'bg-white text-sky-600' : 'text-gray-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 rounded text-xs font-medium ${
                  language === 'fr' ? 'bg-white text-sky-600' : 'text-gray-600'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-1 py-1 rounded text-xs font-medium ${
                  language === 'es' ? 'bg-white text-sky-600' : 'text-gray-600'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`px-1 py-1 rounded text-xs font-medium ${
                  language === 'de' ? 'bg-white text-sky-600' : 'text-gray-600'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage('it')}
                className={`px-1 py-1 rounded text-xs font-medium ${
                  language === 'it' ? 'bg-white text-sky-600' : 'text-gray-600'
                }`}
              >
                IT
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-1 py-1 rounded text-xs font-medium ${
                  language === 'ar' ? 'bg-white text-sky-600' : 'text-gray-600'
                }`}
                style={{
                  fontFamily: language === 'ar' ? 'Arial, sans-serif' : 'inherit',
                  direction: language === 'ar' ? 'rtl' : 'ltr'
                }}
              >
                ع
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-sky-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('bookNow')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;