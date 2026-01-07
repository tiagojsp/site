
import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const links = {
    Product: ['Features', 'Solutions', 'Pricing', 'Integrations', 'Mobile apps'],
    Resources: ['Help center', 'Video tutorials', 'Community forum', 'Knowledge base', 'Templates'],
    Company: ['About us', 'Careers', 'Blog', 'Press kit', 'Customer stories']
  };

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
              </div>
              <span className="text-2xl font-black tracking-tighter">PLANORA</span>
            </a>
            <p className="text-slate-400 max-w-xs mb-8 leading-relaxed">
              Planora transforms the chaotic world of task management into an elegant, intuitive experience.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items], i) => (
            <div key={i}>
              <h5 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">{title}</h5>
              <ul className="space-y-4">
                {items.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            Copyright 2024 Planora, Inc. All right reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
