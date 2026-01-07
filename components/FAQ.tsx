import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = t('faq.list', { returnObjects: true }) as Array<{ q: string, a: string }>;

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">{t('faq.badge')}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            {t('faq.title')}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-slate-100">
              <button
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-orange-500' : 'text-slate-900 group-hover:text-orange-500'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-all ${openIndex === i ? 'bg-slate-900 text-white rotate-180' : 'text-slate-600'}`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-slate-500">
          {t('faq.moreQuestions')} <a href="#" className="text-orange-500 font-bold hover:underline">{t('faq.sendEmail')}</a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
