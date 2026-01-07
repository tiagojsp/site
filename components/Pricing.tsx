
import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter Plan",
      price: "0",
      desc: "Perfect for small teams getting started with task management.",
      cta: "Get Started Free",
      features: [
        "Up to 5 team members",
        "3 projects maximum",
        "Basic task management",
        "Kanban board view",
        "Email support",
        "Mobile app access",
        "1GB storage"
      ],
      popular: false,
      dark: false
    },
    {
      name: "Professional Plan",
      price: "12",
      desc: "Everything growing teams need to scale productivity.",
      cta: "Start 14-Day Free Trial",
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Advanced analytics dashboard",
        "All project views (Kanban, Timeline, Calendar)",
        "Priority email support",
        "Custom workflows & automation",
        "Time tracking & reporting"
      ],
      popular: true,
      dark: true
    },
    {
      name: "Enterprise Plan",
      price: "24",
      desc: "Advanced features for large organizations and complex workflows.",
      cta: "Contact Sales",
      features: [
        "Everything in Professional",
        "Advanced security & compliance",
        "Single Sign-On (SSO)",
        "Custom branding & white-labeling",
        "Dedicated customer success manager",
        "Advanced API access",
        "Custom integrations"
      ],
      popular: false,
      dark: false
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">PRICING</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            Choose your plan
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Start free and scale as your team grows. No hidden fees, no long-term commitments, just transparent pricing that works for teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`rounded-[2.5rem] p-10 flex flex-col relative transition-all duration-300 hover:scale-[1.02] ${
                p.dark ? 'bg-slate-900 text-white pricing-card-shadow scale-105 z-10' : 'bg-slate-50 text-slate-900 border border-slate-100'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10">
                <p className="text-lg font-bold mb-2">{p.name}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-black">${p.price}</span>
                  <span className={p.dark ? 'text-slate-400' : 'text-slate-500'}>/ month</span>
                </div>
                <p className={`text-sm ${p.dark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {p.desc}
                </p>
              </div>
              
              <button className={`w-full py-4 rounded-xl font-bold mb-10 transition-colors ${
                p.dark 
                  ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                  : 'bg-white hover:bg-slate-100 text-slate-900 border border-slate-200'
              }`}>
                {p.cta}
              </button>
              
              <div className="flex-1">
                <p className={`text-sm font-bold uppercase tracking-widest mb-6 ${p.dark ? 'text-white' : 'text-slate-400'}`}>Features</p>
                <ul className="space-y-4">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 flex items-center justify-center shrink-0 w-5 h-5 rounded-full ${p.dark ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                        <Check size={12} />
                      </div>
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
