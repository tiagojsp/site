import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getTestimonials } from '../services/testimonialsService';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  if (loading) {
    return <div className="py-24 text-center">Loading testimonials...</div>;
  }

  if (testimonials.length === 0) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>No testimonials yet.</p>
        </div>
      </section>
    );
  }

  const getContent = (item: Testimonial, field: 'role' | 'content') => {
    const isPt = i18n.language === 'pt';
    const ptField = `${field}_pt` as keyof Testimonial;
    // @ts-ignore
    return (isPt && item[ptField]) ? item[ptField] : item[field];
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">{t('testimonials.badge')}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-slate-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-10 right-10 text-[10rem] font-serif leading-none text-orange-200/40 select-none">“</div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center relative z-10">
            <div className="flex flex-col gap-4">
              {/* Active Image */}
              <img
                src={activeTestimonial.avatar_url || "https://placehold.co/300"}
                alt={activeTestimonial.name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover shadow-lg"
              />
              {/* Thumbnails */}
              <div className="flex gap-2 flex-wrap">
                {testimonials.map((t, index) => (
                  <img
                    key={t.id}
                    src={t.avatar_url || "https://placehold.co/60"}
                    onClick={() => setActiveIndex(index)}
                    className={`w-12 h-12 rounded-lg object-cover cursor-pointer transition-all ${index === activeIndex ? 'opacity-100 ring-2 ring-orange-400' : 'opacity-40 hover:opacity-100'
                      }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-medium mb-10 italic">
                “{getContent(activeTestimonial, 'content')}”
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-xl font-bold text-slate-900">{activeTestimonial.name}</h5>
                  <p className="text-slate-500">{getContent(activeTestimonial, 'role')}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={i < activeTestimonial.rating ? "currentColor" : "none"}
                        className={i < activeTestimonial.rating ? "text-orange-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900">{activeTestimonial.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
