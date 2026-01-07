import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Showcase: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-20">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">{t('showcase.badge')}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            {t('showcase.title')}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {t('showcase.subtitle')}
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
          <div className="relative max-w-5xl mx-auto bg-white rounded-[2.5rem] p-2 md:p-6 shadow-2xl border border-slate-200">
            <img src="https://picsum.photos/seed/app/1400/800" alt="App interface" className="rounded-[1.5rem] w-full" />

            {/* Decorative UI elements to mimic complexity */}
            <div className="absolute -top-10 -right-10 hidden lg:block bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-bounce transition-all duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Check size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{t('showcase.ui.taskCompleted')}</p>
                  <p className="text-sm font-bold text-slate-900">Homepage Redesign</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-10 hidden lg:block bg-slate-900 p-6 rounded-2xl shadow-xl text-white">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700"></div>)}
                </div>
                <p className="text-sm font-bold">+12 {t('showcase.ui.peopleOnline')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
