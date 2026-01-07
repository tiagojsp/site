import React from 'react';
import { useTranslation } from 'react-i18next';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      num: "1",
      title: t('howItWorks.steps.0.title'),
      desc: t('howItWorks.steps.0.description'),
      image: "https://picsum.photos/seed/step1/400/300"
    },
    {
      num: "2",
      title: t('howItWorks.steps.1.title'),
      desc: t('howItWorks.steps.1.description'),
      image: "https://picsum.photos/seed/step2/400/300"
    },
    {
      num: "3",
      title: t('howItWorks.steps.2.title'),
      desc: t('howItWorks.steps.2.description'),
      image: "https://picsum.photos/seed/step3/400/300"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">{t('howItWorks.badge')}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            {t('howItWorks.title')}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="mb-10 relative">
                <img src={s.image} alt={s.title} className="rounded-2xl w-full shadow-lg" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                <span className="text-orange-500">{s.num}. </span>
                {s.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
