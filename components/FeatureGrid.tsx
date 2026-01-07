import React from 'react';
import { Layout, MessageSquare, BarChart3, Smartphone, ShieldCheck, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeatureGrid: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Briefcase size={20} />,
      title: t('featureGrid.cards.0.title'),
      description: t('featureGrid.cards.0.description'),
      image: "https://picsum.photos/seed/task/400/250"
    },
    {
      icon: <MessageSquare size={20} />,
      title: t('featureGrid.cards.1.title'),
      description: t('featureGrid.cards.1.description'),
      image: "https://picsum.photos/seed/team/400/250"
    },
    {
      icon: <BarChart3 size={20} />,
      title: t('featureGrid.cards.2.title'),
      description: t('featureGrid.cards.2.description'),
      image: "https://picsum.photos/seed/chart/400/250"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">{t('featureGrid.badge')}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            {t('featureGrid.title')}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {t('featureGrid.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h4>
              <p className="text-slate-600 mb-8">{f.description}</p>
              <img src={f.image} alt={f.title} className="rounded-2xl w-full grayscale-[0.5] group-hover:grayscale-0 transition-all" />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex items-start gap-6">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex shrink-0 items-center justify-center">
              <Layout size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('featureGrid.bottom.0.title')}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{t('featureGrid.bottom.0.description')}</p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex items-start gap-6">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex shrink-0 items-center justify-center">
              <Smartphone size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('featureGrid.bottom.1.title')}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{t('featureGrid.bottom.1.description')}</p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex items-start gap-6">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex shrink-0 items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('featureGrid.bottom.2.title')}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{t('featureGrid.bottom.2.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
