
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


      </main>
      <Footer />
    </div>
  );
};

export default App;
