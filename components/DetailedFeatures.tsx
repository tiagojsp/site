import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const DetailedFeatures: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">{t('detailedFeatures.badge')}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            {t('detailedFeatures.title_prefix')} <br className="hidden md:block" /> {t('detailedFeatures.title_suffix')}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {t('detailedFeatures.description')}
          </p>
        </div>

        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-orange-100 rounded-3xl -rotate-2"></div>
            <img
              src="https://picsum.photos/seed/kanban/800/600"
              alt="Project Control"
              className="relative rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">{t('detailedFeatures.feature1.title')}</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {t('detailedFeatures.feature1.description')}
            </p>
            <ul className="space-y-4">
              {(t('detailedFeatures.feature1.list', { returnObjects: true }) as string[]).map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="bg-slate-900 text-white p-1 rounded-full">
                    <Check size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">{t('detailedFeatures.feature2.title')}</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {t('detailedFeatures.feature2.description')}
            </p>
            <ul className="space-y-4">
              {(t('detailedFeatures.feature2.list', { returnObjects: true }) as string[]).map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="bg-slate-900 text-white p-1 rounded-full">
                    <Check size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-5 rounded-3xl rotate-2"></div>
            <img
              src="https://picsum.photos/seed/analytics/800/600"
              alt="Team Analytics"
              className="relative rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-orange-100 rounded-3xl -rotate-1"></div>
            <img
              src="https://picsum.photos/seed/collaboration/800/600"
              alt="Collaboration"
              className="relative rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">{t('detailedFeatures.feature3.title')}</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {t('detailedFeatures.feature3.description')}
            </p>
            <ul className="space-y-4">
              {(t('detailedFeatures.feature3.list', { returnObjects: true }) as string[]).map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="bg-slate-900 text-white p-1 rounded-full">
                    <Check size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
