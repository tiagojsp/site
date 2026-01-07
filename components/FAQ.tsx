
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "How long does it take to set up Planora?",
      a: "Setting up Planora takes less than 5 minutes. Simply create your account, invite your team members, and you're ready to start creating projects and tasks. We also offer guided onboarding tours to help you get familiar with key features."
    },
    {
      q: "Do I need a credit card to start my free trial?",
      a: "No, you don't need a credit card to start your 14-day free trial of the Professional Plan. You'll only need to provide billing information if you decide to continue after the trial ends."
    },
    {
      q: "Can I import my existing tasks and projects?",
      a: "Yes! Planora supports importing from Trello, Asana, Monday.com, and CSV files. Our import wizard makes it easy to bring all your existing work over in just a few clicks."
    },
    {
      q: "Can I change my plan at any time?",
      a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes are applied immediately."
    },
    {
      q: "Can I customize workflows to match my team's process?",
      a: "Yes, Planora is highly customizable. You can create custom task statuses, fields, and automated workflows that perfectly match how your specific team works."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            Frequently asked questions
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Got questions? We've got answers. Find everything you need to know about Planora.
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
          Still have a question? <a href="#" className="text-orange-500 font-bold hover:underline">Send email</a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
