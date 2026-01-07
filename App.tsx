
import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Check,
  Play,
  BarChart3,
  MessageSquare,
  Layout,
  Smartphone,
  ShieldCheck,
  Briefcase,
  Star,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Zap,
  ArrowRight
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import DetailedFeatures from './components/DetailedFeatures';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <DetailedFeatures />
        <FeatureGrid />
        <HowItWorks />
        <Showcase />
        <Testimonials />
        <Pricing />
        <FAQ />

        {/* Final CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto rounded-3xl bg-orange-50 p-8 md:p-16 text-center border border-orange-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -ml-32 -mb-32 opacity-50"></div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 relative z-10">
              Your most productive team is <br className="hidden md:block" /> just one click away
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto relative z-10">
              Join over 50,000 teams who have already revolutionized their workflow with Planora.
              Start your free trial today and experience the difference in just 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 active:scale-95">
                Unlock team success
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold border border-slate-200 rounded-xl transition-all active:scale-95">
                See how it works
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
