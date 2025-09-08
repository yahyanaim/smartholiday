import React from 'react';
import { Plane, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-sky-500 to-orange-500 p-2 rounded-full">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">WanderLux</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating extraordinary travel experiences for over 15 years. Your journey begins with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">{t('home')}</a></li>
              <li><a href="/voyage" className="text-gray-400 hover:text-white transition-colors duration-300">{t('voyage')}</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">{t('aboutUs')}</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">{t('contactUs')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sky-400 mt-0.5" />
                <span className="text-gray-400 text-sm">123 Travel Street, City, Country</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sky-400" />
                <span className="text-gray-400 text-sm">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sky-400" />
                <span className="text-gray-400 text-sm">info@wanderlux.com</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('workingHours')}</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-sky-400 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>{t('mondayFriday')}</p>
                  <p>{t('weekend')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 WanderLux Travel Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;