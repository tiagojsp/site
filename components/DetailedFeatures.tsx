
import React from 'react';
import { Check } from 'lucide-react';

const DetailedFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">SOLUTIONS</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            One platform, endless <br className="hidden md:block" /> possibilities
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Whether you're managing complex projects, tracking team performance, or fostering seamless collaboration, Planora adapts to your unique workflow needs.
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
            <h3 className="text-3xl font-bold text-slate-900 mb-6">From chaos to clarity: complete project control</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Transform scattered tasks into streamlined workflows with Planora's intelligent project management system.
            </p>
            <ul className="space-y-4">
              {['Kanban board perfection', 'Timeline visualization', 'Smart task dependencies', 'Progress tracking'].map((item, idx) => (
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
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Data-driven team success: analytics that actually matter</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Stop guessing about team performance. Get actionable insights with comprehensive analytics dashboards.
            </p>
            <ul className="space-y-4">
              {['Unified team dashboard', 'Individual performance tracking', 'Workload optimization', 'Predictive analytics'].map((item, idx) => (
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
            <div className="absolute -inset-4 bg-orange-50 rounded-3xl rotate-2"></div>
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
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Connected teams, exceptional results: collaboration reimagined</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Break down communication silos and keep your team aligned, whether they're in the office or working remotely.
            </p>
            <ul className="space-y-4">
              {['Real-time collaboration', 'Cross-department visibility', 'Communication hub', 'Mobile-first design'].map((item, idx) => (
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
