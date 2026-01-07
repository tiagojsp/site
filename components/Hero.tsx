import React from 'react';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 gradient-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
          {t('hero.title_prefix')} <br />
          <span className="text-orange-500">{t('hero.title_highlight')}</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 active:scale-95">
            {t('hero.cta_primary')}
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95">
            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
              <Play size={12} fill="currentColor" />
            </div>
            {t('hero.cta_secondary')}
          </button>
        </div>

        {/* Mock Dashboard Representation */}
        <div className="max-w-6xl mx-auto relative group">
          <div className="absolute inset-0 bg-orange-500/5 rounded-[2rem] blur-3xl group-hover:bg-orange-500/10 transition-colors duration-500"></div>
          <div className="relative bg-white rounded-[2rem] border border-slate-200 shadow-2xl p-2 md:p-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <img
              src="https://picsum.photos/seed/dashboard/1600/1000"
              alt="Planora Dashboard"
              className="rounded-[1.5rem] w-full h-auto object-cover aspect-[16/10] grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
