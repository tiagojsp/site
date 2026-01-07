import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">PLANORA</span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors flex items-center gap-1">
                Solutions <ChevronDown size={14} />
              </a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">{t('nav.features')}</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Showcase</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">{t('nav.testimonials')}</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">{t('nav.pricing')}</a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSelector />
            <button className="text-sm font-semibold text-slate-900 hover:text-orange-500 px-4 py-2 transition-colors">
              {t('nav.login')}
            </button>
            <button className="text-sm font-bold bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-all shadow-md active:scale-95">
              {t('nav.getStarted')}
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 space-y-4 shadow-xl">
          <a href="#" className="block py-2 text-lg font-medium text-slate-900">Solutions</a>
          <a href="#" className="block py-2 text-lg font-medium text-slate-900">{t('nav.features')}</a>
          <a href="#" className="block py-2 text-lg font-medium text-slate-900">Showcase</a>
          <a href="#" className="block py-2 text-lg font-medium text-slate-900">{t('nav.testimonials')}</a>
          <a href="#" className="block py-2 text-lg font-medium text-slate-900">{t('nav.pricing')}</a>
          <div className="py-2">
            <LanguageSelector />
          </div>
          <hr />
          <div className="flex flex-col gap-3 pt-2">
            <button className="w-full py-4 text-center font-bold text-slate-900 border border-slate-200 rounded-xl">{t('nav.login')}</button>
            <button className="w-full py-4 text-center font-bold bg-orange-500 text-white rounded-xl">{t('nav.getStarted')}</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
