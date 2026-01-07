import React from 'react';
import { useTranslation } from 'react-i18next';

const LogoBar: React.FC = () => {
  const { t } = useTranslation();
  const logos = ['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'];

  return (
    <div className="py-12 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          {t('logoBar.subtitle')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2 text-2xl font-bold text-slate-900 select-none">
              <div className="w-6 h-6 bg-slate-400 rounded-sm"></div>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
